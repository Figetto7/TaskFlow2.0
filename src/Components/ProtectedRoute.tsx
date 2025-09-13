import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import SideBarDeskTop from "./SideBarDeskTop";
import { useIsMobile } from "../Hooks/useIsMobile";
import HamburgerMenu from "./HamburgerMenu"
import { TbLoader2 } from "react-icons/tb";



export default function ProtectedRoute() {
  const isMobile = useIsMobile();
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="h-screen grid place-items-center"><TbLoader2 className="animate-spin text-6xl" size={80} /></div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex">
      { isMobile ?<HamburgerMenu />: <SideBarDeskTop />}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}