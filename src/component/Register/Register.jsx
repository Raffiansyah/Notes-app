import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";

export default function Register({ register, useInput }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password must be same with Confirm Password");
    } else {
      register({ name, email, password }).then((res) => {
        if (!res.error) {
          alert("succes created");
          navigate("/login");
        }
      });
    }
  };

  return (
    <section className="regis-app">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={setName} required />
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
          id="password"
          minLength="6"
          maxLength="20"
          onChange={setPassword}
          value={password}
          required
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          id="confirmpassword"
          minLength="6"
          maxLength="20"
          onChange={setConfirmPassword}
          value={confirmPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        already have an account?
        <Link to="/login"> Login Here</Link>
      </p>
    </section>
  );
}
