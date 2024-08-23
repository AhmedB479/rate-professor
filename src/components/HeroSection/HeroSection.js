import React, { useState } from "react";
import "./HeroSection.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/ask", {
        question: query,
      });
      setResponse(res.data.answer);
      alert(Response: ${res.data.answer});
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="stroke-text">Empower</span>
          <span> Your </span>
          <span
            style={{
              color: "var(--text-color)",
            }}
          >
            Education with AI-
          </span>
          <span>Powered Professor Ratings</span>
        </h1>
        <p className="hero-subtitle">
          Discover, rate, and share your experiences with professors using
          advanced AI insights.
        </p>
        <div className="cta-buttons">
          <TextField
            fullWidth
            label="Enter your query"
            value={query}
            onChange={handleInputChange}
          />
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          {response && <p>{response}</p>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import React from "react";
// import "./HeroSection.css";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">
//           <span className="stroke-text">Empower</span>

//           <span> Your </span>
//           <span
//             style={{
//               color: "var(--text-color)",
//             }}
//           >
//             Education with AI-
//           </span>
//           <span>Powered Professor Ratings</span>
//         </h1>
//         <p className="hero-subtitle">
//           Discover, rate, and share your experiences with professors using
//           advanced AI insights.
//         </p>
//         <div className="cta-buttons">
//           <Link to="/test" className="cta-button primary">
//             Rate a Professor Test
//           </Link>
//           <Link to="/professor" className="cta-button secondary">
//             Find the Best Professors
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
