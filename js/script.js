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
    percentDeposit: 0,
    moneyDeposit: 0,    
    asking: function(){
        let itemIncome;
        let cashIncome;

        if(confirm('Есть ли у вас дополнительный заработок?')) {

            itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'фриланс');
            while(!itemIncome.trim() || isNumber(itemIncome)) {
                 itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'фриланс');
            }
            while(!isNumber(cashIncome)) {
                 cashIncome = prompt('Сколько вы зарабатываете на этом?', 10000);
            }
            

            appData.income[itemIncome] = cashIncome;

        }

        let expens,
            amount,
            addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период ', 'жкх бензин продукты');
                while(!addExpenses.trim() || isNumber(addExpenses)){
                    addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период ', 'жкх бензин продукты');
                }
            
            function toUpper(str) {
                    return str
                        .toLowerCase()
                        .split(' ')
                        .map(function(word) {
                            return word[0].toUpperCase() + word.substr(1);
                        })
                        .join(', ');
            }
            console.log(toUpper(addExpenses));
            console.log(
                addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(', ')
                );

            
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
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = prompt('Какой годовой процент?', 5);

            while(!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Какой годовой процент?', 5);
            }

            appData.moneyDeposit = prompt('Какая сумма заложена?', 500000);

            while(!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 500000);
            }
        }
    },
    calcSavedMoney: function () {  
        return appData.budgetMonth * appData.period;
    } 
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();


for (let key in appData) {
    console.log('Наша программа включает в себя данные: свойство ' + key + ' и значение ' + appData[key]);
};

