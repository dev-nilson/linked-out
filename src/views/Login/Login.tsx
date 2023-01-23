import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </form>
    </div>
  );
}

export default Login;
