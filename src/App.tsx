import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
