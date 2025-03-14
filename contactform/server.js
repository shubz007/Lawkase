require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({ dest: 'uploads/' });
const mongoose = require('mongoose');
const { response } = require('express');
const { json } = require('body-parser');


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
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
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
       
        
    } catch (error) {
        res.render("error",{name:name}, { message: "Failed to send email. Please try again!" });
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
        
   //mongoose connection for newsletter
   
   mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

  //schema Defined her 
  const subscriberSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true }
});
const Subscriber = mongoose.model("Subscriber", subscriberSchema);


app.post("/subscribe", async (req, res) => {
    const { email } = req.body;
    console.log(email);

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        // Check if email is already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: "Email is already subscribed" });
        }

        // Add to MongoDB
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        // Send confirmation email
        //sendConfirmationEmail(email);

        res.status(201).json({ message: "Email subscribed successfully!" });

    } catch (error) {
        res.status(500).json({ message: "Error subscribing, please try again later." });
    }
});

// Sending confirmation to the user that it has been subscribed
        const sendConfirmationEmail = async (email) => {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Subscription Confirmation",
                text: "You have successfully subscribed to our newsletter!"
            };
            try {
                await transporter.sendMail(mailOptions);
                console.log("Confirmation email sent to:", email);
            } catch (error) {
                console.log(error);
            }
        };
// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
