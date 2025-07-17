// // src/pages/Signup.js

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Signup() {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/user/signup", formData);
//       setMessage(res.data.message);
//     } catch (err) {
//       console.log(err);
//       setMessage(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage: "url('data:image/jpeg;base64,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')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
       
//       }}
//     >
//       <div
//         className="p-4 shadow rounded"
//         style={{
//           width: "400px",
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           transition: "transform 0.3s ease-in-out",
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         <h2 className="text-center mb-4">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input type="text" name="name" className="form-control" onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input type="email" name="email" className="form-control" onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input type="password" name="password" className="form-control" onChange={handleChange} required />
//           </div>
//           <button className="btn btn-primary w-100" type="submit">
//             Sign Up
//           </button>
//         </form>
//         {message && <p className="mt-3 text-info text-center">{message}</p>}
//         <p className="text-center mt-3">
//           Already have an account?{" "}
//           <Link
//             to="/signin"
//             style={{ textDecoration: "none", color: "#007bff" }}
//             onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//             onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//           >
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error on typing
  };

  const validateForm = () => {
    const { name, email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password) {
      return "All fields are required.";
    }
    if (name.length < 3) {
      return "Name must be at least 3 characters.";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/user/signup", formData);
      setMessage(res.data.message);
      setError("");
    } catch (err) {
      console.log("err ",err)
      setError(err.response?.data?.message || "Signup failed");
      setMessage("");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE05Z4DZVaZeXq-XzkCRST4yXw5BSCVHzeFw&s')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="p-4 shadow rounded"
        style={{
          width: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Sign Up
          </button>
        </form>

        {/* Display messages */}
        {error && <p className="mt-3 text-danger text-center">{error}</p>}
        {message && <p className="mt-3 text-success text-center">{message}</p>}

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#007bff" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
