const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const searchRoutes = require("./routes/searchRoutes");
const spamRoutes = require("./routes/spamRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/contacts", contactRoutes);
app.use("/search", searchRoutes);
app.use("/spam", spamRoutes);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
