// This is our seed file. We'll import our Sequelize models from
// ./database/index and create some dummy data in the database. Seeding a
// database is very useful for development.
const { blue, cyan, green, red } = require("chalk");
const { db, Plant } = require("./database");

async function seed() {
  try {
    console.log(cyan("📡 Connecting to the database..."));
    // Connect to the database

    await db.sync({force: true});

    console.log(blue("🌱 Seeding the database..."));

    // Seed the database
    const Asparagus = await Plant.create({name: 'Asparagus'});
    console.log('Asparagus instance >>>>', Asparagus);
    console.log('Aparagus name >>>>', Asparagus.name);
    await Asparagus.update({name: 'Broccoli'});
    console.log('Updated Asparagus name >>>>', Asparagus.name);


    // Close the database connection
    await db.close();

    console.log(green("🌲 Finished seeding the database!"));
    await db.close();
  } catch (err) {
    console.log(red("🔥 An error occured!!"));
    console.error(err);
    await db.close();
  }
}
seed();
