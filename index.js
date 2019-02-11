const express =require('express');
const app = express();
const path = require('path');
const Keys =require('./config/keys');
const http=require('http');
const socketIO=require('socket.io');

const server=http.createServer(app);
const io = socketIO(server);
app.use(express.static(path.join(`${__dirname}/public`)));

io.on('connection',(socket)=>{
    console.log('new user connected')

    socket.emit('newMsg',{
        from:'admin',
        text:'Welcome bithc'
    });
    socket.broadcast.emit('newMsg',{
        from:'admin',
        text:'Someone connected ',
        createsAt:new Date().getTime(),

    })


    socket.on('createMsg',(newMsg)=>{
        console.log(newMsg ,  'createMsg')
        io.emit('newMsg',{
            from:newMsg.from,
            text:newMsg.text,
            createsAt:new Date().getTime(),
        })
       
    })

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
