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
app.get('/react', (req,res) => res.sendFile(`${__dirname}/reactWeb/reactWebCdn.html`))
app.get('/react/http', (req,res) => res.sendFile(`${__dirname}/reactWeb/reactWebCdnHttp.html`));
app.get(['/react/nav', '/react/nav/:id'], (req,res) => res.sendFile(`${__dirname}/reactWeb/routerReact.html`));
