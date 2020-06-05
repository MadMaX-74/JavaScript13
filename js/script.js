let money = 70000,
    income = 'Фриланс',
    addExpenses = 'ЖКХ, продукты, бензин',
    deposit = true,
    mission = 1000000,
    period = 10;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log (addExpenses.length);

console.log (`Период равен ${period} месяцев и Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase().split(", "));


let budgetDay = money / 30;
console.log(budgetDay);

