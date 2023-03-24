const { v4: uuid } = require("uuid");

let contacts = [];

const getContacts = (req, res) => {
  res.send(contacts);
};
const createContacts = (req, res) => {
  const contact = req.body;
  contacts.push({ ...contact, id: uuid() });
  res.send("added successfully");
};
const getContact = (req, res) => {
  const specificContact = contacts.filter(
    (contact) => contact.id === req.params.id
  );
  res.send(specificContact);
};
const deleteContact = (req, res) => {
  const filteredContacts = contacts.filter(
    (contact) => contact.id !== req.params.id
  );
  contacts = filteredContacts;
  res.send("deleted successfully");
};
const updateContact = (req, res) => {
  const specificContact = contacts.find(
    (contact) => contact.id === req.params.id
  );
  specificContact.name = req.body.name;
  specificContact.address = req.body.address;
  specificContact.number = req.body.number;
  res.send("updated successfully");
};

exports.getContacts = getContacts;
exports.createContacts = createContacts;
exports.getContact = getContact;
exports.deleteContact = deleteContact;
exports.updateContact = updateContact;
