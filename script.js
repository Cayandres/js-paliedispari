const getWord = prompt('Digita una parola');
function palindromi() {
  const lunghezza = getWord.length;
  const half = Math.floor(lunghezza/2);
  for ( let i = 0; i < half; i++ ) {
      if (getWord[i] !== getWord[lunghezza - 1 - i]) {  
        return document.querySelector('.palindromo').innerHTML = 'Non è palindromo'; //false
      }
  }
  return document.querySelector('.palindromo').innerHTML = 'è palindromo'; //true
}
console.log(palindromi(getWord));







let pariODispari = true;
let outputPoD;

const getEvenOrOdd = prompt('Scegli pari o dispari');
document.querySelector('.even-odd').innerHTML = `Hai scelto ${getEvenOrOdd}`;

const getNumber = parseInt(prompt('Digita un numero da 1 a 5'));
document.querySelector('.your-number').innerHTML = `Il tuo numero è ${getNumber}`;

let generatedNumber;
function randomByComp(){
  generatedNumber = Math.floor(Math.random()*(5-1)+1)+1;
  return document.querySelector('.computer-number').innerHTML = `Il numero del computer è ${generatedNumber}`;
}
console.log(randomByComp(generatedNumber));

let somma = getNumber + generatedNumber;
document.querySelector('.sum').innerHTML = `Il totale fa ${somma}`;


function Evenodd(){
  if (!(somma % 2)) {
    pariODispari = false;
    outputPoD = document.querySelector('.result').innerHTML = 'pari';
  } else {
    outputPoD = document.querySelector('.result').innerHTML = 'dispari';
  }
}
console.log(pariODispari);
if (!(somma % 2)) {
  pariODispari = true;
  outputPoD = document.querySelector('.result').innerHTML = 'pari';
} else {
  outputPoD = document.querySelector('.result').innerHTML = 'dispari';
}

if (getEvenOrOdd === outputPoD) {
  document.querySelector('.winner').innerHTML = 'Hai vinto tu!';
} else {
  document.querySelector('.winner').innerHTML ='Ha vinto il computer!';
}


