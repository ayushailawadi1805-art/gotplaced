import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();
const [user, setUser] = useState(null);
const [userData, setUserData] = useState(null);
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);

const docRef = doc(db, "users", currentUser.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setUserData(docSnap.data());
}
    }
  });

  return () => unsubscribe();
}, [navigate]);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="bg-[#111] border border-[#D4AF37] rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-[#D4AF37] mb-6">
  Welcome {userData?.name || user?.displayName || user?.email} 👋
</h1>

<div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-lg p-4 mb-6">
  <h2 className="text-lg font-semibold text-[#D4AF37] mb-3">
    Account Information
  </h2>

  <p className="mb-2">
    <span className="text-gray-400">Name:</span>{" "}
   {userData?.name || user?.displayName || "Not Available"}
  </p>

  <p className="mb-2">
    <span className="text-gray-400">Email:</span>{" "}
    {user?.email}
  </p>

  <p className="mb-2">
  <span className="text-gray-400">Email Verified:</span>{" "}
  <span className="text-green-400">✅ Verified</span>
</p>

  
</div>

        <div className="space-y-4">

          <div className="border border-gray-700 rounded-lg p-4">
            <h2 className="text-gray-400">Program</h2>
            <p className="text-xl font-semibold">
  {userData?.program || "Not Assigned"}
</p>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h2 className="text-gray-400">Subscription</h2>
            <p className="text-green-400 font-semibold">
  {userData?.subscription || "Pending"}
</p>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h2 className="text-gray-400">Payment</h2>
           <p className="text-yellow-400">
  {userData?.payment || "Pending"}
</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;