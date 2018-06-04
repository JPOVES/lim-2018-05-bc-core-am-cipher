//Llamo a que la funcion encode se ejecute por medio del click que ejecutara el usuario
document.getElementById("encode").addEventListener("click", () => {  
  const textForEncodeOrDecode = document.getElementById("textForEncodeOrDecode").value;
  const offset = document.getElementById("offset").value;
  const myEncryption = document.getElementById("result");
  myEncryption.innerHTML = cipher.encode(offset, textForEncodeOrDecode);
});
//Llamo a que la funcion decode se ejecute por medio del click que ejecutara el usuario
document.getElementById("decode").addEventListener("click", () => { 
  const textForEncodeOrDecode = document.getElementById("textForEncodeOrDecode").value;    
  const offset = document.getElementById("offset").value;
  const myDecryption = document.getElementById("result");
  myDecryption.innerHTML = cipher.decode(offset, textForEncodeOrDecode);
});



