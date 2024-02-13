const mongoose = require('mongoose');

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
      type: String,
      required: [true, "Document is required"],
    },
  });
  
const ContactUsForm = mongoose.model("ContactUsForm", contactUsFormSchema, "wrike_data");
  
export default ContactUsForm;