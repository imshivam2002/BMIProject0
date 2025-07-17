import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../component/Header_Bmi';
import { useNavigate } from 'react-router-dom';
// npm install react-gauge-chart --legacy-peer-deps
import GaugeChart from 'react-gauge-chart';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    const savedWeight = sessionStorage.getItem('weight');
    const savedHeight = sessionStorage.getItem('height');
    const savedBmi = sessionStorage.getItem('bmi');
    const savedStatus = sessionStorage.getItem('status');

    if (savedWeight) setWeight(savedWeight);
    if (savedHeight) setHeight(savedHeight);
    if (savedBmi) setBmi(savedBmi);
    if (savedStatus) setStatus(savedStatus);
  }, []);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      alert('Please enter both weight and height!');
      return;
    }
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters ** 2);
    const roundedBMI = bmiValue.toFixed(2);
    setBmi(roundedBMI);

    let category = '';
    if (bmiValue < 18.5) category = 'Underweight';
    else if (bmiValue < 24.9) category = 'Normal weight';
    else if (bmiValue < 29.9) category = 'Overweight';
    else category = 'Obese';
    setStatus(category);


    sessionStorage.setItem('weight', weight);
    sessionStorage.setItem('height', height);
    sessionStorage.setItem('bmi', roundedBMI);
    sessionStorage.setItem('status', category);
  };

  const pageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    padding: '30px',
    width: '100%',
    maxWidth: '480px',
    boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
  };

  return (
    <>
      <Header />
      <div style={pageStyle}>
        <form style={formStyle} onSubmit={calculateBMI}>
          <h2 className="text-center mb-4">BMI Calculator</h2>

          <div className="form-group mb-3">
            <label>Weight (kg):</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Height (cm):</label>
            <input
              type="number"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 170"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Calculate</button>

          {bmi && (
            <div className="mt-4 text-center animate__animated animate__fadeIn">
              <h4>Your BMI: <span className="text-primary">{bmi}</span></h4>
              <p>Status: <strong>{status}</strong></p>
              {/*  chart  */}
              <div className="my-4">
                <GaugeChart
                  id="bmi-meter"
                  nrOfLevels={20}
                  percent={Math.min(bmi / 40, 1)} // cap max at 40
                  colors={["#5BE12C", "#F5CD19", "#EA4228"]}
                  arcWidth={0.3}
                  textColor="#000"
                  needleColor="#464A4F"
                  animate={true}
                />
                <div className="mt-3">
                  <span className="me-3 text-success">Underweight</span>
                  <span className="me-3 text-warning">Normal</span>
                  <span className="text-danger">Overweight/Obese</span>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <button
                  className="btn btn-warning me-2"
                  onClick={() => navigate("/doctors")}
                  type="button"
                >
                  Consult with Doctor
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => navigate("/plans")}
                  type="button"
                >
                  Diet & Exercise Plan
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default BmiCalculator;
