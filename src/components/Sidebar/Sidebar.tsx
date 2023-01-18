import { Avatar } from "@mui/material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar />
        <h2>Name LastTname</h2>
        <h4>This is a description</h4>
      </div>

      <div className="sidebar__stats">
        <div className="stat">
          <p>Who's viewed your profile</p>
          <p className="stat__number">79</p>
        </div>
        <div className="stat">
          <p>Connections</p>
          <p className="stat__number">100</p>
        </div>
      </div>
    </div>
  )
}
