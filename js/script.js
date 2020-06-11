let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}


let money,
    income = 'Фриланс',
    addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm ('Есть ли у вас депозит в банке?'),
    mission = 500000,
    period = 10;    
    


let start = function(){    
    do {
        money = prompt('Укажите Ваш месячный доход');
    }while(!isNumber(money))
}
start();


let showTypeOf = function(data){
    console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(", "));


let expenses = [];

let getExpensesMonth = function () {
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {
        expenses[i] =  prompt ('Введите обязательную статью расходов?'); 

        let amount;
        do  {
            amount = prompt('Во сколько это обойдется?');
        } while (!Number(amount));

        sum += +amount;
    }
    
    
    console.log(sum);
    return sum;    
};

let expensesAmount = getExpensesMonth();
console.log('Вашы расходы за месяц: ' +expensesAmount);

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

function getAccumulatedMonth(money, callback){
    return money - expensesAmount;
}
console.log('За месяц вы экономите: ' + getAccumulatedMonth(money, expensesAmount));

function getTargetMonth(mission, accumulatedMonth) {
    return mission / accumulatedMonth;
}
let targetMonth = function(){
    if (getTargetMonth(mission, accumulatedMonth) <0){
        console.log('Цель не будет достигнута');
    }else{
        console.log('Ваш срок выполнения цели: ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');
    }
}
targetMonth();

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

