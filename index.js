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

// import express from 'express'

// import path from 'path' //Use the path module to get absolute path.

// const app=express()

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

//------------------------------Appliction Or Global Middleware-----------------------------------
//means middleware apply all route handler
//condition middleware

//Age condition middleware
//Checks if user provided age in the query (?age=20)
//Blocks access if age is missing or less than 18
// function ageCheck(req,resp,next){
//     if(!req.query.age || req.query.age<18){
// resp.send("Alert !:you are not access this page")
//     }else{
//         next()
//     }
// }
// app.use(ageCheck)

// ////ip condition check middleware
// //Logs the visitor's IP address
// //Blocks access for specific IP (example: 10.207.126.19)
// function ipCheck(req,resp,next){
//     let ip=req.socket.remoteAddress
//     console.log(ip)
// if(ip.includes("10.207.126.19")){//block ip
// resp.send("Alert !, You Can Not Access This Page")
// }else{
//   next()
// }
// }
// app.use(ipCheck)

//---------------Add css or static files with express js-----------------
// let publicPath=path.resolve('public')//D:\Angular\Nodejs\learning expressJs\public
//The express.static() function allows you to make the files inside 
// the public folder accessible to the browser.
// app.use(express.static(publicPath))//href="/css/styles.css"
// console.log(publicStatic)
//---------------------------------------------------
// app.get("/",(req,resp)=>{

//     //We used path.resolve() to get the absolute path of HTML files.
//     let absPath=path.resolve('view/home.html')
// resp.sendFile(absPath)
// })

// app.get("/about",(req,resp)=>{
//     let absPath=path.resolve('view/about.html')
// resp.sendFile(absPath)
// })

// app.get("/login",(req,resp)=>{
//     let absPath=path.resolve('view/login.html')
// resp.sendFile(absPath)
// })


// //404 page not found

// let absolutePath=path.resolve('view')//absolute path
// app.use((req,resp)=>{//multi purpose method.
//     //if status code 404 then send 404.html file 
// resp.status(404).sendFile(absolutePath+"/404.html")//Set status code.
// })



// // Start the server on port 3200
// app.listen(3200)//port

//------------------------------Route Middleware---------------------------------

// //middleware applies only specific routes
// //exicute before final route hander

// import express from 'express'//import express module.
// const app=express()//create express appliction instance.

// //route middleware for check age
// function checkAgeRouteMiddleware(req,resp,next){
//     console.log(req.query.age)
//     if(!req.query.age || req.query.age<18){
// resp.send("<h1>Alert! You Can Not Access This Website</h1>")
//     }else{
//         next()
//     }

// }
// // app.use(checkAgeRouteMiddleware)//appliction or globle middleware :middleware applies all route 

// //route middleware for check url
// function checkUrlRouteMiddleware(req,resp,next){
//     console.log("This Url Is-:",req.url)
//     next()
// }

// //create routes
// app.get("",(req,resp)=>{
// resp.send("<h1>Home Page</h1>")
// })

// app.get("/login",checkUrlRouteMiddleware,(req,resp)=>{
// resp.send("<h1>Login Page</h1>")
// })

// //middleware apply users route.middleware used as parameter in route
// app.get("/users",checkAgeRouteMiddleware,checkUrlRouteMiddleware,(req,resp)=>{//apply multiple route middleware
// resp.send("<h1>Users Page</h1>")
// })

// //middleware apply products route.middleware used as parameter in route
// app.get("/products",checkAgeRouteMiddleware,checkUrlRouteMiddleware,(req,resp)=>{
// resp.send("<h1>Products Page</h1>")
// })

// app.listen(3200)

// //--------------------Built-in Level Middleware-------------------
// //Built-in middleware is already provided by Express. 
// //You don't need to create it — you just use it directly.

// import express from 'express'//import express module

// import path from 'path'//import path module for absolute path

// const app=express()//create express application instance

// //built Middleware:
// //1.express.urlencoded
// //This is a built-in middleware function in Express. 
// //It parses incoming requests with urlencoded payloads and is based on body-parser.
// app.use(express.urlencoded({extended:false}))//The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).

// //2.express.static('staticFileName')
// //This is a built-in middleware function in Express. It serves static files and is based on serve-static.
// app.use(express.static('public'))
// //create route

// app.get("",(req,resp)=>{
//     let absPath=path.resolve("view/home.html")//create absolute path of html file
//     resp.sendFile(absPath)
//     //or
//     // let absPath=path.resolve("view")
//     // resp.sendFile(absPath+"/home.html")
// })

// app.get("/login",(req,resp)=>{
//     resp.send(`<form action="/submit" method='post'>
//         <input type='text' placeholder='enter mail' name='email'>
//           <input type='text' placeholder='enter password' name='password'>
//           <button>Submit</button>
//     </form>`)
// })

// app.post("/submit",(req,resp)=>{
//     console.log("User Log-in Details Are:",req.body)//body requiest
//     resp.send("<h1>Submit Page<h1>")
// })

// app.get("/users",(req,resp)=>{
//     resp.send("<h1>Users Page<h1>")
// })

// app.listen(3200)//listen port

// //-------------------:External Middleware:--------------------
// //External middleware is not built into Express.js.
// //You must install it separately via npm.
// //It adds extra functionality (like logging, CORS, authentication, etc.)

// import express from 'express'
// import morgan from 'morgan'//HTTP request logger middleware for node.js//npm i morgan
// const app=express()//create express application instance

// //morgan is an external middleware used for logging HTTP requests in the terminal.
// //Helpful for debugging and monitoring incoming requests.
// app.use(morgan('dev'))//"dev" is a predefined format that logs method, URL, status code, response time, etc.

// app.get("/",(req,resp)=>{
// resp.send("<h1>Home Page</h1>")
// })

// app.get("/users",(req,resp)=>{
//     resp.send("<h1>Users Page</h1>")
// })

// app.get("/products",(req,resp)=>{
//     resp.send("<h1>Products Page</h1>")
// })

// app.get("/wait",(req,resp)=>{
//     setTimeout(()=>{
//         resp.send("result after 1 second")
//     },1000)
// })

// app.listen(3200)

// ----------------Template Engine-------------------------
//create dynamic web pages by merging html with data from server.we use ejs(embedded javascript)

// import express from "express";

// const app=express()

//// 🔑 tell Express the new folder name template

//app.set("views", path.resolve("templates"));//path for absolute path

// app.set('view engine','ejs')//set express view engine ejs,tells express use ejs.
// //Note: EJS automatically looks inside the views/ folder
// app.get("",(req,resp)=>{
// resp.render('home',{name:"Vinayak Koli",course:"Learning Node.js"})//send data to ejs file
// })

// app.listen(3200)

// //--------Submit form data and display on ejs template engine page------------------------
// import express from 'express'

// const app=express()
// app.use(express.urlencoded({extended:false}))
// app.set('view engine','ejs')

// app.get("/add-user",(req,resp)=>{
// resp.render('addUser.ejs')//to render and send EJS templates to the client.
// })

// app.post("/submit-user",(req,resp)=>{
//     console.log(req.body)
//     resp.render('submitUser.ejs',req.body)
// })

// app.get("/users",(req,resp)=>{
//     const users=["vinny","manny","ganny","sunny"]
//     const isLogin=true
// resp.render('users',{users,isLogin})
// })

// app.listen(3200)

// //-------------------MVC Architecture-------------------//

// import express from 'express'
// import { handleUsers } from './controller/userController.js';

// const app=express()

// app.set('view engine','ejs')//it tells express use ejs engine

// app.get("/users",handleUsers)

// app.listen(3200)

// //-----------------------Dynamic Routes-----------------
// import express from 'express'

// const app=express()

// //In a web app, when a user visits a specific URL, we use a route to handle that request.
// app.get("",(req,resp)=>{
//     const users=["mahi","vinny","dipu","bapu","gannu"]//static data

//     let data=`<ul>`

//     for(let i=0;i<users.length;i++){
//        data+=`<li><a href='/user/${users[i]}'>${users[i]}</a></li>`
//     }

//     //dynamic route
//     //Dynamic routes allow us to pass dynamic data through the URL using parameters.
//     // Instead of writing a new route for every user, we write one route that accepts 
//     // any user name as a parameter.
//     app.get("/user/:name",(req,resp)=>{
//         console.log(req.params.name)
//         const userName=req.params.name
//         resp.send(`this is ${userName} profile page `)
//     })

//     data+=`</ul>`

// resp.send(data)

// })

// app.listen(3200)

// //---------------API Example with Dynamic Routes-----------------

// import express from 'express'
// import usersData from './users.json' with {type:'json'}
// const app=express()

// app.get("",(req,resp)=>{
// resp.send(usersData)
// })

// //dynamic route

// //Fetch a Single User by ID (Dynamic Route)
// app.get("/user/:id",(req,resp)=>{
//     const id=req.params.id//get req id
//     console.log(id)
//    const filteredData= usersData.filter((user)=>user.id==id)//compaire user id with request id
// resp.send(filteredData)
// })

// //Fetch a User by Name (Case-Insensitive Match)
// //get user by name
// app.get("/username/:name",(req,resp)=>{
// const name=req.params.name
// console.log(name)
// const filteredData=usersData.filter((user)=>user.name.toLowerCase()==name.toLowerCase())
// resp.send(filteredData)
// })

// app.listen(3200)

// console.log("------------Connect node with mongodb-----------------------")

// import express from 'express'

// import { MongoClient } from 'mongodb'//The MongoClient class is a class that allows for making Connections to MongoDB.

// // Define DB name and MongoDB URL
// const dbName='college'//database name.

// const url="mongodb://localhost:27017"//url of mangodb defult url

// // Create MongoDB client
// const client= new MongoClient(url)//this client need to connet to the nodejs

// // Create async function for DB connection
// async function dbConnection(){

//  await client.connect()

//  const db=client.db(dbName)

//  const collection=db.collection('students')

//  const result= await collection.find().toArray()

//  console.log(result)
// }

// // Call connection function
// dbConnection()

// // Create express app
// const app=express()

// app.listen(3200)

// ////-----------------:Display MongoDB Data on UI using Node.js and EJS.-:--------------

// import express from 'express'

// import { MongoClient} from 'mongodb'

// const app=express()

// app.set('view engine','ejs')//tells nodejs use ejs

// const client = new MongoClient("mongodb://localhost:27017")

// app.get("/",async (req,resp)=>{

// await client.connect()

// const db=client.db('college')

// const collection=db.collection('students')

// const students=await collection.find().toArray()
// console.log(students)

// resp.render("students",{students})
// })

// app.listen(3200)

// console.log("---------------REST API with Node.js & MongoDB-------------")

// import express from 'express'
// import { MongoClient } from 'mongodb'

// const app=express()
// app.set('view engine','ejs')
// const client=new MongoClient("mongodb://localhost:27017")

// client.connect().then((connection)=>{
// const db=connection.db('college')

// app.get("/api",async(req,resp)=>{

// const collection=db.collection('students')
// const students= await collection.find().toArray()
// resp.send(students)
// })

// app.get("/ui",async(req,resp)=>{
// const collection=db.collection('students')
// const students= await collection.find().toArray()
// resp.render('students',{students})
// })
// })
// app.listen(3200)

// console.log("------------Save Form Data in MongoDB---------");

// import express from 'express';//import express module
// import { MongoClient, ObjectId } from 'mongodb';//import MongoClient for making connection to mongodb

// const app = express();//create express application instance

// app.set('view engine', 'ejs');//tells node.js use ejs

// app.use(express.urlencoded({ extended: true }));//get request body data

// app.use(express.json());//This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

// const client = new MongoClient("mongodb://localhost:27017");//mongodb url pass to MongoClient

// client.connect().then((connection) => {//connect mongodb
//     const db = connection.db('college');//pass database name

//     app.get("/api", async (req, resp) => {//create api route for get stuents collections
//         const students = await db.collection('students').find().toArray();
//         resp.send(students);
//     });

//     app.get("/ui", async (req, resp) => {//create ui route for display  stuents collections data in browser into format
//         const students = await db.collection('students').find().toArray();
//         resp.render('students', { students });
//     });

//     app.get("/add", (req, resp) => {//create add route for get data from browser
//         //with send() method
//         // resp.send(`
//         //     <form method="post" action="/add-student">
//         //     <input type="text" name="name" placeholder="Enter Name"> <br><br>
//         //     <input type="number" name="age" placeholder="Enter Age"> <br><br>
//         //     <input type="email" name="email" placeholder="Enter Email"> <br><br>
//         //     <input type="text" name="city" placeholder="Enter City"> <br><br>
//         //     <button>Add Student</button>
//         //     </form>
//         //     `)

//         //with ejs 
//         resp.render('add-student');
//     });

//     app.post("/add-student", async (req, resp) => {
//         resp.send("Data Submited");
//         // console.log(req.body) //express.urlencoded({extended:true})
//         const students = await db.collection('students').insertOne(req.body);//create add-student route for post data to mongodb
//         console.log(students);
//     });

//     //Make POST Method REST API with Node.js & MongoDB from thunder client send data
//     //api request
//     app.post("/add-student-api", async (req, resp) => {

//         console.log(req.body);

//         const { name, age, email, city } = req.body;//destructuring

//         if (!name || !age || !email || !city) {

//             resp.send({ message: "operation failed", suceess: false });

//             return false;
//         }
//         const student = await db.collection('students').insertOne(req.body);

//         resp.send({ message: "data stored ", suceess: true, result: student });

//     });
//     //delete from thunder client 
//     app.delete("/delete/:id", async (req, resp) => {

//         console.log(req.params.id);

//         const collection = db.collection('students');

//         const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

//         if (result) {
//             resp.send({
//                 message: "student data deleted",
//                 suceess: true
//             });
//         } else {
//             resp.send({
//                 message: "student data not deleted,try after sometime",
//                 suceess: false
//             });
//         }

//     });

//     //delete from ui
//     app.get("/ui/delete/:id", async (req, resp) => {

//         console.log(req.params.id);

//         const collection = db.collection('students');

//         const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

//         if (result) {
//             resp.send('<h1>Student Data Deleted<h1>');
//         } else {
//             resp.send('<h1>Student Data Not Deleted<h1>');
//         }
//         // resp.send("working")
//     });

//     //update data for form
//     app.get("/ui/student/:id", async (req, resp) => {

//         const id = req.params.id;
//         console.log(id);

//         const collection = db.collection('students');
//         const result = await collection.findOne({ _id: new ObjectId(id) });//Create ObjectId from a 24 character hex string.
//         resp.render("update-student", { result });
//     });

//     app.get("/student/:id", async (req, resp) => {

//         const id = req.params.id;
//         console.log(id);

//         const collection = db.collection('students');
//         const result = await collection.findOne({ _id: new ObjectId(id) });//Create ObjectId from a 24 character hex string.
//         resp.send({ message: "update-student", success: true, results: result });
//     });

//     app.post("/ui/update/:id", (req, resp) => {
//         console.log(req.body);
//         console.log(req.params.id);

//         const collection = db.collection('students');
//         const filter = { _id: new ObjectId(req.params.id) };
//         const update = { $set: req.body };
//         const result = collection.updateOne(filter, update);
//         if (result) {
//             resp.send("data updated");
//         } else {
//             resp.send("data not updated");
//         }
//     });
//     //api
//     app.put("/update/:id", (req, resp) => {
//         console.log(req.body);
//         console.log(req.params.id);

//         const collection = db.collection('students');
//         const filter = { _id: new ObjectId(req.params.id) };
//         const update = { $set: req.body };
//         const result = collection.updateOne(filter, update);
//         if (result) {
//             resp.send({ message: "data updated", success: true, results: result });
//         } else {
//             resp.send({ message: "data not updated", success: true, results: result });
//         }
//     });
// });

// app.listen(3200)

// console.log("-----------:Connect MongoDB to Nodejs Using Mongoose:----------")


// import mongoose from "mongoose"//import mongoose

// async function dbConnection(){
//                               //url                  db name
//    await mongoose.connect("mongodb://localhost:27017/college")

//    console.log("MongoDB Connected")

//    //schema
//    const schema=mongoose.Schema({ 
//     name:String,
//     age:Number,
//     email:String,
//     city:String 
//    })

//    const studentsModel=mongoose.model('students',schema)

//    const result= await studentsModel.find()

//    console.log(result)
// }

// dbConnection()

// console.log("GET REST API with Mongoose to Fetch Data from MongoDB")

// import express from 'express'

// import mongoose from 'mongoose'
// import studentModel from './models/studentModel.js';

// const app=express()

// app.use(express.json())//for request body

//  mongoose.connect("mongodb://localhost:27017/college").then(()=>{

//     console.log("_____________Connected_____________")

//  })

// app.get("/",async (req,resp)=>{
//     const result=await studentModel.find()
//      resp.send(result)
// })


// //Make POST Method REST API with Mongoose to Insert Data

// app.post("/save",async (req,resp)=>{

//     const {name,age,email,city}=req.body

//     if( !req.body || !name || !age || !email || !city){

//         resp.send({
//             message:"data not stored",
//             success:false,
//             storedIn:null
//         })

//         return false

//     }else{
//         // //insertOne()
//         // const studentData=await studentModel.insertOne(req.body)
         
//         //create() //__v document ka version number hota hai.
//         const studentData=await studentModel.create(req.body)
//         resp.send({
//             message:"data stored",
//             success:true,
//             storedIn:studentData
//         })
//     }

//     })

//     //update
//     app.put("/update/:id",async (req,resp)=>{
     
//         const id=req.params.id

//         console.log(req.body,id)

//         const studentData=await studentModel.findByIdAndUpdate(id,{...req.body})

//         resp.send({
//             message:"data updated",
//             success:true,
//             info:null
//         })

// })

// //delete
//     app.delete("/delete/:id",async (req,resp)=>{
     
//         const id=req.params.id//find id

       

//         const studentData=await studentModel.findByIdAndDelete(id)//delete data from req id

//         resp.send({
//             message:"data deleted",
//             success:true,
//             info:studentData
//         })

// })
// app.listen(3200)

// console.log("Fix CORS Issues in Node.js APIs (Cross-Origin Resource Sharing)")
// //What is Cors
// //CORS stands for Cross-Origin Resource Sharing.It's a browser security feature
// //that restricts web pages from making requests to a different domain 
// // (origin) than the one that served the web page.

// import express from 'express'

// import cors from 'cors'//import for support all domain

// const app=express()

// app.use(cors())//cors() used as middleware

// app.get("/",(req,resp)=>{
// resp.send({
//     name:"vinayak",
//     age:26,
//     city:"pcmc"
// })
// })

// console.log("--------Upload File using Multer NPM Package-------")

// import express from 'express'

// import multer from 'multer'

// const app=express()

// const storage=multer.diskStorage({//Returns a StorageEngine implementation configured to store files on the local file system.
    
//     destination:function (req,file,cb){
//   cb(null,'upload')//folder name
//     },

//  filename:function (req,file,cb){
//   cb(null,file.originalname)//Name of the file on the uploader's computer.
//     }

// })

// const upload=multer({storage})

// app.get("/",(req,resp)=>{
// resp.send(`<form action="/upload" method="post" enctype="multipart/form-data">
//     <input type="file" name="myFile">
//     <button>Upload File</button>
//     </form>`)
// })

// app.post("/upload",upload.single('myFile'),(req,resp)=>{
// resp.send({
//     message:"file uploaded",
//     info:req.file
// })
// })

// app.listen(3200)

// 

// console.log("-------------Set and Get Cookies in Node js-----------")

// import express from 'express'//import express module

// const app=express()//create express application instance

// app.set("view engine","ejs")//tell express use ejs

// app.use(express.urlencoded({extended:true}))//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option


// app.get("/login",(req,resp)=>{//create login get route that render login.ejs file
// resp.render('login')
// })

// app.post("/profile",(req,resp)=>{//create profile post route render profile.ejs file set header
//     resp.setHeader('Set-Cookie',"login=true")//set cookies
//     resp.setHeader('Set-Cookie',"name="+req.body.name)
// resp.render('profile')
// })

// app.get("/",(req,resp)=>{//root route for get cookie from server
//     let  cookieData=req.get('cookie')//Return request header.//login=true; name=jay
//     cookieData=cookieData.split(";")//[ 'login=true', ' name=jay' ]
//     cookieData=cookieData[1].split("=")//[ ' name', 'jay' ]
//     console.log(cookieData[1])//jay
// resp.render('home1',{name:cookieData[1]})//pass cookie to home1.ejs file
// })

// app.listen(3200)

// console.log("__________________.Session.__________________")

// import express from 'express'
// import session from 'express-session'

// const app=express()

// app.set("view engine","ejs")

// app.use(session({
//     secret:"apple"//This is the secret used to sign the session ID cookie
// }))

// app.use(express.urlencoded({extended:true}))

// app.get("/login",(req,resp)=>{
// resp.render("login")
// })

// app.post("/profile",(req,resp)=>{

//     req.session.data=req.body

//     console.log(req.session.data)

// resp.render("profile")

// })

// app.get("/",(req,resp)=>{
//     let data=req.session.data
//     console.log("data:",data)
// resp.render("home1",{data})
// })

// app.listen(3200)

console.log("______ Send Email with Node.js _____")

import express, { text } from 'express'

import nodemailer from 'nodemailer'

const app=express()

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vinayakkoli9130@gmail.com',
        pass:""
    }
})

app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}))

app.get("/mail",(req,resp)=>{
resp.render("mail")
})

app.post("/submit-email",(req,resp)=>{

console.log(req.body)

const mailOptions={
    from:"vinayakkoli9130@gmail.com",
    to:"vinayakkoli9130@gmail.com",
    subject:req.body.subject,
    text:req.body.mail
}

transporter.sendMail(mailOptions,(error,info)=>{
if(error){
    resp.send('email operation failed,try again')
}else{
    resp.send("email send")
}
})

// resp.send("email send")
})

app.listen(3200)