import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import LoginPage from "./pages/LoginPage/login.page";
import HomePage from "./pages/HomePage/home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
