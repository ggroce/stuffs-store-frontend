import React from "react";
import "./HomePage.styles.scss";
import Directory from "../../components/directory/Directory";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <Directory />
    </div>
  </div>
);

export default HomePage;
