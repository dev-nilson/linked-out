import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt="linked out logo"
        />
        <div className="navbar__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="navbar__right">
        
      </div>
    </nav>
  );
}

export default Navbar;
