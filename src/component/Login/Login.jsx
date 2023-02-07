import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Login({
  useInput,
  getUserLogged,
  login,
  putAccessToken,
}) {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    login({ email, password }).then((res) => {
      if (!res.error) {
        putAccessToken(res.data.accessToken);
        getUserLogged()
          .then((res) => {
            try {
              setUser(res.data)
              navigate('/')
            } catch (error) {
              alert(error)
            }
          })
      }
    });
  };

  return (
    <section className="login-page">
      <h1>Sign In</h1>
      <form onSubmit={onSubmit} className="input-login">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={setEmail}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={setPassword}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't Have Account?
        <Link to="/register"> Register Here</Link>
      </p>
    </section>
  );
}

Login.propTypes = {
  useInput: PropTypes.func.isRequired,
  getUserLogged: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  putAccessToken: PropTypes.func.isRequired,
};
