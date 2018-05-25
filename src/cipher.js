/*window.cipher = function(){*/

var mensajeingresado= " "
for (var mensajeingresado = 0; mensajeingresado < str.length; mensajeingresado ++)
 {
    var c = str[mensajeingresado];
    if (c.match(/[a-z]/mensajeingresado))
     {
        var code = str.charCodeAt(mensajeingresado);
        if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
                else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                }
                output += c;
                }            