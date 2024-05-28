const db = require("../models");
const Contact = db.Contact;
const User = db.User;

exports.searchByName = async (req, res) => {
  try {
    const { name } = req.params;
    const contacts = await Contact.findAll({
      where: { name: { [db.Sequelize.Op.like]: `${name}%` } },
    });
    const moreContacts = await Contact.findAll({
      where: { name: { [db.Sequelize.Op.like]: `%${name}%` } },
    });
    res.status(200).send([...contacts, ...moreContacts]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.searchByPhone = async (req, res) => {
  try {
    const { phone } = req.params;
    const contacts = await Contact.findAll({ where: { phone } });
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
