import "./NavbarOption.css"

type NavbarOptionProps = {
  Icon: any;
  title: string;
};

function NavbarOption({ Icon, title }: NavbarOptionProps) {
  return (
    <div className="navbar-option">
      {Icon && <Icon className="navbar-option__icon" />}
      <h3 className="navbar-option__title">{title}</h3>
    </div>
  );
}

export default NavbarOption;
