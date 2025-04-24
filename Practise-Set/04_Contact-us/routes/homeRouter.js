// Core-moduel
const path = require('path')
// External-moduel
const express = require('express');
const homeRouter = express.Router();

const rootDir = require('../utils/pathUtil')

homeRouter.get("/",(req, res, next) => {
  console.log("Handling / for GET",  req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports =homeRouter;