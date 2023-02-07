"use strict";
// let rawTelNumber = '+62 811-8951-181';

let rawTelNumber = prompt('Enter Indonesian number');

let arrayTelNumber = Array.from(rawTelNumber).reduce (
  (prev, curr) => {
    if ( isFinite( parseInt(curr) ) ) {
      prev.push(curr)
    }
    return prev;
  }, []
)

// remove leading z
while ( arrayTelNumber.length > 1 && arrayTelNumber[0] === '0' ) {
  arrayTelNumber = arrayTelNumber.slice(1)
}

if (arrayTelNumber.length <= 10) {
  document.body.innerHTML = `Too short number ${arrayTelNumber}. Refresh page and input correct one!`
  throw new Error(`Too short number ${arrayTelNumber}`);
}

if ( arrayTelNumber.slice(0,2).join('') !== '62' ) {
  arrayTelNumber.unshift(6,2);
}

const telNumber = arrayTelNumber.join('');
console.log(telNumber);

document.body.innerHTML = `<p>Press me: <a href="https://wa.me/${telNumber}">wa.me/${telNumber}</a></p>`;

location.href = `https://wa.me/${telNumber}`
