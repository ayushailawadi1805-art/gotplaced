import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { auth, db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";


const programs = [
  {
    title: "Beginner Program",
    level: "For Freshers",
    students: "100+ Students",
    price: 2000,
    description:
      
  "Launch your career with a structured placement program featuring personalized learning, ATS-verified resume building, LinkedIn optimization, industry expert mentorship, mock interviews, and exclusive job & internship opportunities.",
    color: "from-blue-500 to-cyan-500",
   syllabus: [
  "Personalized Learning & Placement Roadmap",
  "Professional ATS-Verified Resume Creation",
  "1:1 Guidance from Industry Experts",
  "Access to Exclusive Job & Internship Opportunities",
]
  },
  {
    title: "Experienced Program",
    level: "For Working Professionals",
    students: "100+ Professionals",
    price: 6500,
    description:
      
  "Accelerate your career with a structured professional development program tailored for experienced candidates. Enhance your technical capabilities, build a compelling ATS-optimized resume, strengthen your LinkedIn profile, receive one-on-one mentorship from industry experts, and master interview strategies to confidently pursue high-impact roles at leading organizations.",
    color: "from-yellow-500 to-orange-500",
    syllabus: [
  "Advanced Career Growth Roadmap",
  "ATS-Optimized Resume Enhancement",
  "LinkedIn Personal Branding",
  "1:1 Industry Expert Mentorship",
  "Interview Preparation with Mock Sessions",
  "10-15 interview lineups within 2-3 months ",
],
  },
];

const ProgramsPage = () => {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");



  return (
    <>
      <Helmet>
        <title>Programs | GotPlaced</title>

        <meta
          name="description"
          content="Explore GotPlaced placement programs for freshers and working professionals."
        />

        <meta
          name="keywords"
          content="Placement Program, Beginner Program, Experienced Program"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://gotplaced.in/programs" />
      </Helmet>

      <section className="min-h-screen bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gold-gradient mb-4">
              Our Career Programs
            </h1>

            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Whether you're just starting or already experienced, GotPlaced has
              a program designed for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-card border border-[#D4AF37]/20 overflow-hidden shadow-xl flex flex-col h-full"
              >
                <div className={`h-3 bg-gradient-to-r ${program.color}`} />

                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">
                    {program.title}
                  </h2>

                  <p className="text-gray-400 mb-6">{program.level}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Users size={18} />
                      <span>{program.students}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-[#D4AF37]">
                        ₹{program.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-7 mb-8 flex-1">
                    {program.description}
                  </p>

                  <Button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-[#D4AF37] text-black hover:bg-[#c99f21]"
                  >
                    View Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

                {/* Modal */}

        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
              <button
 onClick={() => {
  setSelectedProgram(null);
  setShowPayment(false);
}}
  className="absolute top-5 right-5 text-2xl text-white hover:text-[#D4AF37]"
>
  ✕
</button>

{!showPayment ? (

<>
  <h2 className="text-4xl font-bold text-[#D4AF37] mb-2">
    {selectedProgram.title}
  </h2>

              <p className="text-gray-400 mb-6">
                {selectedProgram.level}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  <span>{selectedProgram.students}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#D4AF37]">
                    Program Fee: ₹{selectedProgram.price}
                  </span>
                </div>

                <p className="text-gray-300">
                  {selectedProgram.description}
                </p>

                <div>
                  <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                    What You'll Learn
                  </h3>

                  <ul className="space-y-2">
                    {selectedProgram.syllabus.map((item, index) => (
                      <li key={index}>✅ {item}</li>
                    ))}
                  </ul>
                </div>

               <div className="mt-8">
  <Button
    onClick={() => setShowPayment(true)}
    className="w-full bg-[#D4AF37] text-black hover:bg-[#c99f21]"
  >
    Enroll Now - ₹{selectedProgram.price}
  </Button>
</div>

</div>

</>

) : (
  <div className="space-y-6">

   <h2>Complete Your Payment</h2>

<p>Scan the QR Code...</p>

<div className="flex justify-center">
  <img
    src="/payment-qr.png"
    alt="QR Code"
    className="w-64 h-64 rounded-2xl border-4 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]"
  />
</div>

{/* 👇 Ye yahan paste karna hai */}
<div className="bg-[#111] rounded-xl p-4 space-y-2">
  <h3 className="text-[#D4AF37] font-semibold">
    Payment Instructions
  </h3>

  <p>1️⃣ Scan the QR Code</p>
  <p>2️⃣ Pay ₹{selectedProgram.price}</p>
  <p>3️⃣ Enter Transaction ID</p>
  <p>4️⃣ Upload Screenshot</p>
  <p>5️⃣ Click Submit Payment</p>
</div>

   <div className="bg-[#111] p-4 rounded-xl flex justify-between items-center">
  <div>
    <p className="text-sm text-gray-400">UPI ID</p>

    <p className="text-lg font-semibold text-white">
      ayush.ailawadi9999@oksbi
    </p>
  </div>
  

  <Button
    size="sm"
    onClick={() => {
      navigator.clipboard.writeText("ayush.ailawadi9999@oksbi");
      alert("UPI ID Copied!");
    }}
    className="bg-[#D4AF37] text-black hover:bg-[#c99f21]"
  >
    <Copy size={16} />
  </Button>
</div>
<input
  type="text"
  placeholder="Enter Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full p-3 rounded-lg bg-[#111] border border-gray-700"
/>

<input
  type="email"
  placeholder="Enter Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 rounded-lg bg-[#111] border border-gray-700"
/>
<input
  type="text"
  placeholder="Enter Transaction ID"
  value={transactionId}
  onChange={(e) => setTransactionId(e.target.value)}
  className="w-full p-3 rounded-lg bg-[#111] border border-gray-700"
/>

  
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files[0]) {
      setPaymentScreenshot(e.target.files[0]);
    }
  }}
  className="w-full"
/>

{paymentScreenshot && (
  <img
    src={URL.createObjectURL(paymentScreenshot)}
    alt="Payment Screenshot"
    className="w-full rounded-xl border border-[#D4AF37] mt-3"
  />
)}

 <Button
  onClick={async () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!transactionId.trim()) {
      alert("Please enter Transaction ID.");
      return;
    }

    if (!paymentScreenshot) {
      alert("Please upload the payment screenshot.");
      return;
    }

    try {
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", paymentScreenshot);
      formData.append("upload_preset", "gotplaced");

      const uploadResponse = await fetch(
        "https://api.cloudinary.com/v1_1/ifvoxdcj/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const uploadData = await uploadResponse.json();


      if (!uploadData.secure_url) {
        alert("Image upload failed.");
        return;
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxDG1qpR574KvzM_X87MQw9v-twYB1BnRCTaq32tVzdlU3xKW4XZF0VISvzl1BqvAjEDw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            program: selectedProgram.title,
            transactionId: transactionId,
            screenshot: uploadData.secure_url,
          }),
        }
      );

      const result = await response.json();

    if (result.success) {
 const user = auth.currentUser;

if (user) {
  await updateDoc(doc(db, "users", user.uid), {
    program: selectedProgram.title,
    transactionId: transactionId,
    payment: "Pending",
    subscription: "Pending",
    screenshot: uploadData.secure_url,
  });
}

navigate("/subscription");
}else {
        alert("❌ " + result.error);
      }
    } catch (err) {
  console.error("Full Error:", err);
  alert(err.message);
}
  }}
  className="w-full bg-[#D4AF37] text-black hover:bg-[#c99f21]"
>
  Submit Payment
</Button>
<div className="mt-5 bg-[#111] rounded-xl p-4 border border-[#D4AF37]/30">
  <p>🔒 Secure UPI Payment</p>
  <p>⚡ Manual Verification within 30 Minutes</p>
  <p>✅ Trusted by Students</p>
</div>
<a
  href="https://wa.me/918505988310"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="w-full mt-3 border-[#D4AF37] text-[#D4AF37]"
  >
    Contact on WhatsApp
  </Button>
</a>

    <Button
      variant="outline"
      onClick={() => setShowPayment(false)}
      className="w-full"
    >
      ← Back
    </Button>

  </div>
)}
        
              </div>
            </div>

          
        )}
      </section>
    </>
  );
};


export default ProgramsPage;