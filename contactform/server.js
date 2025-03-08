require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({ dest: 'uploads/' });


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

const PORT =  5000;
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
    }
});
app.get('/',(req,res)=>{
    res.send("hell0");
console.log("Server active");
});

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;
console.log(req.body);
    const mailOptions = {
        from: email, // Sender's email
        to: process.env.EMAIL_USER, // Your email to receive messages
        subject: `New Contact Form Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.render("success",{name:name});
        setTimeout(() => {
            fs.unlinkSync(filePath);
            console.log("Deleted file");
        }, 5000);
    } catch (error) {
        res.render("error", { message: "Failed to send email. Please try again!" });
      }
    });
    
    
app.post('/joinus',upload.single('resume'),async(req,res)=>{
    const filePath = req.file.path;
    if (!req.file) {
        return res.render("error", { message: "Please select a file to upload" });
    }
    const fileName = req.file.originalname;
    const { name, email, contact,role, message } = req.body;
    console.log(fileName);
    console.log(req.body);
    
        const mailOptions = {
            from: email, // Sender's email
            to: process.env.EMAIL_USER, // Your email to receive messages
            subject: `New Contact Form Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nRole: ${role}\nContact: ${contact}`,
            attachments: [
                {
                    filename: fileName,
                    path: filePath,
                },
            ],
        };
        try {
            await transporter.sendMail(mailOptions);
            res.render("success",{name:name});
        } catch (error) {
            res.render("error", { message: "Failed to send email. Please try again!" });
          }
        });

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
