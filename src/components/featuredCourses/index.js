import React, { Component } from "react";
import { PulseLoader } from "halogen";

import FeaturedCourse from "../featuredItem";
import api from "../../utils/api.js";
import styles from "./styles.css";

class FeaturedCourses extends Component {
  constructor() {
    super();
    this.state = {
      featuredCourses: [],
      dataLoaded: false,
      loading: true
    };
  }

  async componentDidMount() {
    const featuredCourses = await api.featuredCourses.getList();
    this.setState({
      featuredCourses,
      loading: false,
      dataLoaded: true
    });
  }

  shouldComponentUpdate() {
    if (this.state.dataLoaded) {
      return false;
    }
    return true;
  }

  render() {
    let { featuredCourses, loading } = this.state;
    if (loading)
      return <PulseLoader color="#26A65B" size="16px" margin="4px" />;

    return (
      <div>
        <h4 className={`${styles.titleFeaturedCourses}`}>Featured Courses</h4>
        {loading && <h2>loading...</h2>}

        {featuredCourses &&
          featuredCourses.map(course => (
            <FeaturedCourse key={course.id} course={course} />
          ))}
      </div>
    );
  }
}

export default FeaturedCourses;
