import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Dashboard from "./Pages/DashBoard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Arrival from "./Pages/Arrival";
import TopBar from "./Components/TopBar";
import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import ModifyTask from "./Pages/ModifyTask";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";

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
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      <Route path="/add-task" element={<ProtectedRoute><AddTask /></ProtectedRoute>}/>
      <Route path="/modify-task" element={<ProtectedRoute><ModifyTask /></ProtectedRoute>}/>
      <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>}/>
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>}/>
      <Route path="*" element={<Navigate to="/arrival" replace />} />
    </Routes>
  </>
  );
}
