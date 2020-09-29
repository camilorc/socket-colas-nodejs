const socket = io();
let label = $('#lblNuevoTicket');

socket.on('connect',function(){
    console.log('Conectado al servidor');

    socket.on('ultimoTicket',function(ultimo){
        label.text(ultimo);
    });


});

$('button').on('click',function(){
    
    console.log('Click');
    socket.emit('generaTicket', null, function(siguienteTicket){

        label.text(siguienteTicket);
    });


});