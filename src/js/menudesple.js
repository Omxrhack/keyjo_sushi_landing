const nav = document.getElementById("nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");
const a = document.querySelectorAll("a");

    abrir.addEventListener("click", () => {
        nav.setAttribute("class", "navvv " )
        abrir.setAttribute("class","hidden")
        for (let i = 0; i < a.length; i++) {
          const anchor = a[i];
          anchor.addEventListener("click", () => {
           nav.setAttribute("class" ,"nav")

          });
        }

    })
 
    
    

    cerrar.addEventListener("click", ()=> {
        nav.setAttribute("class","nav ");
    })

