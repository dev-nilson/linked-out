import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <h2>Sign in</h2>
        <p>Stay updated on your professional world</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </form>
    </div>
  );
}

export default Login;
