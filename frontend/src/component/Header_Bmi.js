import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/bmi">BMI Tracker</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/bmi">BMI</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-secondary me-2" onClick={() => navigate(-1)}>
                            Back
                        </button>
                        <button
                            className="btn btn-outline-light ms-2"
                            onClick={handleLogout}
                            style={{
                                transition: "background 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.target.style.background = "#ff4d4d")}
                            onMouseLeave={(e) => (e.target.style.background = "transparent")}
                        >
                            Logout
                        </button>
                        
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;
