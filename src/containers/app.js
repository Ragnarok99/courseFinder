import React, { Component } from "react";
import Sidebar from "react-sidebar";

// Own stuff
import styles from "./styles.css";
import Header from "../components/header";
import FeaturedCourses from "../components/featuredCourses";
import SearchCourses from "../components/searchCourses";
import SearchedCourses from "../components/searchedCourses";
import api from "../utils/api";
import VerticalMenu from "../components/verticalMenu";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: null,
      courses: {},
      loading: false,
      docked: false,
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
  }

  render() {
    let { courses, loading, docked } = this.state;
    const sidebar = <VerticalMenu />;

    return (
      <Sidebar
        rootClassName={`${styles.root}`}
        sidebarClassName={`${styles.sideBar}`}
        sidebar={sidebar}
        docked={docked}
      >
        <div className={styles.pageContainer}>
          <Header handleOpenSidebar={this.handleOpenSidebar} />

          <SearchCourses
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            inputValue={this.state.inputValue}
          />
          <div className="container">
            <FeaturedCourses />
            <SearchedCourses loading={loading} courses={courses} />
          </div>
        </div>
      </Sidebar>
    );
  }
  handleInputChange(inputValue) {
    this.setState({
      inputValue
    });
  }

  handleOpenSidebar() {
    this.setState({ docked: !this.state.docked });
  }

  async handleSubmit(e) {
    let { inputValue } = this.state;
    e.preventDefault();
    this.setState({
      loading: true
    });

    const courses = await api.courses.getList(inputValue);
    
    this.setState({
      courses,
      loading: false
    });
  }
}

export default App;
