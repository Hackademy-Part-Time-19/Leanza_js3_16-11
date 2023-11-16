/* -Ricreare lo sportello automatico che fa fare prelievi e bonifici e mantiene traccia del conto dopo le operazioni, 
che si comporti in maniera perpertua finchè l’utente preme l’opzione per chiudere.Usare ciclo while.*/

let saldo = 2000


alert("Buongiorno e benvenuto allo sportello bancario Intesa!")
let operazione
while (operazione != 3) {
    operazione = parseInt(prompt("Premi 1 per effettuare un bonifico - Premi 2 per effettuare un prelievo - Premi 3 per uscire"))
    switch (operazione) {
        case 1:
            let bonifico = parseInt(prompt("Immetti il valore del bonifico :"))
            if (bonifico > saldo) {
                alert("Siamo spiacenti, il suo saldo è insufficiente.")
            } else{
                saldo = saldo - bonifico
                alert("Operazione effettuata con successo! Il saldo residuo è: " + saldo)
            }
            break;
        case 2:
            let prelievo = parseInt(prompt("Quanto vuoi prelevare? :"))
            if (prelievo > saldo) {
                alert("Siamo spiacenti, il suo saldo è insufficiente.")
            } else {
                saldo = saldo - prelievo
                alert("Operazione effettuata con successo! Il saldo residuo è: " + saldo)
            }
            break;
        case 3:
            alert("Buona serata.")
            break;
        default: alert("Operazione non consentita")
    }




}