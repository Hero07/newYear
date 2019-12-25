var countDate = new Date('Jan 1, 2020 00:00:00').getTime();
/* 
fecha marcada para finalizar el conteo el primero de enero a las cero horas con cero minutos del dia
primero del año 2020 definimos el tiempo limite
*/

/* aca iniciamos la funcion del nuevo año donde definimos los valores para la cuenta regresiva*/
function newYear(){/*iniciamos  la funcion newYear*/
	var now = new Date().getTime();
		gap = countDate - now;/* la fecha definida coutDate le restamos el now que seria el reloj de la cuenta*/

		var second = 1000;/*definimos los segundo*/
		var minute = second * 60;/*el valor de los segundos */
		var hour = minute * 60;/* el valor de los minutos*/
		var day = hour * 24;/* el valor de las horas */

/* definimos la variable con var y le asignamos un nombre y luego un valor*/

		var d = Math.floor(gap / (day));
		var h = Math.floor((gap % (day)) / (hour));/*dividimos el dia en horas se almacena en d*/
		var m = Math.floor((gap % (hour)) / (minute));/* las horas en minutos se almacena en h*/
		var s = Math.floor((gap % (minute)) / second);/* los minutos en segundos se almacena en m*/
/*Definimos las siguientes variables que almacenaran el resultado dividiendo  se almacena en s*/

		document.getElementById('day').innerText = d;/* se imprime el resultado del dia */
		document.getElementById('hour').innerText = h;/*se imprime el resultado de las horas*/
		document.getElementById('minute').innerText = m;/* el resultado de los minutos */
		document.getElementById('second').innerText = s;/* el resultados de los segundos restantes*/
}
setInterval(function(){
	newYear();
},1000)

/* espero les guste el video y espero proximamente hacer videos hablando pero en estos momentos
no puedo por motivos de espacio 
Compartanlo suscribance al canal y dejen su like 
el resultado final es este...
disculpen la ortografia.. XDXDXD
nos vemos en un proximo video
*/