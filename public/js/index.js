const socket =  io();
socket.on('connect',()=>{
    console.log('connected form index')
   
});
socket.on('disconnect',()=>{
    console.log('client disconnected')
})
socket.on('newMsg',function(msg){
    console.log('newMsg', msg);
    let li = $('<li></li>');
    li.text(`${msg.from} : ${msg.text}`)

    $('#msgs').append(li)
});

$('#msg-form').on('submit',function(e){
    e.preventDefault();
    const input = $('[name=msg]').val();
    socket.emit('createMsg',{
        from:'user',
        text:input,
    },function(data){
        console.log('got it ', data)
  
    })
});