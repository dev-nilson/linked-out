import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSlice";
import Banner from "../../assets/banner.jpg";
import "./Sidebar.css";

export default function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic: string) => (
    <div className="recent">
      <span className="recent__hashtag">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Banner} alt="profile banner" />
        <Avatar className="sidebar__avatar" />
        <h2>{user.name}</h2>
        <h4>{user.headline}</h4>
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

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("job")}
        {recentItems("opportunity")}
        {recentItems("hiring")}
        {recentItems("recruiting")}
      </div>
    </div>
  );
}
