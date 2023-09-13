//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let myVar1 = 4
let myVar2 = 5

if (myVar1 > myVar2) {
  console.log("Il numero più grande è: ",myVar1)
} else if (myVar1 === myVar2) {
  console.log(myVar1, " e ", myVar2, " hanno lo stesso valore")
} else {
  console.log("Il numero più grande è: ",myVar2)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.ewee

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let myVar = 20

if (myVar < 5) {
  console.log("Tiny")
} else if (myVar < 10) {
  console.log("Small")
} else if (myVar < 15) {
  console.log("Medium")
} else if (myVar < 20) {
  console.log("Large")
} else {
  console.log("Huge")
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 10; i >= 0; i--) {
  if ((i === 3) || (i === 8)) {
      continue
  }
  console.log(i)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0 ) {
      console.log(i,": è pari")
  } else {
      console.log(i,": è dispari")
  }
}
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if ((myVar1 === 8) || (myVar2 === 8)) {
  console.log("Uno dei 2 numeri è pari a 8");
  if (((myVar1-myVar2) === 8) || ((myVar2-myVar1) === 8)) {
      console.log("La sottrazione dei 2 numeri è pari a 8");
      if ((myVar1+myVar2) === 8) {
          console.log("L'addizione dei 2 numeri è pari a 8");
      }
  }
} else {
  console.log("Uno dei 2 numeri non è pari a 8 e nemmeno sottrazione/addizione sono pari a 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50
let deliveryFee = 10

if (totalShoppingCart > 50) {
    console.log("Hai diritto alla spedizione gratuita")
} else {
    console.log("Al tuo ordine verrà applicato un costo di spedizione pari a € ",deliveryFee)
    totalShoppingCart += deliveryFee
}

console.log("Il tuo totale del carrello è €", totalShoppingCart)

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let discountPerc = 0.20

totalShoppingCart *= (1-discountPerc)

if (totalShoppingCart > 50) {
    console.log("Hai diritto alla spedizione gratuita")
} else {
    console.log("Al tuo ordine verrà applicato un costo di spedizione pari a € ",deliveryFee)
    totalShoppingCart += deliveryFee
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

isMale = true

let gender = (isMale = true) ? "male" : "female"

console.log("Il genere è :", gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(i,": FizzBuzz")
  } else if ((i % 3 === 0)) {
      console.log(i,": Fizz")
  } else if ((i % 5 === 0)) {
      console.log(i,": Buzz")
  } else {
      console.log(i)
  }
}