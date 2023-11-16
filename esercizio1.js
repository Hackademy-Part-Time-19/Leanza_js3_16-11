/*
1. Utilizzare il ciclo for per stampare tutti i nomi della lista
2. Utilizzare il ciclo for annidato in un altro ciclo for per stampare i nomi carattere per carattere. 
Il risultato della stampa deve essere lo stesso dell’esercizio precedente.*/ 





let array = ["Franco", "Gennaro", "Valerio", "Giulia", "Eugenio"]


for (let i = 0; i < array.length; i++) {
    let elementoArray = array[i]
    console.log(elementoArray)

    for (let j = 0; j < elementoArray.length; j++) {
        let carattere = elementoArray[j]
        console.log(carattere)
    }

}





