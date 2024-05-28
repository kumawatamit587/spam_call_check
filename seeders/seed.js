const db = require("../models");
const { faker } = require("@faker-js/faker");

const seedDatabase = async () => {
  await db.sequelize.sync({ force: true });

  for (let i = 0; i < 10; i++) {
    const user = await db.User.create({
      name: faker.person.fullName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    for (let j = 0; j < 5; j++) {
      await db.Contact.create({
        name: faker.person.fullName(),
        phone: faker.phone.number(),
        userId: user.id,
      });
    }
  }
  console.log("Database seeded!");
};

seedDatabase().catch(console.error);
