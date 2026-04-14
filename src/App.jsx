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
import Profile from "./pages/Profile.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import ChangePin from "./pages/ChangePin.jsx";
import ProtectedRoute from "./Components/protectedRoute.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile/changePassword"
              element={<ChangePassword />}
            />
            <Route path="/profile/changePin" element={<ChangePin />} />
            <Route path="/topUp" element={<TopUp />} />
            <Route path="/findPeople" element={<FindPeople />} />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />
            <Route
              path="/findPeople/transfer"
              element={
                <ProtectedRoute>
                  <SetNominal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/enterPin" element={<EnterPin />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/" element={<LandingPages />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
