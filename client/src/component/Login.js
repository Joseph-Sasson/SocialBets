import React, { useState } from "react";
import "../css/login.css"

function Login({ setUser }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleLogin = (event) => {
    setIsLoading(true);
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div className = 'card'>
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <div>
        <label>Email</label>
        <input
          value={formData.email}
          onChange={(e) => {
            setFormData({
              email: e.target.value,
              password: formData.password,
              rememberMe: formData.rememberMe,
            });
          }}
          type="email"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label>Password</label>
        <input
          value={formData.password}
          onChange={(e) => {
            setFormData({
              email: formData.email,
              password: e.target.value,
              rememberMe: formData.rememberMe,
            })}}
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div>
        <div>
          <input
            value={formData.rememberMe}
            onChange={(e) => {
              setFormData({
                email: formData.email,
                password: formData.password,
                rememberMe: e.target.checked,
              });
            }}
            type="checkbox"
          />
          <label htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
      <div>{errors}</div>
    </form>
    </div>
  );
}

export default Login;
