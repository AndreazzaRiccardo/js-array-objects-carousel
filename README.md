### ESERCIZIO:
**Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.**

### DATI:
1. Creiamo un _array_ contenente tutte le immagini che dovranno scorrere all'interno del carosello;

### SVOLGIMENTO:

1. Inseriamo nel _Dom_ in maniera dinamica le immagini del nostro array;
2. Rendiamo visibile solo la prima immagine assegnandole una classe specifica;
3. Creiamo due eventi, uno per ogni freccia, in modo che presupponendo di partire sempre dalla prima immagine (ovvero quello con indice 0):
    SE ("Valore dell'indice" < "della lunghezza del mio array" -1 ) {
        rimuovi la classe di visibilita'a "valore dell'indice";
        icrementa l'indice di 1;
        assegna la classe di visibilità al mio nuovo "valore di indice";
    }

