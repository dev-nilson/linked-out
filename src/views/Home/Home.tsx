import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default Home;
