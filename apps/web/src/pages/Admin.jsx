import React, { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
const [loading, setLoading] = useState(true);
const [activeUsers, setActiveUsers] = useState(0);
const [pendingUsers, setPendingUsers] = useState(0);
const [rejectedUsers, setRejectedUsers] = useState(0);



useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    if (user.email !== "ayush.ailawadi1805@gmail.com") {
      alert("Access Denied");
      window.location.href = "/";
      return;
    }

    setIsAdmin(true);
    fetchUsers();
  });

  return () => unsubscribe();
}, []);
const approveUser = async (id) => {
  try {
    await updateDoc(doc(db, "users", id), {
  program: "Beginner Program",
  subscription: "Active",
  payment: "Verified",
});

    fetchUsers();
  } catch (error) {
    console.error(error);
  }
};
const rejectUser = async (id) => {
  try {
    await updateDoc(doc(db, "users", id), {
      payment: "Rejected",
      subscription: "Rejected",
    });

    fetchUsers();
  } catch (error) {
    console.error(error);
  }
};
const updateProgram = async (id, program) => {
  try {
    await updateDoc(doc(db, "users", id), {
      program,
    });

    fetchUsers();
  } catch (error) {
    console.error(error);
  }
};


const fetchUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  setUsers(data);

  setActiveUsers(
    data.filter((user) => user.subscription === "Active").length
  );

  setPendingUsers(
    data.filter((user) => user.subscription === "Pending").length
  );

  setRejectedUsers(
    data.filter((user) => user.subscription === "Rejected").length
  );
};

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">
        Admin Dashboard
      </h1>

      <div className="bg-[#111] border border-[#D4AF37]/20 rounded-xl p-6 overflow-x-auto">
  <table className="w-full text-left">
    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-3">Name</th>
        <th className="p-3">Email</th>
        <th className="p-3">Program</th>
        <th className="p-3">Subscription</th>
        <th className="p-3">Payment</th>
        <th className="p-3">Action</th>
      </tr>
    </thead>

    <tbody>
      {users.map((user) => (
        <tr key={user.id} className="border-b border-gray-800">
          <td className="p-3">{user.name}</td>
          <td className="p-3">{user.email}</td>
          <td className="p-3">
  <select
  value={user.program || ""}
  onChange={(e) => updateProgram(user.id, e.target.value)}
  className="bg-[#222] text-white p-2 rounded"
>
    <option value="">Select Program</option>
    <option value="Beginner Program">Beginner Program</option>
    <option value="Placement Program">Placement Program</option>
    <option value="Premium Program">Premium Program</option>
  </select>
</td>
          <td className="p-3">{user.subscription}</td>
          <td className="p-3">{user.payment}</td>
         <td className="p-3 flex gap-2">
  <button
    onClick={() => approveUser(user.id)}
    disabled={user.payment === "Verified"}
    className={`px-3 py-1 rounded ${
      user.payment === "Verified"
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-green-600 hover:bg-green-700"
    }`}
  >
    {user.payment === "Verified" ? "Approved" : "Approve"}
  </button>

  <button
    onClick={() => rejectUser(user.id)}
    disabled={user.payment === "Rejected"}
    className={`px-3 py-1 rounded ${
      user.payment === "Rejected"
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-red-600 hover:bg-red-700"
    }`}
  >
    {user.payment === "Rejected" ? "Rejected" : "Reject"}
  </button>
</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Admin;