import { Routes, Route } from "react-router-dom";
import BmiCalculator from "./pages/bmiCalculator.js"
import Signin from "./pages/signin.js";
import Signup from "./pages/signup.js";
import LandingPage from "./pages/landingPage";
import DietExercisePage from "./pages/DietExercisePage.js";
import DoctorPage from "./pages/DoctorPage.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/bmi" element={<BmiCalculator />} />
      <Route path="/doctors" element={<DoctorPage />} />
      <Route path="/plans" element={<DietExercisePage />} />
    </Routes>
  );
}

export default App;
