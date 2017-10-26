import React from "react";
import { PulseLoader } from "halogen";
import PropTypes from "prop-types";

import Course from "../courseItem";
import styles from "./styles.css";

const ResultsSearch = ({ courses, loading }) => {
  if (!courses.items) return <div />;

  if (loading) return <PulseLoader color="#26A65B" size="16px" margin="4px" />;

  return (
    <div>
      <h4 className={`${styles.countResultsText}`}>
        <span className={styles.numberCourses}>{courses.totalItems}</span>{" "}
        Results
      </h4>
      <div className="row">
        {courses &&
          courses.items.map(course => <Course key={course.id} item={course} />)}
      </div>
    </div>
  );
};

ResultsSearch.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool
};

export default ResultsSearch;
