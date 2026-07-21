import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

<Helmet>
  <title>Create Account | GotPlaced</title>

  <meta
    name="description"
    content="Create your GotPlaced account and start preparing for placements with resume building, interview preparation and career guidance."
  />
  <meta name="robots" content="index, follow" />

<link rel="canonical" href="https://gotplaced.in/" />
</Helmet>

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

     await setDoc(doc(db, "users", userCredential.user.uid), {
  uid: userCredential.user.uid,
  name: name,
  email: email,
  program: "Not Selected",
  subscription: "Pending",
  payment: "Pending",
  createdAt: serverTimestamp(),
});
      await axios.post("http://localhost:5000/api/send-welcome-email", {
  name,
  email,
});

      alert("Account Created Successfully ✅");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-[#D4AF37]/20">

        <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#c9a227]"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#D4AF37] hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}