import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/userSlice";
import icon from "../../assets/icon.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NavbarOption from "../NavbarOption/NavbarOption";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          src={icon}
          alt="linked out logo"
        />
        <div className="navbar__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar__right">
        <NavbarOption Icon={HomeIcon} title="Home" />
        <NavbarOption Icon={PeopleIcon} title="Network" />
        <NavbarOption Icon={BusinessCenterIcon} title="Jobs" />
        <NavbarOption Icon={TextsmsIcon} title="Messaging" />
        <NavbarOption Icon={NotificationsIcon} title="Notifications" />
        <NavbarOption
          avatar="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
          title="Log out"
          onClick={handleClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;
