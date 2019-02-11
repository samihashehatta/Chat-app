const socket =  io();
socket.on('connect',()=>{
    console.log('connected form index')
   
});
socket.on('disconnect',()=>{
    console.log('client disconnected')
})
socket.on('newMsg',function(msg){
    console.log('newMsg', msg)
});