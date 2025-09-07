import type { JSX } from "react"
import { Link } from "react-router-dom";

export default function DashboardRestrictionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element {
  if (!isOpen) return <></>;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center modal-overlay justify-center" onClick={handleOverlayClick}>
      <div style={{backgroundColor: "var(--modal-bg)"}} className="ultraThinBorder w-11/12 md:w-1/3 p-4" onClick={(e) => e.stopPropagation()}>
        <div className=" flex flex-row justify-between mb-6 ">
        <h2 className="text-3xl md:text-4xl font-bold">Dashboard Restriction</h2>
        </div>
        <p className="text-lg md:text-xl md:mb-8">This is just a demo of the application, in order to modify data, please login or register.</p>
        <div className="mt-4 flex justify-between md:flex-col md:gap-4 md:justify-center">
          <Link to="/login" className="loginButton !w-1/3 md:!w-full !text-center md:!text-2xl">Login</Link>
          <Link to="/register" className="loginButton !w-1/3 md:!w-full !text-center md:!text-2xl">Register</Link>
        </div>
      </div>
    </div>
  );
}