const fs = require('fs');

class TicketControl{

    constructor(){
        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let data = require('../data/data.json');

        if(this.hoy === data.hoy){

            this.ultimo = data.ultimo;

        }else{
            this.reiniciarConteo();
        }

    }

    getUltimoTicket(){
        return `Ticket número ${this.ultimo}`;
    }

    siguiente(){
        
        this.ultimo += 1;
        this.grabarArchivo();
        return `Ticket número ${this.ultimo}`;

    }

    reiniciarConteo(){

        this.ultimo = 0;
        this.grabarArchivo();

    }

    grabarArchivo(){

        let dataJson = {
            "ultimo":this.ultimo,
            "hoy":this.hoy
        };

        let dataJsonString = JSON.stringify(dataJson);

        fs.writeFileSync('./server/data/data.json',dataJsonString);
    }


}

module.exports = {
    TicketControl
}