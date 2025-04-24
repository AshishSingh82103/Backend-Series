const express = require('express');
const path =  require('path')
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter')
const rootDir = require('./utils/pathUtil')

const app = express();
app.use(express.urlencoded())

app.use(homeRouter);
app.use(contactRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`server is listening on port http://localhost:${PORT}`);
  
})