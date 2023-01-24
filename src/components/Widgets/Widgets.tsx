import { Avatar } from "@mui/material";
import "./Widgets.css";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Add to your feed</h2>
      </div>
      <div className="widgets__body">
        <Avatar />
        <div>
          <h3>Denilson Lemus</h3>
          <p>Software Developer</p>
          <a href="https://www.linkedin.com/in/denilson-lemus">+ Follow</a>
        </div>
      </div>
    </div>
  );
}
