const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });



// localhost PORT
const PORT= process.env.PORT



app.listen(PORT, ()=> {
    console.log(`success running at server : http://localhost:${PORT}`);
});