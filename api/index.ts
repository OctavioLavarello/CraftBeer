const  server = require ("./src/app.ts")
require ("dotenv").config()
const PORT = 3000;


server.listen(process.env.PORT, () => {
  console.log(`server listen in ${PORT}`);
});
