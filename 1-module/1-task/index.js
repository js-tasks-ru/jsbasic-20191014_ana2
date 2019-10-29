/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = 1;
  for (i = 0; i < n; i += 1) {
    result *= m;
  }
  return result;
}

let number = prompt('Please insert number');
let exponent = prompt('Please insert exponent for number');

alert(pow(number, exponent));
