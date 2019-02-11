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
socket.on('newLoc',function(msg){
    let li = $('<li></li>');
    let a =$('<a target="_blank ">my current locatinon</a>')
    li.text(`${msg.from} :`)
    a.attr('href',msg.url)
    li.append(a);
    $('#msgs').append(li)
});



$('#msg-form').on('submit',function(e){
    e.preventDefault();
    const input = $('[name=msg]');
    socket.emit('createMsg',{
        from:'user',
        text:input.val(),
    },function(){
        input.val('')
    })
});


const locBtn = $('#sendLoc');


locBtn.on('click',function(){
    if(!navigator.geolocation)
    {
        return alert('geolocation not suppurted')
    }
    locBtn.attr('disabled','disabled').text('sending location ....');

    navigator.geolocation.getCurrentPosition(function(pos){
        locBtn.removeAttr('disabled').text('send location')
        socket.emit('creatLocation',{
            latitude:pos.coords.latitude,
            longitude:pos.coords.longitude
        })
       //latitude: 26.820553
        // longitude


    },function(){

         alert('geolocation not found')
        locBtn.removeAttr('disabled').text('send location')

    })
})