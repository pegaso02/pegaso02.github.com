
//DOM
/*let links = document.querySelectorAll("a")
links.forEach(function(links){
    console.log(links);
});*/

/*let celdas = document.querySelectorAll("td") //obtuvimos los td o las celdas

celdas.forEach(function(td){  
    td.addEventListener('click',function(){  al hacer click en alguna celda
        console.log("Hla bebe")   imprima Hla bebe
    })
})
*/

//obtener los elementos de la clase .close
let close = document.querySelectorAll(".close");

//Recorrerlos
close.forEach(function (close) {

        //Agregar un evento click a cada uno de ellos
        close.addEventListener("click",function(evento){
            evento.preventDefault(); //previene que se cumpla la accion por defecto, en este caso la x no nos devuelve al index
            
            let content = document.querySelector('.content');

            //Quitarle las clases de animacion que ya tiene
            content.classList.remove("animate__bounce");
            content.classList.remove("animate__animated");

            //Agregar clases para animar su salida
            content.classList.add("animate__bounceOut"); /*animacion salida*/
            content.classList.add("animate__animated");

            setTimeout(function(){ /*ejecuta la accion despues de 6 milisegundos*/
                location.href = "/Boletines";
            },600);

        });
});



/*
let iconos = document.querySelectorAll("i")

iconos.forEach(function(iconos){
    iconos.classList.remove("fa-star")  //propiedad classlist, metodo remove el cual permite quitar clases, con add agrega
})*/