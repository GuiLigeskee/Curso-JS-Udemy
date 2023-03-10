//Modelo HTML e CSS para exercícios posteriores  (13/12/2022)

function meuEscopo() {
    let data = new Date();
    let resultado = document.querySelector('#resultado');

    function formatWeek(data) {
        let diaSemana = '';

        switch (data.getDay()) {
            case 0:
                diaSemana = 'Domindo';
                break;
            case 1:
                diaSemana = 'Segunda-feira';
                break;
            case 2:
                diaSemana = 'Terça-feira';
                break;
            case 3:
                diaSemana = 'Quanta-feira';
                break;
            case 4:
                diaSemana = 'Quinta-feira';
                break;
            case 5:
                diaSemana = 'Sexta-feira';
                break;
            case 6:
                diaSemana = 'Sábado';
                break
            default:
                diaSemana = 'ERROR';
                break;
        }
        return diaSemana;
    }


    function formatMonth(data) {
        let mes = '';

        switch (data.getMonth()) {
            case 0:
                mes = 'Janeiro';
                break;
            case 1:
                mes = 'Fevereiro';
                break;
            case 2:
                mes = 'Março';
                break;
            case 3:
                mes = 'Abril';
                break;
            case 4:
                mes = 'Maio';
                break;
            case 5:
                mes = 'Junho';
                break;
            case 6:
                mes = 'Julho';
                break;
            case 7:
                mes = 'Agosto';
                break;
            case 8:
                mes = 'Setembro';
                break;
            case 9:
                mes = 'Outubro';
                break;
            case 10:
                mes = 'Novembro';
                break;
            case 11:
                mes = 'Dezembro';
                break;
            default:
                mes = 'Error'
                break;
        }
        return mes
    }
    function zeroAEsquerda(num) { // caso o dia seja de 1 até 9 
        return num >= 10 ? num : `0${num}`;
    }
    diasemana = formatWeek(data);
    mes = formatMonth(data);

    let dataBrasil = `${diasemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}, ${data.getHours()}:${zeroAEsquerda(data.getMinutes())}`;
    console.log(dataBrasil);
    resultado.innerHTML = dataBrasil;

}
meuEscopo();