import { Avatar } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import "./NavbarOption.css";

type NavbarOptionProps = {
  avatar?: any;
  Icon?: SvgIconComponent;
  title: string;
};

function NavbarOption({ avatar, Icon, title }: NavbarOptionProps) {
  return (
    <div className="navbar-option">
      {Icon && <Icon className="navbar-option__icon" />}
      {avatar && <Avatar className="navbar-option__icon" src={avatar} />}
      <h3 className="navbar-option__title">{title}</h3>
    </div>
  );
}

export default NavbarOption;
