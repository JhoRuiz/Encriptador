document.getElementById("btn-encriptar").addEventListener("click", function() {
    let texto = document.getElementById("input-texto").value;
    let textoEncriptado = encriptar(texto);
    document.getElementById("output-texto").value = textoEncriptado;

    const placeholder = document.querySelector('.custom-placeholder');
    if (textoEncriptado === '') {
        placeholder.style.display = 'flex';
    } else {
        placeholder.style.display = 'none';
    }
});

document.getElementById("btn-desencriptar").addEventListener("click", function() {
    let texto = document.getElementById("input-texto").value;
    let textoDesencriptado = desencriptar(texto);
    document.getElementById("output-texto").value = textoDesencriptado;
});

document.getElementById("btn-copiar").addEventListener("click", function() {
    let texto = document.getElementById("output-texto");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

