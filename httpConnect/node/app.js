// RN과 함께 사용하므로 중복 되는 내용이 있습니다.

const express = require('express'),
    app = express(),
    server = require('http').Server(app),
    cors = require('cors'),
    io = require('socket.io')(server);

server.listen(3000);
app.use(cors());
app.use(express.static('./reactWeb'))

io.on('connection',socket => console.log("connect"));

app.get('/', (req, res) => res.send("hi")); 
app.get('/data/all', (req,res) => res.json({
    client: req.headers["user-agent"],
    title : 'MyNodeJsServer',
    data : 'MyNodeJsServerData'
}));

app.get('/react', (req,res) => res.sendFile(`${__dirname}/react/reactWebCdn.html`))
app.get('/react/http', (req,res) => res.sendFile(`${__dirname}/react/reactWebCdnHttp.html`))
