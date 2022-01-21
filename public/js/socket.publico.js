// Comando para establecer la conexion

var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1,lblTicket2,lblTicket3,lblTicket4];
var lblEscritorios = [lblEscritorio1,lblEscritorio2,lblEscritorio3,lblEscritorio4];

socket.on('estadoActual', function(data) {

    console.log(data.ultimos4);
    actualizaHTML(data.ultimos4);

    // console.log(data.ultimos4[0].numero)


    // $('#lblTicket1').text('Ticket ' + data.ultimos4[0].numero)
    // $('#lblTicket2').text('Ticket ' + data.ultimos4[1].numero)
    // $('#lblTicket3').text('Ticket ' + data.ultimos4[2].numero)
    // $('#lblTicket4').text('Ticket ' + data.ultimos4[3].numero)


    // $('#lblEscritorio1').text('Escritorio ' + data.ultimos4[0].escritorio)
    // $('#lblEscritorio2').text('Escritorio ' + data.ultimos4[1].escritorio)
    // $('#lblEscritorio3').text('Escritorio ' + data.ultimos4[2].escritorio)
    // $('#lblEscritorio4').text('Escritorio ' + data.ultimos4[3].escritorio)
});

socket.on('ultimos4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);

});


function actualizaHTML(ultimos4) {

    lblTickets.map( (ticket,i) => {
        ticket.text('Ticket ' + ultimos4[i].numero)
    } );
    
    lblEscritorios.map( (escritorio,i) => {
        escritorio.text( 'Escritorio ' + ultimos4[i].escritorio )
    } );
    
    // for (let i = 0; i < ultimos4.length - 1 ; i++) {
        
    //     lblTickets[i].text('Ticket ' + ultimos4[i].numero);
    //     lblEscritorios[i].text( 'Escritorio ' + ultimos4[i].escritorio );
        
    // }
    
}