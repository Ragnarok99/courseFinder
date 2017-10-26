import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const Header = ({handleOpenSidebar}) => {

    return (
      <div className={`${styles.navbar}`}>
        <nav className={`${styles.firstNav} navbar navbar-inverse`}>
          <div className="container">
            <ul className={`${styles.optionsFirstNav} nav navbar-nav navbar-right`}>
              <li>
                <a href='#'> <i className="glyphicon glyphicon-map-marker"></i> Florida</a>
              </li>
              <li className={`${styles.separator}`}>•</li>
              <li>
                <a className={`${styles.supportCenterText}`}  href='#'>Support Center</a>
              </li>
              <li className={`${styles.separator}`}>•</li>
              <li>
                <a className={`${styles.loginText}`} href='#'>Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className={`${styles.secondNav} ${styles.navbar} navbar-default`}>
        <div className="container">            
          
          <a className={`${styles.anchorIMG} navbar-brand`} href="#"><img className={`${styles.brandLogo}`} src="https://irp-cdn.multiscreensite.com/20883819/dms3rep/multi/desktop/short-courses-online-final-logo-785x373.png" alt=""/></a>
          <button onClick={handleOpenSidebar} type="button" className={`${styles.btnToggle} collapsed navbar-toggle`} data-toggle="collapse"> 
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> 
            <span className="icon-bar"></span> 
            <span className="icon-bar"></span> 
          </button>
      
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse">
        {/* button here */}
            <ul className={`${styles.optionsSecondNav} nav navbar-nav navbar-right`}>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Account Options</a></li>

            <li><a href="#">Course Search</a></li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Organizations <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  
                </ul>
              </li>
              <li><a href="#">About</a></li>
              
              <li><div><button className={`${styles.btnTrial} btn btn-primary`} href="#">7 day trial</button></div></li>

            </ul>
          </div>{/*<!-- /.navbar-collapse -->*/}
        </div>{/*<!-- /.container-fluid -->*/}
      </nav>
      </div>
    );
}

Header.propTypes = {
  handleOpenSidebar: PropTypes.func
}

export default Header;
