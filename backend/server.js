require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running...");
});
app.post("/api/send-welcome-email", async (req, res) => {
  try {
    const { name, email } = req.body;

    await resend.emails.send({
      from: "GotPlaced <contact@gotplaced.in>",
      to: email,
      subject: "🎉 Welcome to GotPlaced",
      html: `
        <div style="font-family:Arial;padding:30px;background:#111;color:white">
          <h1 style="color:#D4AF37;">Welcome to GotPlaced 🚀</h1>

          <p>Hi <b>${name}</b>,</p>

          <p>Your account has been created successfully.</p>

          <p>
            You can now explore placement programs, prepare for interviews,
            and grow your career with GotPlaced.
          </p>

          <a
            href="https://gotplaced.in/login"
            style="
              display:inline-block;
              padding:12px 25px;
              background:#D4AF37;
              color:black;
              text-decoration:none;
              border-radius:8px;
              font-weight:bold;
            "
          >
            Login Now
          </a>

          <p style="margin-top:30px;">
            Regards,
            Team GotPlaced 
          </p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// Create Payment Order
app.post("/api/payment/order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);

    res.status(500).json({
      success: false,
      message: "Payment Order Failed",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});