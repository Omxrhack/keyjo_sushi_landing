const productos = document.querySelectorAll(".productos ");
const producto = document.querySelectorAll("#producto");
const noproduct = document.querySelector("#lo-sentimos");
const section = document.querySelector("section");
const input = document.querySelector("#buscador");
input.addEventListener("input", (e) => {
  const textoBuscado = e.target.value.toLowerCase();
  
  productos.forEach((producto ) => {
    const textoProducto = producto.querySelector("h5").textContent.toLowerCase();
    const textoNormalizado = textoProducto.normalize("NFD");
    //console.log(textoNormalizado);

    if (textoNormalizado.includes(textoBuscado)) {
      producto.classList.remove("hidden");
      noproduct.classList.add("hidden");
      section.classList.remove("grid");
    } else {
      producto.classList.add("hidden");
      section.classList.add("grid");
    }
    
    
    
  },
  noproduct.classList.remove("hidden"),);
});