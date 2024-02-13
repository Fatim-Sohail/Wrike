const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://fatim:12345@cluster0.jj5p27d.mongodb.net/wrike?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Create a MongoDB model for the contact form data
const contactUsFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address",
    ],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^[0-9]+$/, "Phone number must contain only numbers"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  document: {
    type: Buffer,
    required: [true, "Document is required"],
  },
});

const ContactForm = mongoose.model(
  "ContactForm",
  contactUsFormSchema,
  "wrike_data"
);
// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Check if the 'uploads' directory exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "uploads")));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post("/contact", upload.single("document"), async (req, res) => {
  try {
    // Extract form data
    const { name, email, phoneNumber, company } = req.body;

    // Get the file path from Multer
    const documentPath = req.file ? req.file.path : null;

    // Save data to MongoDB
    const contactData = new ContactForm({
      name,
      email,
      phoneNumber,
      company,
      document: documentPath,
    });

    await contactData.save();

    // Respond with success
    res
      .status(200)
      .json({ success: true, message: "Form data submitted successfully." });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      // Multer error
      console.error("Multer Error:", error);
      res.status(400).json({ success: false, message: "Bad Request." });
    } else {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  }
});

app.get("/", (req, res) => {
  res.send("Hello, this is the Wrike Contact Form API!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
