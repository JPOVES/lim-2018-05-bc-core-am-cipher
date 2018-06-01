window.cipher = {  
    encode: (offset, string) => {
        let cifrado = '';
        offset = offset % 26;
        for(let i=0; i < string.length; i++){
          let abcAscii = string.charCodeAt(i);
          let formulaCc;
          if((abcAscii >=65) && (abcAscii <=90)){
            formulaCc = (abcAscii -65+offset)%26+65;
          } else if((abcAscii >=97) && (abcAscii <=122)){
            formulaCc = (abcAscii -97+offset)%26+97;
          } else{
            formulaCc = abcAscii;
          }
          cifrado += String.fromCharCode(formulaCc);
        }
        return cifrado;
      },
    
      decode: (offset, string) =>{
        let descifrado = '';
        offset = offset % 26;
        for(let i=0; i < string.length; i++){
          let abcAscii = string.charCodeAt(i);
          let formulaCc;
          if((abcAscii >=65) && (abcAscii <=90)){
            formulaCc = (abcAscii -65-offset+26)%26+65;
          } else if((abcAscii >=97) && (abcAscii <=122)){
            formulaCc = (abcAscii -97-offset+26)%26+97;
          }else{
            formulaCc = abcAscii;
          }
          descifrado += String.fromCharCode(formulaCc);
        }
        return descifrado;
      },
      
      /*createCipherWithOffset: (offset, string) =>{
        return encode;
        return decode;
    }*/
  };
      