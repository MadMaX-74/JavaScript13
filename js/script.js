let money = +prompt('Укажите Ваш месячный доход', 100000),
    income = 'Фриланс',
    addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm ('Есть ли у вас депозит в банке?'),
    mission = 500000,
    period = 10,
    expenses1 = prompt ('Введите обязательную статью расходов?', 'car'),
    amount1 = +prompt (`Во сколько обойдется ${expenses1} ?`, '3000'),
    expenses2 = prompt ('Введите ещё одну обязательную статью расходов?', 'home'),
    amount2 =  +prompt (`Во сколько обойдется ${expenses2} ?`, '20000'),
    accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth);

let showTypeOf = function(data){
    console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth(amount1, amount2) {
    return amount1 + amount2;
};
console.log('Вашы расходы за месяц: ' +getExpensesMonth(amount1, amount2));

console.log(addExpenses.toLowerCase().split(", "));

function getAccumulatedMonth(money, callback){
    return money - getExpensesMonth(amount1, amount2);
}
console.log('За месяц вы экономите: ' + getAccumulatedMonth(money, getExpensesMonth));

function getTargetMonth(mission, accumulatedMonth) {
    return mission / accumulatedMonth;
}
console.log('Ваш срок выполнения цели: ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

let getStatusIncome = function () {
    if (budgetDay > 1200){
        console.log ('У вас высокий уровень дохода');
    }else if (budgetDay <= 1200 && budgetDay >=600){
        console.log ('У вас средний уровень дохода');
    }else if (budgetDay <0){
        console.log ('Что то пошло не так');
    }else{
        console.log ('К сожалению у вас уровень дохода ниже среднего');
    }
}
getStatusIncome();

