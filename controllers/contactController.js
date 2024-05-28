const db = require("../models");
const Contact = db.Contact;

exports.addContact = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const contact = await Contact.create({ name, phone, userId: req.userId });
    res.status(201).send({ message: "Contact added successfully!", contact });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ where: { userId: req.userId } });
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
