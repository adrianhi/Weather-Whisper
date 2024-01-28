import "@assets/Styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forecast from "@pages/Forecast.jsx";
import Welcome from "@pages/Welcome.jsx";
import Loading from "@pages/Loading.jsx";
import Login from "@pages/Login";
import Register from "@pages/Register";
import PageNotFound from "@components/Global/PageNotFound";
import ProtectedRoute from "./routes";
import { AuthProvider } from "@context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route index="/" element={<Welcome />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/*" element={<PageNotFound />}></Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/loading" element={<Loading />}></Route>
              <Route path="/forecast" element={<Forecast />}></Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
