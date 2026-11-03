
let name = "Sofia";
console.log(name);

function sagHallo(){
    alert("Hallo, Sofia");
}


const eingabeFeld = document.querySelector("input");
const ausgabeDiv = document.querySelector("div");
const meinButton = document.querySelector("button");


meinButton.addEventListener("click", function(event) {
    
    event.preventDefault(); 
    
    
    console.log("Кнопку натиснуто, магія починається!"); 
    
    
    const textAusEingabe = eingabeFeld.value;
    
    
    ausgabeDiv.textContent = textAusEingabe;
});
