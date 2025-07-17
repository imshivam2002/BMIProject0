import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header_Bmi";

function DietExercisePage() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () =>{
    let recommendation = {
      diet: "Balanced diet: Fruits, veggies, lean protein.",
      exercise: "Daily 30 min walk and light cardio.",
      youtube: "https://www.youtube.com/embed/ml6cT4AZdqI",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUzA-Imo-NXOjan62Tb2QN5WHYNtbsJtQxA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0z6mGZPZjJ8ok1zmyjTwjY-zElzGosCGUMA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVLUg0GaLngtgJTky4qGZfu4aQmnmBBDuOw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvT6KVK8VvrC3xD2pEnJjPim2ZntaQnm5y5A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-84bq3IAtFZ_Cv2Fw9Nd8GoZqdlirj32FmA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcSdAqxE2SB-V5BmBt8zkvv4Y29XwvWlnpQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHr87kn29diRNB4KuyJIytNu9D4QYm1f88nA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHu1Whz2jjRF-vVYczpjONxzBdcvf1YI84Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2SjjhGNdqTv5C-6ALOAdle_WrXq8e3qCVg&s",
      ],
    };
    if (age < 50 && weight > 80) {
      recommendation = {
        diet: "Low carb diet, high protein intake.",
        exercise: "HIIT 4 times a week.",
        youtube: "https://www.youtube.com/embed/UBMk30rjy0o",
        images:[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEJo93rmhB0P7CikbH_HfF6t91Sl5Ji1f6A&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtZiaQ1qPjSO5MVY3lq-Q_P2BSkc4t9fNfw&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWiqURlE3n_2niyNlQNCKgSbfeIE6RaipSA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuOw5XTh4nrOcuwEkgi3BA9kIlayaeBsvcg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jgSTw9GXdhzCkebRfwbOyL9ENS5mDs-GlL3Atm4y-ve4FZVMnygZTixy4j2-gaNl1as&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6va601lwOLiHhl4e6A2YyhWgY_v3mlwGR-6yaJJrWaoJLdK6MFvR874Kyv4OyMCoWY&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH7gPfSoLm6pkZK4ibjq82rlbTgPI87OQZQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4CQzBNartB4evtRxhhcRBm2BJPu-qA6CMQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCRbsQQbT97PRb4TjklaaYVV3t0TqsIuKUg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOE1zU_kvLNBz6wA6p40Ypr8TZk6Pj4j9J_1fvG53uTl2TKvdAD7vqIHx_ZdKTvmCYU0&usqp=CAU",
        ],
      };
    } else if (age > 40) {
      recommendation = {
        diet: "Soft foods, low salt & sugar.",
        exercise: "Stretching & light yoga.",
        youtube: "https://www.youtube.com/embed/4pKly2JojMw",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZyhZ2pUfz3LjKP9QOo70V3a9MmgfSlGU79O13Gc6SJOuiUpwjwP3zQFTbY7UJjSk8KE&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTFdLI5LxX3yympACDmbG_7-TxQ-pnVgydA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbynn2HRFwUM00WL1eIUgWJE8csXMYNFPLcw&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WT-hUtih7Pj3x13mwTzYb0oGvXNpNZeTdw&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmGDK_WcPscILkDkBsipTleeYVNxe5l5p7ZZIjtXbq88d9J6kYxyQZUym5AsVG3S4t10&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoADmt6MQtrFYamhUm01c8MihAHkSzXfd2nQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3i5bhWDH9iIkmXBk4F1iS1ohxozUDNK9Ow&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DEd9uHu6b0RjTuqfuRqy4WnPyIBzGiDMFzu63pMgrXGe7M2YTHLurc-p0PgjEYVMnrM&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9SN-kf_fQ2nKxsV0MpdS0j6_4e4-8dqfmA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkckGN8Tvk2hjJG6VCndEiXCeRXMImRsvjw&s",
        ],
      };
    }
    setResult(recommendation);
  };

  const pageStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/flat-lay-sport-frame-with-salad_23-2148531521.jpg?semt=ais_hybrid&w=740")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    padding: "50px 20px",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    padding: "30px",
    maxWidth: "900px",
    margin: "auto",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
  };

  return (
    <>
      <Header />
      <div style={pageStyle}>
        <div style={cardStyle}>
          <h2 className="text-center mb-4">Personalized Diet & Exercise Plan</h2>
          <div className="form-group mb-3">
            <input
              type="number"
              placeholder="Enter your age"
              className="form-control mb-3"
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Enter your weight (kg)"
              className="form-control mb-3"
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <button className="btn btn-success w-100" onClick={handleGenerate}>
              Generate Plan
            </button>
          </div>

          {result && (
            <div className="mt-5 text-center">
              <h4 className="text-success">🍽 Diet Recommendation:</h4>
              <p>{result.diet}</p>

              <h4 className="text-primary mt-4">🏋️ Exercise Suggestion:</h4>
              <p>{result.exercise}</p>

              <div className="row mt-4">
                {result.images.map((img, i) => (
                  <div key={i} className="col-md-4 col-sm-6 mb-3">
                    <img
                      src={img}
                      alt={`exercise-${i}`}
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
                    />
                  </div>
                ))}
              </div>

              <h4 className="text-danger mt-4">▶ Watch Exercise Demo:</h4>
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  src={result.youtube}
                  title="Exercise Video"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default DietExercisePage;
