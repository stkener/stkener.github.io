/*CURSOS*/
const cursos=
[
    {
        "nombre":"Desarrollo Web",
        "img":"desarrolloWeb.jpg",
        "año":"2020"
        
    },
    {
        "nombre":"Des. Seg. Informatica",
        "img":"nDesSegInf.jpg",
        "año":"2022"   
    },
    {
        "nombre":"Introduccion al ciberdelito",
        "img":"introCiberDel.jpg",
        "año":"2022"
    }
];


/*############################################################################################*/
/*VISUALIZACION CURSOS*/ 
function mostrarCursos(cursos){
    let articulo=" ";
    cursos.forEach(p => {
        articulo +=`
        <article>
        <p class="letraProyectos">${p.nombre} - ${p.año}</p>
        <img class="imagenCursos" src="img/${p.img}" title="${p.nombre}">
        <hr class="lineaCursos">
        </article>        
        `;
        
        /*
        
        <a href="#contenedorCursoUno" src="#imagen1">*/
                        
    });

    let contenedorArticulos = document.getElementById("contenedorArtCursos");

    contenedorArticulos.innerHTML = articulo;
}

document.addEventListener("DOMContentLoaded", mostrarCursos(cursos));


/*############################################################################################*/
/*FUNCIONAMIENTO GALERIA CURSOS*/

const contenedorArticulosCursos = document.getElementById("contenedorArtCursos") 
const contenedorGaleriaCursos = document.getElementById("galeria")
const imagenGaleriaCursos = document.getElementById("imgGal")


contenedorArticulosCursos.addEventListener("click", (e)=>{ 
    e.stopPropagation();
    e.target.classList.contains("imagenCursos") ? mostrarImagen(e) : " ";
})

contenedorGaleriaCursos.addEventListener("click", (e)=>{
    e.target.classList.contains("botonGaleria") ? cerrar() : " ";
    e.target.classList.contains("contenedorGaleria") ? cerrar() : " ";
})

const mostrarImagen = (e) =>{
    imagenGaleriaCursos.src=e.target.src
    contenedorGaleriaCursos.classList.toggle("ocultar")
}

const cerrar = () =>{
    contenedorGaleriaCursos.classList.toggle("ocultar")    
}