// Test-Ausgabe zur Überprüfung der Einbindung
//console.log("Die Datei script.js wurde erfolgreich geladen!");

let name = "Sofia";
console.log(name);

function sagHallo(){
    alert("Hallo, Sofia");
}


document.querySelector("button").addEventListener("click", function() { 
    alert("EventListener hat funktioniert!"); 
}); 