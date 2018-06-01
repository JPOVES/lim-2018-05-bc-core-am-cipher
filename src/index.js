document.getElementById("encode").addEventListener("click", () =>{  
const textForEncodeOrDecode = document.getElementById("textForEncodeOrDecode").value;
const offset = document.getElementById("offset").value;
const cifrado = document.getElementById("result");
cifrado.innerHTML = cipher.encode(offset, textForEncodeOrDecode);
});
document.getElementById("decode").addEventListener("click", () =>{ 
const textForEncodeOrDecode = document.getElementById("textForEncodeOrDecode").value;    
const offset = document.getElementById("offset").value;
const descifrado = document.getElementById("result");
descifrado.innerHTML = cipher.decode(offset, textForEncodeOrDecode);
});



