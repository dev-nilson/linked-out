import { useSelector } from "react-redux";
import { selectUser } from "./redux/user/userSlice";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  return <>{!user ? <Login /> : <Home />}</>;
}

export default App;
