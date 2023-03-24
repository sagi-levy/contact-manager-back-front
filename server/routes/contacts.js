const express = require("express");
const {
  getContacts,
  createContacts,
  getContact,
  deleteContact,
  updateContact,
} = require("../controller/contactss");
const router = express.Router();
router.get("/contacts/my-contacts", getContacts);
router.post("/contacts", createContacts);
router.get("/contacts/:id", getContact);
router.delete("/contacts/:id", deleteContact);
router.put("/contacts/:id", updateContact);
module.exports = router;
