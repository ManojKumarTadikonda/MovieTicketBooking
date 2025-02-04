const nodemailer = require("nodemailer");

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Ensure you are using "gmail" if your email is Gmail
  auth: {
    user:process.env.EMAIL_USER, 
    pass:process.env.EMAIL_PASS,  
  },
});

const sendOtpEmail = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: email, // Recipient's email
      subject: "Your OTP for Email Verification", // Subject line
      text: `Your OTP is: ${otp}`, // Plain text body
      html: `<p>Dear User,</p>
             <p>Your OTP for email verification is: <b>${otp}</b></p>
             <p>This OTP will expire in 5 minutes.</p>
             <p>Thank you,</p>
             <p>Your App Team</p>`, // HTML body
    };
    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`OTP email sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Could not send OTP email.");
  }
};

module.exports = { sendOtpEmail };
