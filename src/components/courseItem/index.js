import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const CourseItem = ({ item }) => {
  const normalizeSize = (nameCourse, caracters) => {
    if (nameCourse.length >= caracters) {
      return nameCourse.substring(0, caracters).trim() + "...";
    }
    return nameCourse;
  };

  return (
    <div key={item.id} className={`col-sm-6 col-md-4`}>
      <div className={`${styles.divContent} hvr-box-shadow-outset`}>
        <div className={`${styles.cardTitle}`}>
          {normalizeSize(item.course.name.trim(), 59)}
        </div>
        <div className={`${styles.subTitle}`}>
          {normalizeSize(item.course.provider.name.trim(), 37)}
        </div>

        <div className={`${styles.timeNeeded}`}>
          32 Hrs • {item.course.deliveryMethod.description}
        </div>
        <hr className={`${styles.hr}`} />
        <span className={`${styles.priceCourse}`}>
          $ {item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  item: PropTypes.object
};

export default CourseItem;
