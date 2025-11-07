import React, { useState } from "react";

const RegistrationForm = () => {
  // Controlled input states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📝 User Registration Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#fafafa",
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "10px 0", padding: "5px" }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "10px 0", padding: "5px" }}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "10px 0", padding: "5px" }}
          />
        </label>

        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>

      {/* Show data after form submission */}
      {submitted && (
        <div style={{ marginTop: "30px" }}>
          <h3>✅ Registration Successful!</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Password:</strong> {formData.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
