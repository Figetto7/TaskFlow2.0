import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Dashboard from "./Pages/DashBoard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Arrival from "./Pages/Arrival";
import TopBar from "./Components/TopBar";

export default function App() {
  return (
  <>
    <TopBar />
    <Routes>
      <Route path="/" element={<Navigate to="/arrival" replace />} />
      <Route path="/arrival" element={<Arrival />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  </>
  );
}
