window.cipher = {  
  encode: (offset, string) => {
    //Declaro una variable en la cual se almacenaran las letras que conformaran el texto cifrado
    let myEncryption = '';
    //Divido el offset seleccionado por el usuario de acuerdo a la formula del cifrado cesar
    offset = offset % 26;
    //Inserto un bucle para recorrer todo el texto ingresado en el recuadro
    for (let i = 0; i < string.length; i++) {
      //Obteniendo el valor asignado del abecedario Ascii para cada una de las letras del texto ingresado por el usurio
      let asciiAbc = string.charCodeAt(i);
      let ccFormula;
      //Identificando que la letra ingresada se encuentre entre los parámetros establecidos tanto en mayusculas como para minusculas.
      if ((asciiAbc >= 65) && (asciiAbc <= 90)) {
        ccFormula = (asciiAbc - 65 + offset) % 26 + 65;
      } else if ((asciiAbc >= 97) && (asciiAbc <= 122)) {
          ccFormula = (asciiAbc - 97 + offset) % 26 + 97;
        } else {
            ccFormula = asciiAbc;
          }
          myEncryption += String.fromCharCode(ccFormula);
    }
    //Obtengo las letras cifradas
    return myEncryption;
  },
  decode: (offset, string) => {
    //Declaro una variable en la cual se almacenaran las letras que conformaran el texto cifrado
    let myDecryption = '' ;
    //Divido el offset seleccionado por el usuario de acuerdo a la formula del cifrado cesar
    offset = offset % 26;
    //Inserto un bucle para recorrer todo el texto ingresado en el recuadro
    for (let i = 0; i < string.length; i++) {
      //Obteniendo el valor asignado del abecedario Ascii para cada una de las letras del texto ingresado por el usurio
      let asciiAbc = string.charCodeAt(i);
      let ccFormula;
      //Identificando que la letra ingresada se encuentre entre los parámetros establecidos tanto en mayusculas como para minusculas.
      if ((asciiAbc >= 65) && (asciiAbc <= 90)) {
        ccFormula = (asciiAbc - 65 - offset + 26) % 26 + 65;
      } else if ((asciiAbc >= 97) && (asciiAbc <= 122)) {
          ccFormula = (asciiAbc - 97 - offset + 26) % 26 + 97;
        } else {
            ccFormula = asciiAbc;
          }
          myDecryption += String.fromCharCode(ccFormula);
    }
    //Obtengo las letras cifradas
     return myDecryption;
  },
  /*createCipherWithOffset : (offset) => {
    let exit = {
      encode: (string) => {
        return cipher.encode(offset,string);
      },
      decode: (string) => {
        return cipher.decode(offset,string);
      },
  },
  return exit;   
 }, */   
}
      