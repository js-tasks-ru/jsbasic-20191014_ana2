/**
 * const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numberDetected = false;
  let numbersArray = [];
  let numberString = '';

  /**
   * @param {string} chr - символ, необходимый для проверки является ли он числом
   * @returns {boolean}
   */
  function isNumber(chr) {
    return (Number(chr) >= 0 && Number(chr) <= 9 && chr != ' ') || (chr === '-' || chr === '.');
  }

  for (let i = 0; i <= str.length; i++) {
    if (isNumber(str[i])) {
      numberString += str[i];
    } else if (numberString) {
      numbersArray.push(numberString);
      numberString = '';
    }
  }

  numbersArray = numbersArray.map(function(number) {
    return Number(number);
  });

  return {
    min: Math.min(...numbersArray),
    max: Math.max(...numbersArray)
  };
}
