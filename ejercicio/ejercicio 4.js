// requerir al usuario que ingrese el numero entero positivo e imprimir todos los numeros correlativos entre el ingresado por el usuario y uno menos del doble del mismo.

var numero = prompt("Ingrese el numero");
for(let i=0; i<=numero; i++){
    prompt(i);
}
var resultado = (numero * 2)-1;
alert(resultado);