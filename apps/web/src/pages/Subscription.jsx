import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const Subscription = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [userData, setUserData] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    const user = auth.currentUser;

    if (!user) return;

    const snap = await getDoc(doc(db, "users", user.uid));

    if (snap.exists()) {
      setUserData(snap.data());
    }
  };

  fetchUser();
}, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl bg-card border border-[#D4AF37]/20 rounded-3xl p-10 shadow-xl">

        <div className="flex justify-center mb-6">
          <CheckCircle size={70} className="text-green-500" />
        </div>

        <h1 className="text-4xl font-bold text-center text-[#D4AF37] mb-3">
          Payment Submitted Successfully
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Your payment has been received and is waiting for verification.
        </p>

        <div className="space-y-4">

          <div className="flex justify-between bg-[#111] p-4 rounded-xl">
            <span>Program</span>
           <span className="font-semibold">
  {userData?.program || state?.program || "Placement Program"}
</span>
          </div>

         <div className="flex justify-between bg-[#111] p-4 rounded-xl">
  <span>Payment Status</span>

  <span
    className={`font-semibold ${
      userData?.payment === "Verified"
        ? "text-green-400"
        : userData?.payment === "Rejected"
        ? "text-red-400"
        : "text-yellow-400"
    }`}
  >
    {userData?.payment || "Pending Verification"}
  </span>
</div>

          <div className="flex justify-between bg-[#111] p-4 rounded-xl">
            <span>Subscription</span>
            <span className="text-yellow-400 font-semibold">
              {userData?.subscription || "Pending"}
            </span>
          </div>
          <div className="flex justify-between bg-[#111] p-4 rounded-xl">
  <span>Transaction ID</span>
  <span>{userData?.transactionId || "-"}</span>
</div>

          <div className="flex justify-between bg-[#111] p-4 rounded-xl">
            <span>Verification Time</span>
            <span>Within 30 Minutes</span>
          </div>

        </div>

        <Button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-8 bg-[#D4AF37] text-black hover:bg-[#c99f21]"
        >
          Go to Dashboard
        </Button>

      </div>
    </div>
  );
};

export default Subscription;