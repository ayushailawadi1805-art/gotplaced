import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from"axios";


<Helmet>
  <title>Placement Programs | Beginner & Experienced Programs | GotPlaced</title>

  <meta
    name="description"
    content="Explore GotPlaced placement programs for freshers and working professionals. Learn DSA, React, System Design, resume building, LinkedIn optimization and interview preparation."
  />

  <meta
    name="keywords"
    content="Placement Program, Beginner Program, Experienced Program, DSA Course, Interview Preparation, Placement Training"
  />
  <meta name="robots" content="index, follow" />

<link rel="canonical" href="https://gotplaced.in/" />
</Helmet>

const  programs = [
 {
  title: "Beginner Program",
  level: "For Freshers",
  duration: "8 Weeks",
  students: "1000+ Students",
  description:
    "Start your tech journey from scratch. Learn the fundamentals of programming, resume building, LinkedIn optimization, aptitude, and interview preparation.",
  color: "from-blue-500 to-cyan-500",

  syllabus: [
    "Programming Fundamentals",
    "HTML & CSS",
    "JavaScript",
    "React JS",
    "Resume Building",
    "Mock Interviews"
  ]
},
  {
  title: "Experienced Program",
  level: "For Working Professionals",
  duration: "6 Weeks",
  students: "500+ Professionals",
  description:
    "Switch careers, crack high-paying product companies, improve system design, DSA, resume, LinkedIn, and advanced interview strategies.",
  color: "from-yellow-500 to-orange-500",

  syllabus: [
    "Advanced DSA",
    "System Design",
    "LinkedIn Branding",
    "Resume Review",
    "Mock Interviews",
    "Salary Negotiation"
  ]
},
];

const ProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const handlePayment = async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/payment/order",
      {
        amount: 499,
      }
    );

    console.log("KEY =", import.meta.env.VITE_RAZORPAY_KEY_ID);
console.log("ORDER =", data);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "GotPlaced",
      description: "Placement Program",
      order_id: data.id,

      handler: function (response) {
        alert("✅ Payment Successful!");
        console.log(response);
        setSelectedProgram(null);
      },

      theme: {
        color: "#D4AF37",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  } catch (err) {
    console.error(err);
    alert("Payment Failed");
  }
};
  return (
    <>
      <Helmet>
        <title>Programs | GotPlaced</title>
      </Helmet>

      <section className="min-h-screen bg-background py-24">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gold-gradient mb-4">
              Our Career Programs
            </h1>

            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Whether you're just starting, already experienced, or aiming to
              become a Data Analyst, GotPlaced has a program designed for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {programs.map((program,index)=>(

              <motion.div
                key={index}
                whileHover={{y:-10,scale:1.02}}
                transition={{duration:0.3}}
                className="rounded-3xl bg-card border border-[#D4AF37]/20 overflow-hidden shadow-xl flex flex-col h-full"
              >

                <div className={`h-3 bg-gradient-to-r ${program.color}`} />

               <div className="p-8 flex flex-col flex-1">

                  <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">
                    {program.title}
                  </h2>

                  <p className="text-gray-400 mb-6">
                    {program.level}
                  </p>

                  <div className="space-y-4 mb-6">

                    <div className="flex items-center gap-3">
                      <Clock size={18}/>
                      <span>{program.duration}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users size={18}/>
                      <span>{program.students}</span>
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
                    <ArrowRight className="ml-2 h-5 w-5"/>
                  </Button>

                </div>

              </motion.div>

            ))}
</div>

        </div>

        {/* Modal */}

        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl w-[90%] max-w-2xl p-8 relative">

              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 text-2xl text-white hover:text-[#D4AF37]"
              >
                ✕
              </button>

              <h2 className="text-4xl font-bold text-[#D4AF37] mb-2">
                {selectedProgram.title}
              </h2>

              <p className="text-gray-400 mb-6">
                {selectedProgram.level}
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-2">
                  <Clock size={18}/>
                  <span>{selectedProgram.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users size={18}/>
                  <span>{selectedProgram.students}</span>
                </div>

                <p className="text-gray-300">
                  {selectedProgram.description}
                </p>

                <div>
                  <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">
                    What You'll Learn
                  </h3>

                  <ul className="space-y-2">
                    {selectedProgram.syllabus.map((item,index)=>(
                      <li key={index}>✅ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
  <Button
    onClick={handlePayment}
    className="w-full bg-[#D4AF37] text-black hover:bg-[#c99f21]"
  >
    Enroll Now - ₹499
  </Button>
</div>

                

              </div>

            </div>

          </div>
        )}

      </section>
    </>
  );
};

export default ProgramsPage;