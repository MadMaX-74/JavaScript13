let money = prompt('Укажите Ваш месячный доход'),
    income = 'Фриланс',
    addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm ('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 10,
    expenses1 = prompt ('Введите обязательную статью расходов?'),
    amount1 = prompt (`Во сколько обойдется ${expenses1} ?`),
    expenses2 = prompt ('Введите ещё одну обязательную статью расходов?'),
    amount2 =  prompt (`Во сколько обойдется ${expenses2} ?`);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log (addExpenses.length);

console.log (`Период равен ${period} месяцев и Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase().split(", "));

let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ' + budgetMonth); 

let budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay > 1200){
    console.log ('У вас высокий уровень дохода');
}else if (budgetDay <= 1200 && budgetDay >=600){
    console.log ('У вас средний уровень дохода');
}else if (budgetDay <0){
    console.log ('Что то пошло не так');
}else{
    console.log ('К сожалению у вас уровень дохода ниже среднего1');
}