const app = require('./app')
const http = require('http')
const PORT = process.env.PORT || 4300
const server = http.createServer(app);

server.listen(PORT, ()=> console.log(`server is listening on port: ${PORT}`));
