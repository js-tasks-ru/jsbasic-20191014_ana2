/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = '';

  data.forEach(function(obj) {
    if (obj.age <= age) {
      if (result) {
        result += '\n';
      }
      result += obj.name + ', ' + obj.balance;
    }
  });

  return result;
};
