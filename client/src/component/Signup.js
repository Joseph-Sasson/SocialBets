import React, { useState } from "react";

function Signup({ setUser }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const newForm = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.passwordConfirmation,
    };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Sign up</h3>
      <div>
        <label>Full name: </label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email Address: </label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password Confirmation: </label>{" "}
        <input
          type="password"
          placeholder="Enter password"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      <div>
        {errors.map((err) => (
          <span>!{err}</span>
        ))}
      </div>
    </form>
    </div>
  );
}

export default Signup;
