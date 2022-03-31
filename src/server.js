const app = require("./index.js")
const connect = require("./configs/db")
app.listen (6265, async function(){
    await connect ();
    console.log("Listening on port 6265");
})