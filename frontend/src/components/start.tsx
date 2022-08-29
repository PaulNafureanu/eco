import * as React from "react";
import "./../css/start.css";

interface StartProps {}

const Start: React.FunctionComponent<StartProps> = () => {
  return (
    <div id="Start">
      <div className="customer-site-container">
        <div className="customer-site">
          <img></img>
          <h1>Customer View Site</h1>
          <p>View the site as a customer</p>
        </div>
      </div>

      <div className="admin-site-container">
        <div className="admin-site">
          <img></img>
          <h1>Admin View Site</h1>
          <p>View the site management panel as an admin</p>
        </div>
      </div>
    </div>
  );
};

export default Start;
