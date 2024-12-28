const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT || 2200;
const hbs=require('hbs');
const { error } = require('console');
const public_path=path.join(__dirname,'../public');
const staticpath=express.static(public_path);
const temp_path=path.join(__dirname,"../templates/views");
const par_path=path.join(__dirname,'../templates/partials');
app.use(staticpath);
app.set("view engine","hbs");
app.set("views",temp_path);
hbs.registerPartials(par_path);
app.get("/",(req,res)=>{
    //res.send("<h1>hello from vrajlata thummar</h1>");
    res.render("index");
});
app.get("/about",(req,res)=>{
   // res.send("<h1>hello from vrajlata thummar about side</h1>");
   res.render("about");
});
app.get("/weather",(req,res)=>{
    // res.send("<h1>hello from vrajlata thummar about side</h1>");
    res.render("weather");
 });
app.get("*",(req,res)=>{
    // res.send("<h1>hello from vrajlata thummar about side</h1>");
    res.render("404",{
        errormessage:"oops! Page not found, click here to go back"
    });
 });
app.listen(port,'127.0.0.1',()=>{
    console.log(`listening port: ${port}`);
});