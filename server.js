import "dotenv/config";

import express from "express";

const app = express();

// --------Midd--------
app.use(express.json())

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("HEllo")
})

//require('./route/user.rou.js')(app)
// import userRou from "./route/user.rou";
// userRou(app);

import router from "./route/user.rou.js";

app.use(router);

app.listen(PORT,()=>console.log(`App Running On ${PORT}`))



