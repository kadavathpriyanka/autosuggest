const express =require("express");
const app=express();
const port = process.env.PORT || 6700;

//to tell app,where static  files -html,css,js are stored
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("App running on http://localhost:" + port);
});