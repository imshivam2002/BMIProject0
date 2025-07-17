// import React, { useState } from "react";
// import axios from "axios";

// function Signin() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signin", formData);
//       setMessage("Login successful");
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       // Optionally redirect
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="container mt-4" style={{ maxWidth: "400px" }}>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignin}>
//         <div className="mb-3">
//           <label>Email</label>
//           <input type="email" name="email" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input type="password" name="password" className="form-control" onChange={handleChange} required />
//         </div>
//         <button className="btn btn-success" type="submit">Sign In</button>

//       </form>
//       {message && <p className="mt-3 text-info">{message}</p>}
//     </div>
//   );
// }

// export default Signin;


// src/pages/Signin.js

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Signin() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signin", formData);
//       setMessage("Login successful");
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage: "url('https://source.unsplash.com/1600x900/?fitness,gym')",
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
//         <h2 className="text-center mb-4">Sign In</h2>
//         <form onSubmit={handleSignin}>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button className="btn btn-success w-100" type="submit">
//             Sign In
//           </button>
//         </form>
//         {message && <p className="mt-3 text-info text-center">{message}</p>}
//         <p className="text-center mt-3">
//           Don't have an account?{" "}
//           <Link
//             to="/signup"
//             style={{ textDecoration: "none", color: "#007bff" }}
//             onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//             onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//           >
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signin;


// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../component/Header_Bmi";

// function Signin() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); // Step 1: useNavigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/user/sign-in", formData);
//       setMessage("Login successful");

//       // Save to local storage
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // Step 2: Navigate to BMI page
//       navigate("/bmi");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (<>
//   <Header />
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE05Z4DZVaZeXq-XzkCRST4yXw5BSCVHzeFw&s')",
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
//         <h2 className="text-center mb-4">Sign In</h2>
//         <form onSubmit={handleSignin}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input type="email" name="email" className="form-control" onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input type="password" name="password" className="form-control" onChange={handleChange} required />
//           </div>
//           <button className="btn btn-success w-100" type="submit">
//             Sign In
//           </button>
//         </form>
//         {message && <p className="mt-3 text-info text-center">{message}</p>}
//         <p className="text-center mt-3">
//           Don't have an account?{" "}
//           <Link
//             to="/signup"
//             style={{ textDecoration: "none", color: "#007bff" }}
//             onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//             onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//           >
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Signin;



// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import Header from "../component/Header_Bmi";

// function Signin() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Client-side validation
//   const validateForm = () => {
//     const { email, password } = formData;
//     if (!email || !password) return "All fields are required";
//     if (!email.includes("@") || !email.includes(".")) return "Invalid email format";
//     if (password.length < 6) return "Password must be at least 6 characters";
//     return null;
//   };

//   // Submit Signin
//   const handleSignin = async (e) => {
//     e.preventDefault();

//     const error = validateForm();
//     if (error) return setMessage(error);

//     try {
//       const res = await axios.post("http://localhost:5000/api/user/sign-in", formData);

//       setMessage("Login successful ✅");
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       navigate("/bmi");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="d-flex justify-content-center align-items-center vh-100"
//         style={{
//           backgroundImage:
//             "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE05Z4DZVaZeXq-XzkCRST4yXw5BSCVHzeFw&s')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div
//           className="p-4 shadow rounded"
//           style={{
//             width: "400px",
//             backgroundColor: "rgba(255, 255, 255, 0.9)",
//             transition: "transform 0.3s ease-in-out",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
//           onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//         >
//           <h2 className="text-center mb-4">Sign In</h2>
//           <form onSubmit={handleSignin}>
//             <div className="mb-3">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button className="btn btn-success w-100" type="submit">
//               Sign In
//             </button>
//           </form>
//           {message && (
//             <p className="mt-3 text-center" style={{ color: "darkblue" }}>
//               {message}
//             </p>
//           )}
//           <p className="text-center mt-3">
//             Don't have an account?{" "}
//             <Link
//               to="/signup"
//               style={{ textDecoration: "none", color: "#007bff" }}
//               onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//               onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//             >
//               Create one
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signin;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/Header_Bmi";

function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "", answer: "" });
  const [message, setMessage] = useState("");
  const [challenge, setChallenge] = useState({ num1: 0, num2: 0 });
  const navigate = useNavigate();

  // Generate random challenge when page loads
  useEffect(() => {
    generateChallenge();
  }, []);

  const generateChallenge = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setChallenge({ num1, num2 });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password, answer } = formData;
    if (!email || !password || !answer) return "All fields are required";
    if (!email.includes("@") || !email.includes(".")) return "Invalid email format";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (parseInt(answer) !== challenge.num1 + challenge.num2) return "Challenge answer is incorrect";
    return null;
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return setMessage(error);
    try {
      const res = await axios.post("http://localhost:5000/user/sign-in", {
        email: formData.email,
        password: formData.password,
      });
      setMessage("Login successful ✅");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/bmi");
    } catch (err) {
      console.log(err);
      setMessage(err.response?.data?.message || "Login failed ❌");

    }
  };
  return (
    <>
      <Header />
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
          <h2 className="text-center mb-4">Sign In</h2>
          <form onSubmit={handleSignin}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>
                Solve: {challenge.num1} + {challenge.num2} = ?
              </label>
              <input
                type="number"
                name="answer"
                className="form-control"
                value={formData.answer}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn-success w-100" type="submit">
              Sign In
            </button>
          </form>
          {message && (
            <p className="mt-3 text-center" style={{ color: "darkblue" }}>
              {message} 
            </p>
          )}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#007bff", textDecoration: "none" }}>
              Create one
            </Link>
          </p>
        </div>
      </div> 
    </>
  );
}
export default Signin;
