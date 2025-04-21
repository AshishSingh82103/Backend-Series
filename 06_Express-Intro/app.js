// core moduel
// const http = require("http");

// external moduel
const express = require('express');
const app = express();

app.get("/",(req, res, next) => {
  console.log('Come in first middleware', req.url, req.method);
  // res.send("<p>Came from first Middleware</p>") 
  next();
})

app.post("/submit-details",(req, res, next) => {
  console.log('Come in second middleware', req.url, req.method);
  res.send("<p>Welcome to Complete Coding with node.js</p>")
})


app.use("/",(req, res, next) => {
  console.log('Come in first middleware', req.url, req.method);
  res.send("<p>Came from another Middleware</p>")
  
})
// app.use("/submit-details",(req, res, next) => {
//   console.log('Come in second middleware', req.url, req.method);
//   res.send("<p>Welcome to Complete Coding with node.js</p>")
// })


// not to neccesaary use in express
// const server = http.createServer(app);


// Local moduel
const requestHandler = require('./user');



const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost${PORT}`);
});
