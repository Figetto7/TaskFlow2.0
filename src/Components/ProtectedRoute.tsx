import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import type { JSX } from "react";

type Props = { children: JSX.Element };

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="h-screen grid place-items-center">Caricamento…</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
