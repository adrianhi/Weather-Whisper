import "@assets/Styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Forecast } from "@pages/Forecast.jsx";
import { Welcome } from "@pages/Welcome.jsx";
import { Loading } from "@pages/Loading.jsx";
import { Login } from "@pages/Login";
import { Register } from "@pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index="/loading" element={<Loading />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/" element={<Forecast />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
