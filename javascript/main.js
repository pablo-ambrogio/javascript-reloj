const mostrarHora = () => {
    let reloj = document.getElementById( 'reloj' );
    reloj = new Date;
    let hora = formatoHora(reloj.getHours());
    let minutos = formatoHora(reloj.getMinutes());
    let segundos = formatoHora(reloj.getSeconds());

    let horaActual = `${hora}:${minutos}:${segundos}`;
    document.querySelector( '#reloj p' ).innerHTML = horaActual;

    function formatoHora ( hora ) {
        if( hora < 10 ) {
            hora = '0' + hora
        }
        return hora;
    }

    let diaSemana = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];
    let mes = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

    // let dia = reloj.getDay();
    diaSemana = diaSemana[ reloj.getDay() ];
    let dia = reloj.getDay();
    mes = mes[ reloj.getMonth() ];

    let diaMes = `${diaSemana}, ${dia} ${mes}`;

    document.getElementById( 'nombre-dia' ).innerHTML = diaMes;

}

setInterval( mostrarHora, 1000);

mostrarHora();
