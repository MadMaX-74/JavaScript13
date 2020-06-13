'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money,
    start = function(){    
        do {
            money = prompt('Укажите Ваш месячный доход');
        }while(!isNumber(money))
};
start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,    
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 10,    
    asking: function(){
        let expens,
            amount,
            addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'жкх, бензин, продукты');
            appData.addExpenses = addExpenses.toLowerCase().split(",");
            appData.deposit = confirm ('Есть ли у вас депозит в банке?');

            for (let i = 0; i < 2; i++) {            
                    expens = prompt ('Введите обязательную статью расходов?', 'жкх');             
                    amount = prompt('Во сколько это обойдется?');
                    while(!isNumber(amount)) {
                        amount = prompt('Во сколько это обойдется?');
                }
                appData.expenses[expens] = +amount;
            }    
    },          
    getExpensesMonth : function(){        
        let sum = 0;
        
        for (let key in appData.expenses){
            sum += appData.expenses[key]
            appData.expensesMonth = sum;
        }         
        return sum;
        
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor((appData.budget - appData.expensesMonth)/30);
    },
    getAccumulatedMonth: function () {
        return money - appData.getExpensesMonth();
    },
    getTargetMonth: function () { 
        let targetMonth = Math.ceil(appData.mission/appData.budgetMonth);
        
        if (targetMonth <= 0) {
            return console.log( 'Цель не будет достигнута.' ) ;
        } else {
            return console.log( 'Цель будет достигнута за ' + targetMonth + ' месяцев.' );
        }
    },
    
    getStatusIncome : function () {
        if (appData.budgetDay > 1200){
            console.log ('У вас высокий уровень дохода');
        }else if (appData.budgetDay <= 1200 && appData.budgetDay >=600){
            console.log ('У вас средний уровень дохода');
        }else if (appData.budgetDay <0){
            console.log ('Что то пошло не так');
        }else{
            console.log ('К сожалению у вас уровень дохода ниже среднего');
        }
    } 
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();


for (let key in appData) {
    console.log('Наша программа включает в себя данные: свойство ' + key + ' и значение ' + appData[key]);
};

