const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  
})

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost${PORT}`);
  
})
