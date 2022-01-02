const express      = require('express')
const path         = require('path')
const http         = require('http')

const port         = process.env.PORT || 9090;
const app          = express()

app.set('appPath', 'public');
app.use(express.static(__dirname));

app.route('/*')
  .get(function(req, res) {
    res.sendfile(app.get(__dirname, 'index.html'));
  });

app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`*** Server is up and running on port ${port} ***`))