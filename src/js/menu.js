const nav = document.querySelector("nav");

const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

    abrir.addEventListener("click", () => {
        nav.setAttribute("id", "navvv");
       console.log("abrir");
    })
    cerrar.addEventListener("click", ()=> {
        nav.setAttribute("id","nav");
        console.log("cerrar");   
    })
