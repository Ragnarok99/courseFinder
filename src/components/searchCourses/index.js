import React from "react";
import styles from "./styles.css";
import PropTypes from "prop-types";

const SearchCourses = ({ handleSubmit, handleInputChange, inputValue }) => {
  return (
    <div className={`${styles.wrapperSearch}`}>
      <div className="container">
        <h2 className={`${styles.titleSearch}`}>Course Search</h2>
        <div className={`${styles.formContainer}`}>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search courses and providers..."
                    value={inputValue || ""}
                    onChange={e => handleInputChange(e.target.value)}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-success" type="submit">
                      <i className="glyphicon glyphicon-search" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <span>Florida | Registered Nurse Florida</span>
        </div>
      </div>
    </div>
  );
};

SearchCourses.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  inputValue: PropTypes.string
};

export default SearchCourses;
