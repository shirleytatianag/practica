async function getData(){
//Cconsulta a un API publico
 await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
//necesitamos dos callback, el primero para ka conversion de datos
.then(response => response.json()) //funcion flecha: const hola= ()=> {}, un solo parametro no necesita parentesis, cuando voy a devolver  un valor no se ponen llaves y el entiende
.then(data=> console.log(data))
}

getData()
//REPASAR CODIGOOOOOOOOOOOOOOOOOOOOOOOOOOO PAR tener claro bby
//https://firebase.google.com/docs/firestore?hl=es-419


