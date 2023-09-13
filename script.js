/* ESERCIZIO 1*/

function search50(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a + b === 50 || a === 50 || b === 50) {
      return true;
    } else {
      return false;
    }
  } else {
    return "uno dei due valori non è un numero intero";
  }
}

console.log(" \nEsercizio 1:");
console.log(search50(20, 50)); //true
console.log(search50(25, 25)); //true
console.log(search50(35, 15)); //true
console.log(search50(20, 15)); //false
console.log(search50("alessio", 15)); //uno dei due valori non è un numero intero
console.log(search50(20, "alessio")); //uno dei due valori non è un numero intero

/* ESERCIZIO 2*/

function deleteLetter(stringa, position) {
  if (typeof stringa === "string" && typeof position === "number") {
    if (position <= 0 || position > stringa.length) {
      return "posizione non contenuta";
    } else {
      position -= 1;
      const nuovaStringa =
        stringa.substring(0, position) + stringa.substring(position + 1);
      return nuovaStringa;
    }
  } else {
    return "uno dei due valori non è valido";
  }
}

console.log(" \nEsercizio 2:");

console.log(deleteLetter("alessio", 2)); //aessio
console.log(deleteLetter("alessio", 7)); //alessi
console.log(deleteLetter("alessio", 1)); //alessi
console.log(deleteLetter("alessio", 0)); //posizione non contenuta
console.log(deleteLetter("alessio", 8)); //posizione non contenuta
console.log(deleteLetter("alessio", "alessio")); //"uno dei due valori non è valido"
console.log(deleteLetter(2, "alessio")); //"uno dei due valori non è valido"

/* ESERCIZIO 3*/

function checkInterval(n3, n4) {
  if (typeof n3 === "number" && typeof n4 === "number") {
    if (
      ((n3 > 40 && n3 < 60) || (n3 > 70 && n3 < 100)) &&
      ((n4 > 40 && n4 < 60) || (n4 > 70 && n4 < 100))
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "uno dei due valori non è un numero intero";
  }
}

console.log(" \nEsercizio 3:");
console.log(checkInterval(50, 80)); //true
console.log(checkInterval(80, 50)); //true
console.log(checkInterval(50, 15)); //false
console.log(checkInterval(15, 50)); //false
console.log(checkInterval(15, 15)); //false
console.log(checkInterval("alessio", 15)); //uno dei due valori non è un numero intero
console.log(checkInterval(20, "alessio")); //uno dei due valori non è un numero intero

/* ESERCIZIO 4*/

console.log(" \nEsercizio 4:");

function checkCity(cityName) {
  if (typeof cityName === "string" && cityName.length >= 3) {
    if (
      cityName.substring(0, 3) === "Los" ||
      cityName.substring(0, 3) === "New"
    ) {
      return cityName;
    } else {
      return false;
    }
  } else {
    return "il valore non è una stringa oppure il nome della città è troppo corto";
  }
}

console.log(checkCity("Los Angeles")); //Los Angeles
console.log(checkCity("New York")); //New York
console.log(checkCity("New")); //New
console.log(checkCity("Los")); //Los
console.log(checkCity("Lo")); //il valore non è una stringa oppure il nome della città è troppo corto
console.log(checkCity("Roma")); //false
console.log(checkCity(50)); //il valore non è una stringa oppure il nome della città è troppo corto

/* ESERCIZIO 5*/

console.log(" \nEsercizio 5:");

const arrayNumeri = [1, 2, 3, 4, 5];
const arrayNumeriEStringa = [1, 2, "alessio", 4, 5];

function arraySum(lista) {
  let contieneStringa = false;
  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] === "string") {
      contieneStringa = true;
      break; // Puoi interrompere il ciclo una volta trovata una stringa
    }
  }

  if (contieneStringa === false) {
    let sum = 0;
    for (let i = 0; i < lista.length; i++) {
      sum += lista[i];
    }
    return sum;
  } else {
    return "l'array fornito contiene un valore non numerico";
  }
}

console.log(arraySum(arrayNumeri)); //true
console.log(arraySum(arrayNumeriEStringa)); //l'array fornito contiene un valore non numerico

/* ESERCIZIO 6*/

console.log(" \nEsercizio 6:");

const arrayNumeri2 = [2, 2, 4, 4, 5];

function check13(lista) {
  let contieneStringa = false;
  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] === "string") {
      contieneStringa = true;
      break; // Puoi interrompere il ciclo una volta trovata una stringa
    }
  }

  if (contieneStringa === false) {
    if (lista.includes(1) || lista.includes(3)) {
      return false;
    } else {
      return true;
    }
  } else {
    return "l'array fornito contiene un valore non numerico";
  }
}

console.log(check13(arrayNumeri)); //false
console.log(check13(arrayNumeri2)); //true
console.log(check13(arrayNumeriEStringa)); //l'array fornito contiene un valore non numerico

/* ESERCIZIO 7*/

console.log(" \nEsercizio 7:");

function checkAngle(a) {
  if (typeof a === "number") {
    if (a > 0 && a < 90) {
      return "acuto";
    } else if (a > 90 && a < 180) {
      return "ottuso";
    } else if (a === 90) {
      return "retto";
    } else if (a === 180) {
      return "piatto";
    } else {
      return "non è angolo";
    }
  } else {
    return "il valore non è un numero intero";
  }
}

console.log(checkAngle(15)); //acuto
console.log(checkAngle(90)); //retto
console.log(checkAngle(105)); //ottuso
console.log(checkAngle(180)); //piatto
console.log(checkAngle(360)); //non è angolo
console.log(checkAngle("alessio")); //il valore non è un numero intero

/* ESERCIZIO 7*/

console.log(" \nEsercizio 7:");

function acronymGenerator(a) {
  if (typeof a === "string") {
    const lista = a.split(" ");
    let acronym = "";
    for (let i = 0; i < lista.length; i++) {
      acronym += lista[i][0].toUpperCase();
    }
    return acronym;
  } else {
    return "il valore non è una stringa";
  }
}

console.log(acronymGenerator(15)); //il valore non è una stringa
console.log(acronymGenerator("fabbrica italiana auto torino")); //FIAT
console.log(acronymGenerator("new york")); //NY
console.log(acronymGenerator("Mangia una mela alla mattina")); //MUMAM

/* EXTRA - ESERCIZIO 1:*/

console.log(" \n EXTRA - Esercizio 1:");

function carattereFrequente(stringa) {
  // Creiamo un oggetto per tenere traccia delle frequenze dei caratteri
  const frequenze = {};

  // Iteriamo attraverso la stringa per contare le frequenze dei caratteri
  for (let carattere of stringa) {
    if (frequenze[carattere]) {
      frequenze[carattere]++;
    } else {
      frequenze[carattere] = 1;
    }
  }

  let carattereMaggiore = "";
  let conteggioMassimo = 0;

  for (let carattere in frequenze) {
    if (frequenze[carattere] > conteggioMassimo) {
      conteggioMassimo = frequenze[carattere];
      carattereMaggiore = carattere;
    }
  }

  return carattereMaggiore;
}

console.log(
  "il carattere più presente è: ",
  carattereFrequente("abb55555555555cccddddeeeee")
);
console.log(
  "il carattere più presente è: ",
  carattereFrequente("abb5555cccddddeeeee")
);

/* EXTRA - ESERCIZIO 2:*/

console.log(" \n EXTRA - Esercizio 2:");

function generaNumeriAnagramma(parola) {
  if (parola.length <= 1) {
    return [parola];
  }

  const risultato = [];

  for (let i = 0; i < parola.length; i++) {
    const letteraCorrente = parola[i];
    const restante = parola.slice(0, i) + parola.slice(i + 1);
    const permutazioniRestanti = generaNumeriAnagramma(restante);

    for (let j = 0; j < permutazioniRestanti.length; j++) {
      risultato.push(letteraCorrente + permutazioniRestanti[j]);
    }
  }
  return risultato;
}

function sonoAnagrammi(parola1, parola2) {
  parola1 = parola1.toLowerCase();
  parola2 = parola2.toLowerCase();

  const anagrammiParola1 = generaNumeriAnagramma(parola1);
  return anagrammiParola1.includes(parola2);
}

// Esempio di utilizzo
const parola1 = "listen";
const parola2 = "silent";
const parola3 = "alessio";

console.log(sonoAnagrammi(parola1, parola2)); // true
console.log(sonoAnagrammi(parola1, parola3)); // false

/* EXTRA - ESERCIZIO 3:*/

console.log(" \n EXTRA - Esercizio 3:");

function anagrammiCorretti(parola1, lista1) {
  parola1 = parola1.toLowerCase();

  const anagrammiParola1 = generaNumeriAnagramma(parola1);
  const risultato = [];

  for (let parola of anagrammiParola1) {
    parola = parola.toLowerCase();
    if (lista1.includes(parola)) {
      risultato.push(parola);
    }
  }

  return risultato;
}

// Esempio di utilizzo
const parola4 = "top";
const lista1 = ["otp", "pot", "alessio", "pto"];

console.log(anagrammiCorretti(parola4, lista1)); // ["otp","pot"]

/* EXTRA - ESERCIZIO 4:*/

console.log(" \n EXTRA - Esercizio 4:");

function checkPalindroma(parola) {
  let palindromo = "";
  for (let i = parola.length - 1; i >= 0; i--) {
    palindromo += parola[i];
  }

  if (parola === palindromo) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindroma("anna")); // true
console.log(checkPalindroma("alessio")); // false

/* EXTRA - ESERCIZIO 5:*/

console.log(" \n EXTRA - Esercizio 5:");

function numberReverse(numero) {
  const numeroString = numero.toString();
  let numeroString2 = "";

  for (let i = numeroString.length - 1; i >= 0; i--) {
    numeroString2 += numeroString[i];
  }

  return numeroString2;
}

console.log(numberReverse(2350)); // 0532
console.log(numberReverse(56200)); // 00265

/* EXTRA - ESERCIZIO 6:*/

console.log(" \n EXTRA - Esercizio 6:");

function stairs(numero) {
  let risultato = "";

  for (let i = 0; i < numero; i++) {
    risultato += "#";
    console.log(risultato);
  }
}

stairs(5);

/* EXTRA - ESERCIZIO 7:*/

console.log(" \n EXTRA - Esercizio 7:");

function stringReverse(string) {
  let string2 = "";

  for (let i = string.length - 1; i >= 0; i--) {
    string2 += string[i];
  }

  return string2;
}

console.log(stringReverse("alessio")); // oissela
console.log(stringReverse("Ciao")); // oaiC

/* EXTRA - ESERCIZIO 8:*/

console.log(" \n EXTRA - Esercizio 8:");

function splitString(array, lunghezzaSottogruppo) {
  if (lunghezzaSottogruppo <= 0) {
    return "La lunghezza del sottogruppo deve essere maggiore di zero.";
  }

  const sottogruppi = [];
  for (let i = 0; i < array.length; i += lunghezzaSottogruppo) {
    sottogruppi.push(array.slice(i, i + lunghezzaSottogruppo));
  }

  return sottogruppi;
}

console.log(splitString([1, 2, 3, 4], 2));
console.log(splitString([1, 2, 3, 4, 5], 4));

/* EXTRA - ESERCIZIO 9:*/

console.log(" \n EXTRA - Esercizio 9:");

function pyramid(numero) {
  function moltiplicaStringa(stringa, numeroDiVolte) {
    let risultato2 = "";
    for (let i = 0; i < numeroDiVolte; i++) {
      risultato2 += stringa;
    }
    return risultato2;
  }

  let risultato = "";
  let risultato2 = "";

  for (let i = 0; i < numero; i++) {
    let lunghezza = 1 + (numero - 1) * 2;

    if (i === 0) {
      risultato += "#";
      let dif = (lunghezza - risultato.length) / 2;
      risultato2 =
        moltiplicaStringa(" ", dif) + risultato + moltiplicaStringa(" ", dif);
    } else {
      risultato += "##";
      let dif = (lunghezza - risultato.length) / 2;
      risultato2 =
        moltiplicaStringa(" ", dif) + risultato + moltiplicaStringa(" ", dif);
    }

    console.log(risultato2);
  }
}

pyramid(5);

/* EXTRA - ESERCIZIO 10:*/

console.log(" \n EXTRA - Esercizio 10:");

function matrixCreator(numero) {
  let list = [];
  let list2 = [];

  for (let i = 0; i < numero ** 2; i++) {
    list.push(i + 1);
  }
  let lunghezzaSottogruppo = numero;

  for (let j = 0; j < list.length; j += lunghezzaSottogruppo) {
    list2.push(list.slice(j, j + lunghezzaSottogruppo));
  }

  return list2;
}

console.log(matrixCreator(2));
console.log(matrixCreator(3));

console.log(matrixCreator(4));
