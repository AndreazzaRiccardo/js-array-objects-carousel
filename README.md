### ESERCIZIO:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Partite riprendendo il markup fatto nello slider precedente. Inserite HTML statico nella pagina, modificatelo in modo da inserire il titolo e testi, e verificate che si presenti correttamente.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

### SOLUZIONE:

**Dati:**

1. Creo un'array di oggetti;

**Funzioni:**

1. Creo una funzione per ciclare le immagini in un senso;
2. Creo un'altra funzione per scorrere le immagini nel senso opposto;
3. Creo una terza funzione per selezionare manualmente dal thumbs le immagini da visualizzare;

**Logica:**

1. Tramite un ciclo for each prendo da ogni oggetto dell'array i valori delle chiavi di cui ho bisogno, e tramite template literal, scrivo le stringhe di codice HTML che mi servono per completare il DOM dinamicamente;

2. Aggiungo gli event listener ad entrambe le mie frecce direzionali, assegnando poi a ciascuna la funzione di scorrimento immagini desiderata;

3. Aggiungo un'event listener anche alle singole immagini del thumbs, in modo da poterle selezionare singolarmente tramite l'apposita funzione già creata;

4. Imposto un set interval a cui semplicemente assegno la stessa funzione di scorrimento già precedentemente utilizzata;

5. Creo 3 bottoni:
    -Start: tramite event listener gli imposto un set interval a cui semplicemente assegno la stessa funzione di scorrimento già precedentemente utilizzata;

    -Stop: tramite event listener gli imposto un clear interval;

    -Inversione: tramite event listener gli imposto un set interval a cui semplicemente assegno la funzione di scorrimento opposta a quella già precedentemente utilizzata;