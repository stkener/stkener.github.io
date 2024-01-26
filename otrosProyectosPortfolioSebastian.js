const otrosProyectos=
[
   /* {
        "nombre":"",
        "img":"",
        "descripcion":"",
        "link":""    
    },*/
    
    {    
        "nombre":"Participacion en revista",
        "img":"logoYudoKarate.png",
        "descripcion":"Revista deportiva Yudo - Karate",
        "link":"https://drive.google.com/file/d/10rl2roXWU2opFtSnN8fVmEyxorN8sVlg/view?usp=drive_link"   
    }
];


function mostrarProyectos(otrosProyectos){
    let articulo=" ";
    otrosProyectos.forEach(p => {
        articulo +=`
        <article>
        <p class="letraProyectos">${p.nombre}</p>
        <a href="${p.link}" target="_blank"><img class="imagenOtrosProyectos" src="img/${p.img}" alt="${p.nombre}"></a>
        <p class="letraProyectos">${p.descripcion}</p> 
        <hr class="lineaOtrosProyectos">
        </article>        
        `;
    });

    let contenedorArticulos = document.getElementById("seccionOtrosProyectos");

    contenedorArticulos.innerHTML = articulo;
}

document.addEventListener("DOMContentLoaded", mostrarProyectos(otrosProyectos));