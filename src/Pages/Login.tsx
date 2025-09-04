import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { parseFirebaseError } from "../Helpers/Utils/firebaseErrors";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmail(email, password);
      navigate("/dashboard");
    } catch (err) {
      setErr(parseFirebaseError(err));

    }
  }

  async function handleGoogleAccess() {
  try {
    await signInWithGoogle();
    navigate("/dashboard");
  } catch (err) {
    setErr(parseFirebaseError(err));
  }
}


  return (
    <div className="grid place-items-center p-4 mt-24">
      <form onSubmit={handleFormSubmit} className="w-full max-w-sm space-y-4 -mt-10">
        <h1 className="titleForm" style={{color: "var(--title-color)"}}>Login</h1>
        <input type="email" placeholder="Email" className="inputForm" value={email} onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="email" required/>
        <input type="password" placeholder="Password" className="inputForm" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required/>
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button type="submit" className="loginButton text-2xl"> Login </button>
        <button type="button" className="loginButton text-xl" onClick={handleGoogleAccess}><span><FcGoogle className="inline-block mr-1" size={30}/></span> Continue with Google </button>
        <div className="text-sm flex justify-between">
          <Link to="/register" className="cursor-pointer text-lg">Register</Link>
          <Link to="/reset" className="cursor-pointer text-lg">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}
