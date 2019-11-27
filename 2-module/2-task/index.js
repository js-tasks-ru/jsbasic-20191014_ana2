/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let i = 0;
  for (const prop in obj) {
    i++;
  }
  if (i === 0) {
    return true;
  }
  return false;
}
