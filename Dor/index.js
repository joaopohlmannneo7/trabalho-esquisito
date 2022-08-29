let Botao = document.getElementById("engarrafamento")
let main = document.getElementById("z")

Botao.addEventListener("click", (e) =>{
 e.preventDefault();
 imagem  = document.createElement("img")
 imagem.src= "images.jpg";
 document.getElementById("z").appendChild(imagem);
//  const data = localStorage.setItem("imagem", imagem)

})