const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const connection = require('../data/db');

router.post('/', (req, res) => {
    const { name, email, message, subject } = req.body;

    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'contact@KasSys®group.com',
            pass: 'c l w n s b d e d z u c u u j l', // Use the App Password here
        },
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'contact@KasSys®group.com', // Your receiving email address
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Email Error:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);

            // Insert contact form data into the database
            const sql = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
            connection.query(sql, [name, email, subject, message], (err, results) => {
                if (err) {
                    console.log('Database Error:', err);
                    res.status(500).send('Error saving to database');
                } else {
                    console.log('Data saved to database:', results);
                    res.status(200).json({ message: 'Email sent and data saved successfully' });
                }
            });
        }
    });
});

module.exports = router;
