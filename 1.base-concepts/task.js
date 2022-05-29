function solveEquation(a, b, c) {
  "use strict";
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d == 0) {
    let x1 = -b / (2 * a);
    arr.push(x1);
  } else if (d > 0) {
    let x1 = 0;
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = 0;
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount = 0;
  if (!Number.isNaN(percent)) {
    if (!Number.isNaN(contribution)) {
      if (!Number.isNaN(amount)) {

        let finalDate = new Date(date);
        let startDate = new Date();
        let periodMonth = finalDate.getMonth() - startDate.getMonth() +
          (12 * (finalDate.getFullYear() - startDate.getFullYear()));

        let p = percent / 1200;  //вычиление процента из формулы
        let coefficient = p + p / (Math.pow(1 + p, periodMonth) - 1);
        let mouthPayment = coefficient * (amount - contribution);
        totalAmount = mouthPayment * periodMonth;

      } else { console.log(`${amount} не является числом`); }
    } else { console.log(`${contribution} не является числом`); }
  } else { console.log(`${percent} не является числом`); }
  totalAmount = totalAmount.toFixed(2);
  console.log(`Общая сумма платежа ${totalAmount}`);
  return totalAmount;
}
