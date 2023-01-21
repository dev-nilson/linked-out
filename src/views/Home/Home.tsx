import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <Sidebar />
        <Feed />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
