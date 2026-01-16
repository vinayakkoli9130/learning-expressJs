// //const express=require('express')();invoked 
// //or
// const express=require('express')//import express module//vanila js syntax


// //Creates an Express application. The express() function is a top-level 
// // function exported by the express module.
// const app=express()

// app.get("",(req,resp)=>{
// resp.send("<h1>Basic NodeJs Example</h1>")//Send a response.
// })

// app.get("/about",(req,resp)=>{
//     resp.send("<h1>Welcome To The About Page</h1>")
// })

// app.get("/contact",(req,resp)=>{
//     resp.send("<h1>Welcome To The Contact Page</h1>")
// })

// app.get("/service",(req,resp)=>{
// resp.send("<h1>Welcome To The Service Page</h1>")
// })

// //Express matches and executes the first matching route.
// //So if "" and "/" look similar, only the first one is executed.
// app.get("",(req,resp)=>{
// resp.send("<h1>Second Home Page</h1>")
// })



//--------------------------------------------------------------
//use ES to import and export package.json:"type":"module"

// import express from 'express' //ECMAScript  syntax
// import home from './pages/home.js';
// import about, { contact } from './pages/about.js';

// let app=express()

// app.get("",(req,resp)=>{
// resp.send(home())
// })

// app.get("/about",(req,resp)=>{
//     resp.send(about(
//     ))
// })

// app.get("/contact",(req,resp)=>{
//     resp.send(contact())
// })

//--------------------------(Render inline  Html elements and form js)----------------------------------------
// import express from 'express'

// const app=express()//express exicute

// app.get("/",(req,resp)=>{
// resp.send("<h1>Home Page</h1> <a href='/login'>Go To Login</a>")
// })

// app.get("/login",(req,resp)=>{
// resp.send(`<form action="/submit" method="post">
//     <input type="name" placeholder="enter name" name="name">
//     <br/><br>
//     <input type="password" placeholder="enter password" name="password">
//     <br/><br>
//     <button>Submit</button>
//     </form> 
//     <a href='/'>Back To Home</a>
//     `)
// })

// app.post("/submit",(req,resp)=>{
// resp.send("<h1>Data Submited</h1>&nbsp &nbsp&nbsp&nbsp<a href='/'>Back To Home</a>")
// })

import express from 'express'
import home from './pages/home.js';
import submit from './pages/submit.js';
import login from './pages/login.js';

const app=express()

app.get("/",(req,resp)=>{
resp.send(home())
})

app.get("/login",(req,resp)=>{
resp.send(login())
})

app.post("/submit",(req,resp)=>{
resp.send(submit())
})


app.listen(3200)//port