import "./App.css";
import Header from "./components/Header/Header";
import SingleProfessor from "./components/SingleProfessor/SingleProfessor";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Professors from "./Pages/Professors";
// import TestPage from "./Pages/TestPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professor" element={<SingleProfessor />} />
          <Route path="/all-professors" element={<Professors />} />
          {/* <Route path="/test" element={<TestPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
