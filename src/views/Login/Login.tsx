import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/userSlice";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const dispatch = useDispatch();

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!headline) return alert("All fields are required");

    dispatch(
      login({
        name: name ? name : "Anonymous",
        headline,
      })
    );
  };

  return (
    <div className="login">
      <form onSubmit={register}>
        <h1>Log in</h1>
        <p>
          Stay updated on your professional world
        </p>
        <label>Name (optional)</label>
        <input
          type="text"
          placeholder="Denilson Lemus"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Headline*</label>
        <input
          type="text"
          placeholder="Software Developer"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        <button>Sign in</button>
      </form>
    </div>
  );
}

export default Login;