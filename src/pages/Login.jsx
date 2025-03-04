const Login = ({ setIsAuth, isAuth }) => {
  return (
    <div className="page-container">
      <h1>Login</h1>
      <p>Please log in to access your profile.</p>
      <button
        onClick={() => setIsAuth((prev) => !prev)}
        className="login-button"
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
