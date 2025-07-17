import React, { useState } from "react";
import doctors from "../data/DoctorData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../component/Header_Bmi";
import { redirect } from "react-router-dom";

function DoctorPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", issue: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleContactClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowForm(true);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setFormData({ name: "", email: "", issue: "" });
    }, 3000);
  };

  const pageStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCl0emF-SFnvBHghDTowzOs3SfNPQ4vS8bvg0hxjMHl-j_Ediix_0J5b1Fuid8ktdHpKw&usqp=CAU")',
    backgroundSize: 'cover',
    minHeight: '20vh',
  };

  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.85)",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const hoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  };

  return (
    <>
      <Header />
      <div style={pageStyle}>
        <div className="container">
          <h2 className="text-white text-center mb-5">Consult with a Doctor </h2>
          <div className="row">
            {doctors.map((doc, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  className="card shadow-sm doctor-card h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
                >
                  {/* ✅ Doctor Image */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body text-center">
                    <h5 className="card-title">{doc.name}</h5>
                    <p className="card-text">Specialty: {doc.specialty}</p>
                    <p className="card-text">Contact: {doc.contact}</p>
                    <button
                      className="btn btn-outline-primary mt-3"
                      onClick={() => handleContactClick(doc)}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Contact Form Modal */}
          {showForm && (
            <div
              className="modal show fade d-block"
              tabIndex="-1"
              role="dialog"
              style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title">
                        Contact Dr. {selectedDoctor?.name}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowForm(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      {!submitted ? (
                        <>
                          <div className="mb-3">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            /> 
                          </div>
                          <div className="mb-3">
                            <label>Your Issue</label>
                            <textarea
                              className="form-control"
                              name="issue"
                              rows="3"
                              value={formData.issue}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </>
                      ) : (
                        <div className="text-center text-success">
                          <h5>Thank you!</h5>
                          <p>We’ll contact you soon regarding your request.</p>
                        </div>
                      )}
                    </div>
                    {!submitted && (
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-success">
                          Submit Request
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default DoctorPage;
