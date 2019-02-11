const express =require('express');
const app = express();
const path = require('path');
const Keys =require('./config/keys');
const http=require('http');
const socketIO=require('socket.io');

const server=http.createServer(app);
const io = socketIO(server); 
const {genMsg,genLocation}=require('./helpers/msg');
app.use(express.static(path.join(`${__dirname}/public`)));

io.on('connection',(socket)=>{
    console.log('new user connected')

    socket.emit('newMsg',genMsg('admin','welcome bitch'));
    socket.broadcast.emit('newMsg',genMsg('Admin','someone connected'))


    socket.on('createMsg',(newMsg,callback)=>{
        console.log(newMsg ,  'createMsg')
        io.emit('newMsg',genMsg(newMsg.from,newMsg.text))
        callback('this is from the server');
    })
    socket.on('creatLocation',(coords)=>{
        io.emit('newLoc',genLocation('admin',coords.latitude,coords.longitude))
    });
    socket.on('disconnect',()=>{
        console.log('diss')
    })
});
app.get('/',(req,res)=>{
   res.render('index.html') 
});






server.listen(Keys.port,()=>{
console.log(`app is running at ${Keys.port}`)
});
