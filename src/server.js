const app = require("./index.js")
const connect = require("./configs/db")
app.listen (PORT, async function(){
    await connect ();
    console.log("Listening on port 6265");
})