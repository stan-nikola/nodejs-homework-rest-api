const app = require("./app");

const { PORT = 3000 } = process.env;
const { connectToContactsDb } = require("./models");

connectToContactsDb()
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, async () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Database connection error:${err.message}`);
    process.exit(1);
  });
