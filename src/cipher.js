function encode() {
    /*uso let porque:
     uso querySelector porque
    JavaScript String -- toLocalUpperCase- convierte una cadena en letras mayúsculas 
       */
    let decryptedtext = document.querySelector('#decryptedtext').value.toLocaleUpperCase();
    let encryptedtext = document.querySelector('#encryptedtext');
    let offset = document.querySelector('#offset');
    let cipherArray = new Array();
    [...decryptedtext].forEach(char => {
        //console.log(char.charCodeAt())
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            //console.log(charNumber)
            cipherChar = (charNumber + parseInt(offset.value)) % 26;
            //console.log(cipherChar)
            cipherArray.push(cipherChar + 65);
        }
    })
    /*Uso String.fromCharcode*/
    document.getElementById("result").value = String.fromCharCode(...cipherArray);
    //console.log(String.fromCharCode(...cipherArray))
}

function decode() {
    // cambiè let x VAR Y # va a cambiar el texto que luego serà mostrado en el contenido del recuadro //
    let decryptedtext = document.querySelector('#decryptedtext');
    let encryptedtext = document.querySelector('#encryptedtext').value.toLocaleUpperCase();
    let offset = document.querySelector('#offset');
    let cipherArray = new Array();
    //let cipherArray = parseInt(space);//
    [...encryptedtext].forEach(char => {
        //console.log(char.charCodeAt())
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            //console.log(charNumber)
            cipherChar = (charNumber - parseInt(offset.value));
            //console.log(cipherChar)
            if (cipherChar <= 26 || cipherChar > 0) cipherChar = cipherChar % 26
            cipherChar = cipherChar % 26
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("result").value = String.fromCharCode(...cipherArray);
    //console.log(String.fromCharCode(...cipherArray))
}