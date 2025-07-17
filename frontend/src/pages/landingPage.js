import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';

const LandingPage = () => {
  const navigate = useNavigate();

  const pageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px 20px',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: '15px',
    padding: '40px',
    maxWidth: '700px',
    margin: 'auto',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0,0,0,0.4)',
  };

  return (<>
  <Header/>
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <h1 className="mb-4">Track Your Health with Smart BMI Calculator</h1>
        <p className="mb-4">
          Calculate your BMI, get personalized diet plans, fitness suggestions, and health tracking — all in one place.
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate('/signin')}
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="container mt-5 text-white">
        <h2 className="text-center mb-4">Features</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h4>BMI Calculation</h4>
            <p>Instantly calculate and visualize your body mass index.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4>Progress Tracker</h4>
            <p>Track BMI history with charts and monitor improvements over time.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4>Diet & Exercise</h4>
            <p>Get smart suggestions on food and workouts based on your BMI.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
