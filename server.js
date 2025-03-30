require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const encrypt=require('mongoose-encryption');
const multer = require('multer');
const vision = require('@google-cloud/vision');

// Set Google Cloud Vision credentials
process.env.GOOGLE_APPLICATION_CREDENTIALS = './vision-key.json';

// Initialize Vision API Client
const client = new vision.ImageAnnotatorClient();

// Set storage for image upload
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/registration");

// Create a schema

const userSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  gender: String,
  dob: Date,
  phone: Number,
  address: String,
  city: String,
  state: String,
  country: String,
  pincode: Number,
  created: { type: Date, default: Date.now },
}); 
const secret="Anantya";

userSchema.plugin(encrypt,{secret:secret,encryptedFields:["password"]});


// Create a model
const User = mongoose.model("User", userSchema);


// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/Login", "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public","Registration", "RegisterIndex.html"));
  console.log("Serving static files from:", path.join(__dirname, "public"));
});

app.post("/post", (req, res) => {

  const newUser = new User({
    name: req.body.fname+ " " + req.body.lname,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    phone: req.body['phone-number'],
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    pincode: req.body.pincode,
  });
  
  newUser.save();
  res.sendFile(path.join(__dirname, "public/Registration", "SuccessRegister.html"));
}
);

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dashboard", "dashboardIndex.html"));  
});



// Login Info Post

app.post("/dashboard", async (req, res) => {
  const address=req.body.address;
  const email = req.body.email;
  const password = req.body.pswd;

  try {
    console.log("Login attempt for:", email);

    const foundUser = await User.findOne({ 
      address:address
    });

    if (!foundUser) {
      console.log("User not found!");
      return res.status(404).send("User not found");
    }

    console.log("User found:", foundUser.email);
    console.log(foundUser.password);

    if (foundUser.password === password) {
      console.log("Password match!"); 
      res.sendFile(path.join(__dirname, "public/dashboard", "dashboardIndex.html")); 
    } else {
      console.log("Incorrect password!");
      res.status(401).send("Incorrect password");
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/verify", (req, res) => {
  res.render("verification", { officer:"Dushyant Makwana"  });
});


app.post('/extract-epic', upload.single('voterIdImage'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image uploaded!' });
  }

  const filePath = req.file.path;

  try {
    // Send the image to Vision API for text detection
    const [result] = await client.textDetection(filePath);
    const detections = result.textAnnotations;

    if (detections.length === 0) {
      return res.json({ epic: null, message: 'No text detected!' });
    }

    // Extract EPIC number (usually 10 alphanumeric characters)
    const text = detections[0].description;
    const epicRegex = /\b[A-Z]{3}[0-9]{7}\b/g;
    const matches = text.match(epicRegex);

    if (matches && matches.length > 0) {
      const epicNumber = matches[0];
      console.log(`Extracted EPIC Number: ${epicNumber}`);
      const voterData = await fetchVoterDetails(epicNumber);

      if (voterData.found) {
        res.json({ success: true, data: voterData.details });
      } else {
        res.json({ success: false, message: 'Voter not found!' });
      }
    }     
    else {
      res.json({ epic: null, message: 'No valid EPIC number found!' });
    }
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ message: 'Error processing image!' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));