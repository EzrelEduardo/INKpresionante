//solicitar al usuario que ingrese una frase y luego imprimir la cantidad de vocales que se encuentran en dicha frase

var string = prompt("Escribe una frase");

string.toLowerCase();
var countA=0;
var countE=0;
var countI=0;
var countO=0;
var countU=0;
alert("A: "+countA+", E: "+countE+", I: "+countI+", O: "+countO+", U: "+countU);

for(var i =0; i<string.length;i++){
    if(string[i]==="a"){
        countA++;
    }
    else if(string[i]==="e"){
        countE++;
    }
    else if(string[i]==="i"){
        countI++;
    }
    else if(string[i]==="o"){
        countO++;
    }
    else if(string[i]==="u"){
        countU++;
    }
}
alert("A: " + countA +", E: " + countE + ", I: " + countI + ", O: " + countO + ", U: " + countU );