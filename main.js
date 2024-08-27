const textAreaInput = document.querySelector("#input"); 
const textAreaOutput = document.querySelector("#output");
const btnCopiar = document.querySelector("#btn-copy");


function encriptar(textoAEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoAEncriptar = textoAEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoAEncriptar.includes(matrizCodigo[i][0])){
            textoAEncriptar = textoAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
       
    }
    return textoAEncriptar; 
}

function desencriptar(textoEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoEncriptado.includes(matrizCodigo[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
       
    }
    return textoEncriptado; 
}


function handleEncriptar (){
    const textoAEncriptado = encriptar(textAreaInput.value);
    textAreaOutput.value = textoAEncriptado;
    textAreaInput.value = ""
}

function handleDesencriptar (){
    const textoAEncriptado = desencriptar(textAreaInput.value);
    textAreaOutput.value = textoAEncriptado;
    textAreaInput.value = "";
}

function handleCopy() {
    navigator.clipboard.writeText(textAreaOutput.value);
    alert("Texto copiado");
}



