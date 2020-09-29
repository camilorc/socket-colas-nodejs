const { io } = require('../server');
const {TicketControl} = require('../classes/ticket-control');

let ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('generaTicket',(data,callback)=>{
        let siguiente = ticketControl.siguiente();
        callback(siguiente);
        console.log(siguiente);
    });

    //Cuando el cliente se conecte, emitimos el último ticket en la BD
    client.emit('ultimoTicket',ticketControl.getUltimoTicket());


});