const h1 = document.querySelector(`h1`);
const form = document.querySelector(`#form`);
const input1 = document.querySelector(`#calculo`);
const input2 = document.querySelector(`#calculo2`);
const btn = document.querySelector(`#btncalcular`);
const pResult = document.querySelector(`#result`);

// btn.addEventListener(`click`, btnOnClick)


// function btnOnClick(){
//  const sumainputs = input1.value + input2.value;
//  pResult.innerText = "resultado: " + sumainputs;
// }  

// form.addEventListener(`submit`, sumarinputs);

// function sumarinputs(event) {
//     event.preventDefault();
//     const sumadeintputs = input1.value + input2.value;
//     pResult.innerText = "El resultado es: " + sumadeintputs;
     
// }

const sumarinputs = (event) =>{
    
    const sumadeintputs = input1.value + input2.value;
    pResult.innerText =  "el resultado es: " + sumadeintputs;
}

btn.addEventListener(`click`, sumarinputs);