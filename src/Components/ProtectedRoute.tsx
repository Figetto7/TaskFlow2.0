import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import BigSideBar from "./BigSideBar";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="h-screen grid place-items-center">Caricamento…</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex">
      <BigSideBar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}