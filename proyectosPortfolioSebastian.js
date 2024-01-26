const proyectos=
[
    {
        "nombre":"Ahorcado en consola",
        "img":"AhorcadoConsola.png",
        "tecnologias":"PYTHON",
        "link":"https://github.com/stkener/Ahorcado.git"    
    },
    {
        "nombre":"Batalla Naval en consola",
        "img":"batallaNaval.png",
        "tecnologias":"C",
        "link":"https://github.com/stkener/Batalla_Naval.git"
    },
    {
        "nombre":"Ahorcado con Interfaz Grafica",
        "img":"Ahorcadografica.png",
        "tecnologias":"PYTHON",
        "link":"https://github.com/stkener/Ahorcado-con-interfaz-grafica.git"    
    },
    {
        "nombre":"Pagina Estudio Juridico",
        "img":"estudioJuridico.png",
        "tecnologias":"HTML - CSS - JS",
        "link":"https://github.com/stkener/Pagina-EJ-Zuccaro.git"
    },
    {
        "nombre":"Pagina Bazar",
        "img":"alegra.png",
        "tecnologias":"HTML - CSS - JS",
        "link":"https://github.com/stkener/Pagina-Alegra-Deco.git"
    }
];


function mostrarProyectos(proyectos){
    let articulo=" ";
    proyectos.forEach(p => {
        articulo +=`
        <article>
        <p class="letraProyectos">${p.nombre}</p>
        <a href="${p.link}" target="_blank"><img class="imagenArticuloProyectos" src="img/${p.img}" alt="${p.nombre}" title="GITHUB"></a>
        <p class="letraProyectos">${p.tecnologias}</p> 
        <hr class="lineaProyectos">
        </article>        
        `;
    });

    let contenedorArticulos = document.getElementById("contenedorArticulos");

    contenedorArticulos.innerHTML = articulo;
}

document.addEventListener("DOMContentLoaded", mostrarProyectos(proyectos));