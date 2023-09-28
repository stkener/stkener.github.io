const otrosCursos=
[
    {
        "nombre":"Reparacion de celulares",
        "img":"repCel.jpg",
        "año":"2019"
        
    },
    {
        "nombre":"Cerrajeria",
        "img":"cerrajeriaCert.jpg",
        "año":"2016"   
    },
    {
        "nombre":"Introduccion a la electronica",
        "img":"introElect.jpg",
        "año":"2014"
    }
];

/*############################################################################################*/
/*VISUALIZACION CURSOS*/ 
function mostrarOtrosCursos(otrosCursos){
    let articulo=" ";
    otrosCursos.forEach(p => {
        articulo +=`
        <article>
        <p class="letraProyectos">${p.nombre} - ${p.año}</p>
        <img class="imagenCursos" src="img/${p.img}" title="${p.nombre}">
        <hr class="lineaCursos">
        </article>        
        `;                        
    });

    let contenedorArticulos = document.getElementById("seccionOtrosCursos");

    contenedorArticulos.innerHTML = articulo;
}

document.addEventListener("DOMContentLoaded", mostrarOtrosCursos(otrosCursos));


/*############################################################################################*/
/*FUNCIONAMIENTO GALERIA CURSOS*/

const contenedorArticulosOtrosCursos = document.getElementById("seccionOtrosCursos") 

contenedorArticulosOtrosCursos.addEventListener("click", (e)=>{ 
    e.stopPropagation();
    e.target.classList.contains("imagenCursos") ? mostrarImagen(e) : " ";
})
