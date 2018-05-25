# Cifrado César

## Preámbulo del reto

Está próxima la fecha del cumpleaños de tu enamorado y estoy organizando una
fiesta sorpresa. Para organizar la fiesta he creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pongo mi alarma para levantarte temprano, sin embargo
eso nunca sucede y mi enamorado es quien termina apagando la alarma
y "de casualidad" revisando mis mensajes. Debido a que es algo sorpresa, decido
crear una aplicación que me permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo.

![Sin titulo]
(imagenes/fiestasorpresa.jpg)

## Introducción del mètodo utilizado

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Descripciòn de producto

Los principales usuarios de mi producto son las personas invitadas a la Fiesta Sorpresa de Cumpleaños.

El objetivo rincipal de estos usuarios en relación con el producto es:

Tener una conversaciòn fluida mediante el uso de mensajes de texto cifrados con el objetivo de planear la Fiesta Sorpresa de Cumpleaños.

La creaciòn de este aplicativo resuelve el problema de Evitar que el cumpleañero se entere de la Fiesta Sorpresa que le estàn organizando.

## Consideraciones generales

La lógica de mi proyecto esta implementado completamente en JavaScript (ES6).

El _boilerplate_ que me brindaron contuvo una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```


## Diseño de experiencia de usuario

Para el diseño de la experiencia de usuario, investiguè y apliquè algunas
de las técnicas y herramientas relacionadas al proceso de diseño como
entrevistas y testeos con usuarios o sketching y prototipado.

## Descripciòn del funcionamiento de la aplicaciòn

Insertarmos el mensaje (texto) que queremos cifrar.Hacemos click en el bòton que describe la acciòn que deseamos realizar(cifrar).
Luego obtenemos el mensaje cifrado.

Ademàs de ello podemos insertar un mensaje (texto) a descifrar para luego proceder a visualizar
el resultado del mensaje descifrado haciendo click en el botòn que describe la acciòn a realizar (desifrar).

## Desarrollo de habilidades blandas

En habilidades blandas,  realizé una planificación teniendo en consideración la utilización de herramientas de planificación, como
un To do-Doing-Done, calendario,papelógrafo u otras,creando un plan paso a paso de cómo
quise abarcar el reto. Realicè una estimación realista del tiempo.

## Entrega

Mi proyecto será _entregado_ subiendo mi código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages.

## Programas involucrados en el desarrollo:
Los programas que utilicè para el desarrollo de este proyecto fueron:
1. Editor de texto [Code](https://code.visualstudio.com/).

2. [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   [Git bash](https://git-scm.com/download/win)
  
 ## Pasos importantes realizados previos al desarrollo: 

1. Hice mi propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo que compartieron en forma privada.
2. Clonè el repositorio a mi computadora (copia local).   
4. 📦 Instalè las dependencias de mi proyecto con el comando `npm

## Tips / Pistas usadas en el desarrollo

El video de Michelle que me llevò a través de la fórmula
matemática del Cifrado César y un par de cosas más para resolver este proyecto.

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Utilicè información adicional del video que Michelle explicò :

* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)


## Absolviendo dudas 

Gracias al [sli.do](https://www.sli.do/) pude resolver varias dudas en clase que tenìa durante el desarrollo de mi producto.