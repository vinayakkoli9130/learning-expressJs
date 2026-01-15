//const express=require('express')();invoked 
//or
const express=require('express')//import express module


//Creates an Express application. The express() function is a top-level 
// function exported by the express module.
const app=express()

app.get("",(req,resp)=>{
resp.send("<h1>Basic NodeJs Example</h1>")//Send a response.
})

app.get("/about",(req,resp)=>{
    resp.send("<h1>Welcome To The About Page</h1>")
})

app.get("/contact",(req,resp)=>{
    resp.send("<h1>Welcome To The Contact Page</h1>")
})

app.get("/service",(req,resp)=>{
resp.send("<h1>Welcome To The Service Page</h1>")
})

//Express matches and executes the first matching route.
//So if "" and "/" look similar, only the first one is executed.
app.get("",(req,resp)=>{
resp.send("<h1>Second Home Page</h1>")
})

app.listen(3200)//port