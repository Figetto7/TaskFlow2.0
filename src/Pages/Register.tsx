import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { parseFirebaseError } from "../Helpers/Utils/firebaseErrors";

export default function Register() {
  const { signUpWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await signUpWithEmail(email, password);
      navigate("/dashboard");
    } catch (err) {
      setErr(parseFirebaseError(err));
    }
  }

  return (
    <div className="grid place-items-center p-4 mt-24">
      <form onSubmit={handleFormSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="titleForm">Register</h1>
        <input name="email" autoComplete="email" type="email" placeholder="Email" className="inputForm" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input name="password" type="password" placeholder="At least 6 characters" className="inputForm" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required/>
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button type="submit" className="loginButton" style={{backgroundColor: "var(--highlight-text-color)", color: "var(--theme-color)"}}>  Create account </button>
        <div className="text-lg text-center">
          Already have an account? <Link to="/login"><span style={{color: "var(--highlight-text-color)"}}>Login</span></Link>
        </div>
      </form>
    </div>
  );
}
