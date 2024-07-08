/*-----------Funcion encriptar---------------*/
function encriptar() {
  let texto = document.getElementById("textArea").value.toLowerCase();
  element = document.getElementById("imagen").style.display = "none";
  element = document.getElementById("h3-encontrado").style.display = "none";

  texArea = texto.replace(/e/gim, "enter");
  texArea = texArea.replace(/o/gim, "ober");
  texArea = texArea.replace(/i/gim, "imes");
  texArea = texArea.replace(/a/gim, "ai");
  texArea = texArea.replace(/u/gim, "ufat");

  document.getElementById("textoDesencriptado").innerHTML = texArea;
  document.getElementById("boton-copiar").style.display = "show";
  document.getElementById("boton-copiar").style.display = "inherit";
  document.getElementById("h3-encontrado").style.display = "none";
}
/*-----------Funcion Desencriptar---------------*/
function desencriptar() {
  let texto = document.getElementById("textArea").value.toLowerCase();
  element = document.getElementById("imagen").style.display = "none";
  element = document.getElementById("h3-encontrado").style.display = "none";

  texArea = texto.replace(/enter/gim, "e");
  texArea = texArea.replace(/ober/gim, "o");
  texArea = texArea.replace(/imes/gim, "i");
  texArea = texArea.replace(/ai/gim, "a");
  texArea = texArea.replace(/ufat/gim, "u");

  document.getElementById("textoDesencriptado").innerHTML = texArea;
  document.getElementById("boton-copiar").style.display = "show";
  document.getElementById("boton-copiar").style.display = "inherit";
}

/*-----------Funcion Copiar---------------*/
function copy() {
  let contenido = document.querySelector("#textoDesencriptado");
  contenido.select();
  navigator.clipboard
    .writeText(contenido.value)
    .then(() => {
      alert("Texto copiado");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

/*-----------Funcion borrar ---------------*/

function borrarTexto() {
  let borrar = (document.getElementById(
    "textArea",
    "textoDesencriptado"
  ).value = "");
  borrar = document.getElementById("textoDesencriptado").value = "";
  borrar = document.getElementById("h3-encontrado").value = "show";
  document.location.reload();
}
