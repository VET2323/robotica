function go(){
        var circle = document.querySelector('#circleProgress');
        var number = document.querySelector('#numberProgress').value;
        document.querySelector('.number').innerHTML = number + '%';
        circle.style.strokeDashoffset = 440 - (440 * number) / 100;
        }

        function go2(){
        var circle2 = document.querySelector('#circleProgress2');
        var number2 = document.querySelector('#numberProgress2').value;
        document.querySelector('.number2').innerHTML = number2 + '%';
        circle2.style.strokeDashoffset = 440 - (220 * number2) / 100;
        }
const interval = setInterval(() => {
        var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
document.getElementById("hora").innerHTML = "Hoje é " + str_data + ' às ' + str_hora;}, 1000);
