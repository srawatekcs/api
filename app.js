const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000



app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("index.ejs")
})



app.get("/news", (req,res)=>{
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-06-25&sortBy=publishedAt&apiKey=b86d27d624254db29fa598b86dff4221").then((res)=>{
        return res.json()
       }).then((fres)=>{
        res.json(fres)
       })
})


app.get("/karunesh", (req,res)=>{

   var students = [{name: "Sunil", location: "Dehradun"}, {name: "Abhishek", location: "Goarkhpur"}, {name: "Karunesh", location: "Patna"}]



    res.render("student.ejs", {students})
})



app.listen(PORT, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server is running on PORT:", PORT)
})