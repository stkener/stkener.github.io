const otrasExperiencias=
[
     {
        "Puesto":"Practica docente - Docente nivel inicial",
        "Empresa":"Jardin de caracter comunitario n°1 - San Vicente de Paul",
        "desdeHasta":"Abr. 2023 – Nov. 2023",
        "funciones":["Preparacion de las clases basados en el diseño curricular",
                     "Dar clases de educacion fisica en sala de 5 años"]    
    },
    
    {
        "Puesto":"Operario de expedición",
        "Empresa":"Demibell SACIFI – Caro Cuore",
        "desdeHasta":"Ene. 2017 – Oct. 2019",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer",
                     "Ayudante de Avios"]    
    },

    {
        "Puesto":"Operario de expedición",
        "Empresa":"Demibell SACIFI – Caro Cuore",
        "desdeHasta":"Ago. 2016 – Nov. 2016",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer"]
    },

    {
        "Puesto":"Operario de expedición",
        "Empresa":"Demibell SACIFI – Caro Cuore",
        "desdeHasta":"Nov. 2015 – Mar. 2016",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer"]
    },
    
    {    
        "Puesto":"Vendedor (corredor)",
        "Empresa":"Distribuidora Pablo SA",
        "desdeHasta":"Abr. 2013 – Ene. 2014",
        "funciones":["Atención al cliente: Recorrer las zonas indicadas, vendiendo los productos de la distribuidora",
                     "Sumar clientes a la cartera",
                     "Realizar los remitos por sistema"]
    },

    {    
        "Puesto":"Redactor Ad – honorem",
        "Empresa":"Revista Yudo-Karate – publicación bimestral",
        "desdeHasta":"2013",
        "funciones":["Redactar artículos para ser publicados"]
    },

    {    
        "Puesto":"Operario de expedición",
        "Empresa":"Cresko SA – Grisino",
        "desdeHasta":"Abr. 2011 - Mar. 2012",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer"]
    },

    {    
        "Puesto":"Vendedor (corredor)",
        "Empresa":"FHERSEL SRL",
        "desdeHasta":"Jun. 2009 – Dic. 2010",
        "funciones":["Atención al cliente: Recorrer las zonas indicadas, vendiendo los productos de la distribuidora",
                     "Sumar clientes a la cartera",
                     "Realizar los remitos por sistema"]
    }
];

function mostrarOtrasExperiencias(otrasExperiencias){
    let articulo=" ";
    otrasExperiencias.forEach(p => {
        articulo +=`
        <article class="articuloTrabajo">
        <p><span class="letraPuestoTrabajo">${p.Puesto}</span><br>
        <span class="letraTrabajoCursiva">${p.Empresa}</span><br>
        <span class="letraTrabajoCursiva">${p.desdeHasta}</span></p>
        <span class="letraTrabajo estiloSubtituloTrabajo">FUNCIONES</span>
        <ul class="letraTrabajo estiloListaTrabajo">
            ${p.funciones.map(x => `<li>${x}</li>`).join('')}
        </ul>
        </article>        
        `;
    });

    
    let contenedorArticulos = document.getElementById("seccionOtrasExperiencias");

    contenedorArticulos.innerHTML = articulo;
}

document.addEventListener("DOMContentLoaded", mostrarOtrasExperiencias(otrasExperiencias));

/*function(){}*/