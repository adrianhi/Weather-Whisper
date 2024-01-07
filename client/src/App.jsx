import "@assets/Styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Forecast } from "./Pages/Forecast";
import { Welcome } from "./Pages/Welcome";
import { Loading } from "./Pages/Loading";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Forecast />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
