import React from "react";
import PropTypes from "prop-types";

import types from "../../utils/courseTypes.js";
import styles from "./styles.css";

const featuredItem = ({ course }) => {
  const baseIMGURL = "https://storage.cebroker.com/CEBroker";

  return (
    <div key={course.id} className="row ">
      <div className="col-sm-12">
        <div className={`${styles.wrapper} hvr-box-shadow-outset`}>
          <div className={`${styles.divImg}`}>
            <img
              className="img-responsive"
              src={`${baseIMGURL}/${course.coursePublication.course
                .featuredBanner}`}
              alt=""
            />
          </div>
          <div className={`${styles.divContent}`}>
            <div className={`${styles.cardTitle}`}>
              {course.coursePublication.course.name}
            </div>
            <div className={`${styles.subTitle}`}>
              {course.coursePublication.course.provider.name}
            </div>

            <div className={`${styles.timeNeeded}`}>
              {Math.floor(Math.random() * 100 + 1)} Hrs •{" "}
              {types[Math.floor(Math.random() * types.length + 0)]}
            </div>
            <hr className={`${styles.hr}`} />
            <span className={`${styles.priceCourse}`}>
              $ {Math.floor(Math.random() * 100 + 1).toFixed(2)}{" "}
            </span>
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
  );
};

featuredItem.propTypes = {
  course: PropTypes.object
};
export default featuredItem;
