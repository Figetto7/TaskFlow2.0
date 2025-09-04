import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setErr(""); setMsg("");
    try {
      await resetPassword(email);
      setMsg("Reset email sent (check your spam folder).");
    } catch {
      setErr("Unable to send reset email.");
    }
  }

  return (
    <div className="grid place-items-center p-4 mt-24">
      <form onSubmit={handleFormSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="titleForm">Reset password</h1>
        <input name="email" autoComplete="email" type="email" placeholder="Email" className="inputForm" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        {msg && <p className="text-green-700 text-sm">{msg}</p>}
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button type="submit" className="loginButton" style={{backgroundColor: "var(--highlight-text-color)", color: "var(--theme-color)"}}> Send email </button>
        <div className="text-sm text-center">
          <Link to="/login" className="text-lg">Back to <span style={{color: "var(--highlight-text-color)"}}>login</span></Link>
        </div>
      </form>
    </div>
  );
}
