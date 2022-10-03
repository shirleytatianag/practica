const polls= {
    p1: {
        question: '¿Está contento con el inicio del semestre?',
        answers: {
            a1: {
                answer: 'SI',
                qty:0
            },
            a2: {
                answer: 'NO',
                qty:0
            },
            a3: {
                answer: 'NO SÉ TODAVÍA',
                qty:0
            }
        }
    }
}

window.localStorage.setItem('polls',JSON.stringify(polls))

const myPolls= JSON.parse(window.localStorage.getItem('polls'))

const title = document.querySelector ('#title')
title.innerHTML= myPolls.p1.question


const p1answers = myPolls.p1.answers

//SEGUN SHIRLEY 
// rb=''
// for (const answer in  p1answers) {
              
//         rb+=`
//         <label><input type="radio" name=answerselected value=${((p1answers[answer].answer))}
//         > ${((p1answers[answer].answer))}</label><br>
//         `   
   
// }
// const answers = document.querySelector ('#answers')
// answers.innerHTML= rb


//SEGUN EL TEACHER
const divAnswers= document.querySelector('#answers')
let radio;
radio='';
for (const answer in p1answers) {
    radio+= `
    <input  type="radio" id="${answer}" name="radios"/> 
    <label for="${answer}"> ${p1answers[answer].answer}</label><br>
    `
}

divAnswers.innerHTML= radio
 
// DELEGACION DE EVENTOS, le manda eventos al papa y los hijos escuchan tambien
//evento es un ovjeto que trae mucha info
//target dice quien fue el que disparo el evento especificamente


divAnswers.addEventListener('click', function(e){
 
    

    var opc= document.getElementsByName("radios");
    for(var i=0; i<opc.length; i++) {
    opc[i].disabled = true;
    }

    //const revPolls= JSON.parse(window.localStorage.getItem('polls'))
    // if(revPolls.p1.answers.answer.qty==0)){
    //     if(e.target.type== 'radio'){
    //         p1answers[e.target.id].qty++
    //         console.log(p1answers[e.target.id])
            
    //         }
    // }

    polls.p1.answers= p1answers
    localStorage.setItem('polls', JSON.stringify(polls))
    
})

//bloquear para que el usuario vote solo una vez.