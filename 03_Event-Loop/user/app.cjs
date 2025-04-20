
const http = require('http');
const requestHandler = require('./user.cjs');

const server = http.createServer(requestHandler);

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
