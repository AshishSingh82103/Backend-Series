const http = require("http");
const userRequestHnadeler =require('./app.cjs')
const server = http.createServer(userRequestHnadeler);


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost${PORT}`);
});
