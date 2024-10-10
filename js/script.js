document.getElementById('year').textContent = new Date().getFullYear();
//document-Es un objeto que representa el documento HTML cargado en el navegador. Permite interactuar con el contenido de la página web mediante JavaScript.
//getElementById('year')-Este método busca un elemento en el documento HTML que tenga un atributo id con el valor 'year'. este es el <span id="year"></span>, que está destinado a mostrar el año actual.
//textContent-Es una propiedad que establece o devuelve el contenido textual de un nodo y sus nodos hijos. Aquí se está utilizando para establecer el contenido del elemento encontrado anteriormente (el <span>).
//new Date()-Crea un nuevo objeto de fecha que representa el momento actual (la fecha y hora en que se ejecuta el código).
//getFullYear()-Es un método del objeto Date que devuelve el año completo (en formato de cuatro dígitos) de la fecha actual.