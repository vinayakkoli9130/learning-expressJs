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

//-----------------------------------------------------------

// // This Express app serves home and login pages using separate modules and handles form submission via a POST route.

// // Import the Express framework (ES Module syntax)
// import express from 'express'

// // Import page functions that return HTML
// import home from './pages/home.js';
// import submit from './pages/submit.js';
// import login from './pages/login.js';

// // Create an Express application instance
// const app=express()

// //// Route
// // Route for Home page
// // When user opens '/', this function runs
// app.get("/",(req,resp)=>{
// resp.send(home())// Send Home page HTML
// })
// // Route for Login page
// // Displays login form
// app.get("/login",(req,resp)=>{
// resp.send(login())// Send Login page HTML
// })
// // Route to handle form submission
// // This route runs when form is submitted using POST
// app.post("/submit",(req,resp)=>{
// resp.send(submit())// Send Submit success page HTML
// })

//------------Render Html File-------------------

import express from 'express'

import path from 'path' //Use the path module to get absolute path.

const app=express()

//-----------Middleware in express js----------//
//Middleware in Express.js is a function that gets executed before the final route handler.
//It can be used to check requests, log activities, authenticate users, validate data, and 


//Application Middleware
// function checRout(req,resp,next){
//     console.log("user is aceessing "+req.url+ " page")
//     next()
// }
// app.use(checkRout)
//req is the request object
//res is the response object
//next() moves to the next middleware or route handler

// or

// app.use((req,resp,next)=>{
// console.log("user accessing "+req.url+" page")
// next()
// })

//-----------------------------------------------------------------
//condition middleware

//Age condition middleware
//Checks if user provided age in the query (?age=20)
//Blocks access if age is missing or less than 18
function ageCheck(req,resp,next){
    if(!req.query.age || req.query.age<18){
resp.send("Alert !:you are not access this page")
    }else{
        next()
    }
}
app.use(ageCheck)

////ip condition check middleware
//Logs the visitor's IP address
//Blocks access for specific IP (example: 10.207.126.19)
function ipCheck(req,resp,next){
    let ip=req.socket.remoteAddress
    console.log(ip)
if(ip.includes("10.207.126.19")){//block ip
resp.send("Alert !, You Can Not Access This Page")
}else{
  next()
}
}
app.use(ipCheck)

//---------------Add css or static files with express js-----------------
let publicPath=path.resolve('public')//D:\Angular\Nodejs\learning expressJs\public
//The express.static() function allows you to make the files inside 
// the public folder accessible to the browser.
app.use(express.static(publicPath))//href="/css/styles.css"
// console.log(publicStatic)
//---------------------------------------------------
app.get("/",(req,resp)=>{

    //We used path.resolve() to get the absolute path of HTML files.
    let absPath=path.resolve('view/home.html')
resp.sendFile(absPath)
})

app.get("/about",(req,resp)=>{
    let absPath=path.resolve('view/about.html')
resp.sendFile(absPath)
})

app.get("/login",(req,resp)=>{
    let absPath=path.resolve('view/login.html')
resp.sendFile(absPath)
})


//404 page not found

let absolutePath=path.resolve('view')//absolute path
app.use((req,resp)=>{//multi purpose method.
    //if status code 404 then send 404.html file 
resp.status(404).sendFile(absolutePath+"/404.html")//Set status code.
})



// Start the server on port 3200
app.listen(3200)//port