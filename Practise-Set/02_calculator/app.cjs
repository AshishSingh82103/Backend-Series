const http = require('http');
const { requestHandler } = require('./handler.cjs')
const server = http.createServer(requestHandler);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
})