import express from "express";
const app = express();

app.set("view engine","ejs")
app.use(express.static("views/public"))


app.get("/",(req,res)=>{
    res.render("public/index")
})

app.listen(7771,()=>console.log("server running in 7771 port...."))
