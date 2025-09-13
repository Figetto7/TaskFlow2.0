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
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import ModifyTasks from "./Pages/ModifyTasks";

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
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="home" element={<Home />}/>
        <Route path="addtask" element={<AddTask />}/>
        <Route path="modifytasks" element={<ModifyTasks />}/>
        <Route path="analytics" element={<Analytics />}/>
        <Route path="about" element={<About />}/>
      </Route>
      
      <Route path="*" element={<Navigate to="/arrival" replace />} />
    </Routes>
  </>
  );
}