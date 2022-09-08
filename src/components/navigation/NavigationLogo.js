import { NavLink } from "react-router-dom";
import IconBlack from "../../images/icon-black.png";
import ResetLocation from "../actions/ResetLocation";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="logo-section"
      onClick={() => {
        ResetLocation();
        props.ToggleMenu();
      }}
    >
      <img src={IconBlack} alt="logo"></img>
    </NavLink>
  );
};

export default NavigationLogo;
