const titulos=
[
    {
        "titulo":"Tecnicatura Universitaria en Programacion",
        "institucion":"Uiversidad Nacional de Hurlingham (UNAHUR)",
        "año":"presente"
        
    },
    {
        "titulo":"Profesorado de Educacion Fisica",
        "institucion":"I.S.F.D.y T. Nº 209 'Ceferino Namuncurá'",
        "año":"presente"   
    },
    {
        "titulo":"Técnico Superior en Periodismo deportivo",
        "institucion":"Instituto Superior de Actividades Deportivas (ISAD)",
        "año":"2012"
    }
];


function mostrarEducacion(titulos){
    let articulo=" ";
    titulos.forEach(t => {
        articulo +=`
        <article>
        <p><span class="letraPuestoTrabajo">${t.titulo}</span><br>
        <span class="letraTrabajoCursiva">${t.institucion}</span><br>
        <span class="letraTrabajoCursiva">${t.año}</span>
        </article>        
        `;
    });

    let contenedorArticulos = document.getElementById("contenedorEducacion");

    contenedorArticulos.innerHTML = articulo;
}

document.addEventListener("DOMContentLoaded", mostrarEducacion(titulos));