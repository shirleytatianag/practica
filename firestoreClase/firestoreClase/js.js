
// Import the functions you need from the SDKs you need
// destructuración : descomponiendo un objeto, si esta dentro de un modulo puedo traerme la propiedad solametne (con el nombre exacto de la propiedad)
//las llaves quieren decir que se estám trayendo un metodo/objeto/ propiedad solametne
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDDBEDVrs6Ze8RFFQ8b5l6PEypR0SA4iKY",
authDomain: "shirley-2002e.firebaseapp.com",
projectId: "shirley-2002e",
storageBucket: "shirley-2002e.appspot.com",
messagingSenderId: "451136698346",
appId: "1:451136698346:web:80d24c7e6bc1660cf56493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //configuracion del proyecto
// trabajando de manera modular
//importar firestore
import {
    getFirestore, //acceder al servicio de base de datos
    collection, // manipular colecciones metodo q va a pedir dos parametros, 1. nombre base de datos, 2. nombre coleccion
    addDoc, //metodo para añadir datos
    getDocs, //metodos para traer documentos de una coleccion, trae un array
    updateDoc,
    setDoc, //cambia la estructura del documento, envia info
    doc,
    deleteDoc,
    query,
    where,
    getDoc //trae un solo dato
    
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js"

//comunicar mi base de datos
const db= getFirestore(app);


const UserCollection= collection(db,'users') //invoco la coleccion, sino existe la crea automaticamente
//no lista colecciones cuando estan vacías 
//cuando se crea un documento dentro de una coleccion la bd un objeto de referenca useRef que devuelve una informacion y por eso se crea una constante


// const useRef= await addDoc(UserCollection,{ //dos parametros, 1. a qué coleccion queremos guardar, 2. objeto json con la informacion que quiero guardar
//     name: "Juana",
//     lastname: "Álvarez",
//     age:30
// })

// console.log(useRef.id)


//traer de la app el listado de usuarios que tenga almacenado
const users=[]
 const querySnapshot= await getDocs(UserCollection) //devuelve un objeto snapshot, es decir como una fotocopia o ss de de informacion , un contendeor, en el q está la info como tal
 querySnapshot.forEach(user => {
    /* console.log(`
        ${user.id}: ${JSON.stringify(user.data())}
     `) */ //metodo data, return de la info que està
     users.push({
         id: user.id,
         ...user.data() //desestructuracion. devuelve los las propiedades del objeto
     })
 });

//  console.log(users)

 const myDocs= doc(UserCollection,"1EcnzEV3GSuAFFsxaxTl")

//  updateDoc(myDocs,{
//      status:"te amo"
//  } ) //1 A qe¿ue documento vamos a manipular lo escribimos en el metodo doc, que a su vez va a tener dos parametros,( 1. a que doc/coleccion queremos actualizar, 2. identificador del documento), y el segundo parametro  el obejto JSON que quiero actualizar
 
// setDoc(myDocs,{
//     status:"te amo"
// } )

//deleteDoc(myDocs) el documento que queremos borrar

//hacer consultas que incluyen filtros.
//  const consult= query(UserCollection,
//         where ('age','==', 3), //1. nombre del campo que quiero filtrar; 2. el simbolo con lo que quiero comparar (<>=!); 3. valor con lo que quiero comparar
//         where ('name', '==', 'Mariano')
//     ) //1. Coleccion a la que quiero consultar, 2. los where y el codigo para buscar

const consult = query(UserCollection,
        where('age', 'in',[25,30] ) //tipo or
    )
const filteredUsers= await getDocs(consult) //me trae lo que tengo en la variable que es contruido


// filteredUsers.forEach(user => {
//     console.log('Usuario:', user.id)
// })

//cómo puedo hacer relaciones entre colecciones, simular de uno a muchos

const PartyCollection= collection(db, 'party')

// const partyRef= await addDoc(PartyCollection,{ 
//     name: "Coldplay",
//     assistants: ['4qfIEJR7QvkXzBMbvnTZ','T8gfLQ4wy09L8LAg26f2']
    
// })

const party= await getDoc(
    doc(PartyCollection, 'lHsFkHwhgNKmtWaZAtvg')
)

const {assistants}= party.data().assistants //desestructurizando
getUser
// assistants.ForEach(async function (id) => {

//     const user =  getDoc(UserCollection,id )
//     console.log('Asistemte:', user.data)
// })

async function getUser (){
    for (const id of assistants){
        const user= await getDocs(UserCollection, '4qfIEJR7QvkXzBMbvnTZ')
        console.log('Asistente:', user.data)
    }
}

