import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import LandingPages from "./pages/LandingPages.jsx";
import SetNominal from "./pages/SetNominal.jsx";
import EnterPin from "./pages/EnterPin.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import FindPeople from "./pages/TransferFindPeople.jsx";
import History from "./pages/History.jsx";
import TopUp from "./pages/TopUp.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/topUp" element={<TopUp />} />
          <Route path="/findPeople" element={<FindPeople />} />
          <Route path="/history" element={<History />} />
          <Route path="/findPeople/transfer/:id" element={<SetNominal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enterPin" element={<EnterPin />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/" element={<LandingPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
