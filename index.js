const server = require('./api/server.js');

const port = 6500;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
});