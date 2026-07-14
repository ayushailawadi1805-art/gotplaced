import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Helmet } from 'react-helmet';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

<Helmet>
  <title>Sign In | GotPlaced</title>

  <meta
    name="description"
    content="Sign in to your GotPlaced account to access placement programs, learning resources and career tools."
  />
  <meta name="robots" content="index, follow" />

<link rel="canonical" href="https://gotplaced.in/" />
</Helmet>

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful ✅");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111]">
      <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded bg-[#2a2a2a] text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-[#2a2a2a] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black p-3 rounded font-semibold hover:bg-yellow-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}