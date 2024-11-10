const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message, subject } = req.body;
  
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Or any other email service
      auth: {
        user: 'surafelnega23@gmail.com',  // Your email
        pass: 'somepass',  // Your email password
      },
    });
  
    const mailOptions = {
      from: email,
      to: 'surafelnegaa@gmail.com',  // Your receiving email address
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });

module.exports = router;
