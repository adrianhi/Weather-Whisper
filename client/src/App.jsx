import "../public/assets/Styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Forecast } from "./Pages/Forecast";
import { Welcome } from "./Pages/Welcome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Forecast />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
