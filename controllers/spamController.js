const db = require("../models");
const Contact = db.Contact;

exports.markSpam = async (req, res) => {
  try {
    const { phone } = req.body;
    const contact = await Contact.findOne({
      where: { phone, userId: req.userId },
    });
    if (contact) {
      contact.isSpam = true;
      await contact.save();
      res.status(200).send({ message: "Number marked as spam!" });
    } else {
      res.status(404).send({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
