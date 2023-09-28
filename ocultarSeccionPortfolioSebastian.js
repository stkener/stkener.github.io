$(document).ready(mostrarOtrosProyectos);
$(document).ready(mostrarMasExperiencia);
$(document).ready(mostrarOtrosCursos);

var contadorProyectos = 1;

function mostrarOtrosProyectos(){
    document.getElementById("botonOtrosProyectos").onclick = function(){
        if(contadorProyectos == 1){
            document.getElementById("seccionOtrosProyectos").classList.remove("noMostrarElemento");
            document.getElementById("seccionOtrosProyectos").classList.add("proyecto");
            contadorProyectos = 0;
        }else{
            contadorProyectos = 1; 
            document.getElementById("seccionOtrosProyectos").classList.remove("proyecto");
            document.getElementById("seccionOtrosProyectos").classList.add("noMostrarElemento");
}}}

var contadorExperiencia = 1;

function mostrarMasExperiencia(){
    document.getElementById("botonOtrasExperiencias").onclick = function(){
        if(contadorExperiencia == 1){
            document.getElementById("seccionOtrasExperiencias").classList.remove("noMostrarElemento");
            contadorExperiencia = 0;
        }else{
            contadorExperiencia = 1; 
            document.getElementById("seccionOtrasExperiencias").classList.add("noMostrarElemento");
}}}

var contadorOtrosCursos = 1;

function mostrarOtrosCursos(){
    document.getElementById("botonOtrosCursos").onclick = function(){
        if(contadorOtrosCursos == 1){
            document.getElementById("seccionOtrosCursos").classList.remove("noMostrarElemento");
            document.getElementById("seccionOtrosCursos").classList.add("contenedorCursos");
            contadorOtrosCursos = 0;
        }else{
            contadorOtrosCursos = 1; 
            document.getElementById("seccionOtrosCursos").classList.remove("contenedorCursos");
            document.getElementById("seccionOtrosCursos").classList.add("noMostrarElemento");
}}}