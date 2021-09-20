//solicitar al usuario que ingrese una frase y luego imprimir un listado de las vocales que aparecen en esta frase (sin repetirlas)

var frase = prompt("Ingrese una frase");
frase.toLowerCase();
var array = [];
for(let i=0; i<frase.lenght;i++){
   if(frase[i]==="a" || frase[i]==="e" || frase[i]==="i" || frase[i]==="o" || frase[i]==="u"){
    if(!array.includes(frase[i])){
         array.push(frase[i]);
      }
   }
}

for(let x=0;x<array.lenght;x++){
  alert(frase[i]);
}