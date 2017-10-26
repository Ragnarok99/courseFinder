import React from "react";
import styles from "./styles.css";

const VerticalMenu = () => {
  return (
    <div>
      <div className="list-group">
        <button className="list-group-item">
          <i className="glyphicon glyphicon-map-marker" /> Florida
        </button>
        <button className="list-group-item">Support Center</button>
        <button className="list-group-item">Login</button>
        <button className="list-group-item">Featured</button>
        <button className="list-group-item">Account Options</button>
        <button className="list-group-item">Organizations</button>
        <button className="list-group-item">About</button>
        <button className="list-group-item ">7 day trial</button>
      </div>{" "}
    </div>
  );
};

export default VerticalMenu;
