function sagHallo(){
    alert("Hallo, Sofia");
}

// FEHLERBEHEBUNG: # für IDs und . für Klassen hinzufügen!
// Außerdem nutzen wir direkt die <ul> Liste für die Ausgabe
const eingabeFeld = document.querySelector("#todo-input input"); // Sucht das input im Formular
const ausgabeListe = document.querySelector("#todo-list");       // Sucht die <ul> Liste
const meinFormular = document.querySelector("#todo-input");      // Wir überwachen das ganze Formular

// TIPP: Lausche lieber auf das Formular-Senden ("submit") statt nur auf den Button-Klick.
// Dadurch funktioniert auch die "Enter"-Taste und das "required"-Attribut klappt!
meinFormular.addEventListener("submit", function(event) {
    
    event.preventDefault(); // Verhindert, dass die Seite neu lädt
    
    console.log("Formular abgeschickt, Magie beginnt!"); 
    
    const textAusEingabe = eingabeFeld.value;
    
    // 1. Ein neues Listen-Element (<li>) erstellen
    const neuesListenElement = document.createElement("li");
    
    // 2. Den Text der Aufgabe in das neue Element schreiben
    neuesListenElement.textContent = textAusEingabe;
    
    // 3. Das neue Element in unsere <ul> Liste einfügen
    ausgabeListe.appendChild(neuesListenElement);
    
    // 4. Das Eingabefeld wieder leeren, damit man die nächste Aufgabe eintippen kann
    eingabeFeld.value = "";
});
