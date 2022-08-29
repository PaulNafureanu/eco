import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./../css/customerMenu.css";

interface CustomerMenuProps {}

const CustomerMenu: React.FunctionComponent<CustomerMenuProps> = () => {
  return (
    <div id="Customer-menu">
      <a href="#">
        <FontAwesomeIcon className="faIcon" icon={faSearch} />
      </a>
      <a href="#">
        <FontAwesomeIcon className="faIcon" icon={faShoppingBag} />
      </a>
      <a href="#">
        <FontAwesomeIcon className="faIcon" icon={faUser} />
      </a>
    </div>
  );
};

export default CustomerMenu;
