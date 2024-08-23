import {
  Container,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function Professors() {
  const [professors, setProfessors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedProfessor, setHighlightedProfessor] = useState(null);
  const professorRefs = useRef({});

  useEffect(() => {
    // Fetch data from the JSON file served by Flask
    fetch("/test.json")
      .then((response) => response.json())
      .then((data) => setProfessors(data.professors))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = professors.filter((professor) =>
        professor.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (professor) => {
    setHighlightedProfessor(professor.id);
    setSearchTerm(professor.name);
    setSuggestions([]);

    // Scroll to the highlighted professor's div
    if (professorRefs.current[professor.id]) {
      professorRefs.current[professor.id].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div>
      <Container>
        <TextField
          fullWidth
          label="Search Professors"
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />

        {suggestions.length > 0 && (
          <List
            style={{
              position: "absolute",
              backgroundColor: "white",
              zIndex: 1000,
            }}
          >
            {suggestions.map((professor) => (
              <ListItem
                button
                key={professor.id}
                onClick={() => handleSuggestionClick(professor)}
              >
                <ListItemText primary={professor.name} />
              </ListItem>
            ))}
          </List>
        )}

        <h1>All Professors</h1>
        {professors.map((professor) => (
          <div
            key={professor.id}
            ref={(el) => (professorRefs.current[professor.id] = el)}
            style={{
              border: "2px solid black",
              padding: "20px 40px",
              borderRadius: "5px",
              marginBottom: "20px",
              backgroundColor:
                highlightedProfessor === professor.id ? "lightyellow" : "white",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <h2>{professor.name}</h2>
                <p>
                  <strong>Department:</strong> {professor.department}
                </p>
                <p>
                  <strong>University:</strong> {professor.university}
                </p>
                <p>
                  <strong>Overall Rating:</strong> {professor.overall_rating}
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h3>Courses Taught:</h3>
                <ul>
                  {professor.courses_taught.map((course) => (
                    <li key={course.course_code}>
                      {course.course_name} ({course.course_code}) -{" "}
                      {course.semester}
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </div>
        ))}
      </Container>
    </div>
  );
}