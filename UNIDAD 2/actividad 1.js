//generar 1000 nombres aleatorios con
//nombre, apellido paterno, materno, sexo, edad
var nombre =["Eduardo","Juana","Israel", "Maria", "Fernando"];
var apellidoP = ["Hernandez","Flores", "Gonzales", "Chavez", "Perez"];
var apellidoM = ["Rosales", "Ramirez", "Fuentes", "Sanchez" ,"Martinez"];
var sexo = ["Masculino","Femenino"];
var edad = ["15","16","5","20","10"];

function persona ();{
var XD = {
    "persona" : {
        "nombre" : nombre,
        "apellidoP" : apellidoP,
        "apellidoM" : apellidoM,
        "sexo" : sexo,
        "edad" : edad,
    }
}

}
for(i=1 ; i<=1000 ; i++){
    console.log(persona);
}