const nodemailer = require("nodemailer");
const QRCode = require("qrcode");

// ✅ Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Send OTP Email
exports.sendOtpEmail = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Email Verification",
      text: `Your OTP is: ${otp}`,
      html: `<p>Dear User,</p>
             <p>Your OTP for email verification is: <b>${otp}</b></p>
             <p>This OTP will expire in 5 minutes.</p>
             <p>Thank you,</p>
             <p>Your App Team</p>`,
    };
    await transporter.sendMail(mailOptions);
    console.log(`OTP email sent to ${email}`);
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Could not send OTP .");
  }
};

// ✅ Send Ticket QR Code Email
exports.sendTicketQR = async ({ email, movieName, selectedDate, showTime, screenName, seatPosition }) => {
  try {
    if (!email || !movieName || !selectedDate || !showTime || !screenName || !seatPosition) {
      throw new Error("All fields are required");
    }

    // ✅ Generate QR Code as Base64
    const qrText = `🎬 Movie: ${movieName}\n📅 Date: ${selectedDate}\n⏰ Show Time: ${showTime}\n🎭 Screen: ${screenName}\n💺 Seat: ${seatPosition}\nEnjoy your movie! 🍿🎥`;
    const qrBase64 = await QRCode.toDataURL(qrText);

    // ✅ Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `🎟️ Your Movie Ticket - ${movieName}`,
      text: `Hello, 

      Your movie ticket has been booked successfully! 🎬 
      Enjoy your movie 🍿. Here are the details:

      Movie: ${movieName}
      Date: ${selectedDate}
      Show Time: ${showTime}
      Screen: ${screenName}
      Seat: ${seatPosition}

      Your QR code is attached for entry. 📲 

      Thanks for booking with us!
      `,
      attachments: [
        {
          filename: "ticket_qr.png",
          content: qrBase64.split(";base64,").pop(), // ✅ Remove Base64 prefix
          encoding: "base64",
        },
      ],
    };

    // ✅ Send Email
    await transporter.sendMail(mailOptions);
    console.log(`🎟️ Ticket email sent to ${email}`);
  } catch (error) {
    console.error("Failed to send QR Code email:", error);
    throw new Error("Could not send ticket email.");
  }
};
