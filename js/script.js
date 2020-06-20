'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let   start = document.getElementById('start'), //кнопка расчитать
        incomeAdd = document.getElementsByTagName('button')[0], //добавить поля дохода
        expensesAdd = document.getElementsByTagName('button')[1], //добавить поля расходов
        depositCheck = document.querySelector('#deposit-check'), // чекбокс депозита
        additionalIncomeItem = document.querySelectorAll('.additional_income-item'), //поля возвожных доходов              
        budgetMonth = document.getElementsByClassName('budget_month-value')[0], //поле дохода за месяц
        budgetDay = document.getElementsByClassName('budget_day-value')[0], //поле дневного бюджета
        expensesMonth = document.getElementsByClassName('expenses_month-value')[0],//поле расходов за месяц
        additionalIncome = document.getElementsByClassName('additional_income-value')[0], // возможные доходы
        additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0], //возможные расходы
        incomePeriod = document.getElementsByClassName('income_period-value')[0], //накопления за период
        targetMonth = document.getElementsByClassName('target_month-value')[0], // срок достижения цели
        salaryAmount = document.querySelector('.salary-amount'), //месячный доход
        incomeTitle = document.querySelector('input.income-title'),//наименование доп дохода
        incomeItems = document.querySelectorAll('.income-items'), //сумма доп доходов      
        expensesTitle = document.querySelector('input.expenses-title'), //наименование обязат расходов
        expensesItems = document.querySelectorAll('.expenses-items'), //сумма обязательных расходов
        additionalEpensesItem = document.querySelector('.additional_expenses-item'), // возможные расходы
        periodSelect = document.querySelector('.period-select'), // тумблер
        targetAmount = document.querySelector('.target-amount'),//цель
        periodAmount = document.querySelector('.period-amount'),//текст под тумблером 
        incomeItem = document.querySelectorAll('.income-items'); //доп доход


 
start.setAttribute("disabled", "disabled");// Расчитать отключена

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,    
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 10,
    percentDeposit: 0,
    moneyDeposit: 0, 
    start: function(){
        if(salaryAmount.value === ''){
            alert ('Ошибка поля "Месячный доход" должно быть заполнено!');
            return;
        }       

        appData.budget = +salaryAmount.value;

        appData.getExpenses();    
        appData.getIncome();    
        appData.getExpensesMonth();  
        appData.getAddExpenses();
        appData.getAddIncome();        
        appData.getBudget();
        appData.showResult();
    },
    //тут проверяем на атрибут для кнопки Расчитать
    check: function() {
        if(salaryAmount.value !== '') {
            start.removeAttribute("disabled");
        } else {
            start.setAttribute("disabled", "disabled");
        }
    },
    getPeriod: function() { 
        periodAmount.textContent = +periodSelect.value;
    },
    changeIncomePeriodValue: function() {

        incomePeriodValue.value = appData.calcPeriod();
    },
    showResult: function(){
        budgetMonth.value = appData.budgetMonth;
        budgetDay.value = appData.budgetDay;
        expensesMonth.value = appData.expensesMonth;
        additionalExpenses.value = appData.addExpenses.join(', ');
        additionalIncome.value = appData.addIncome.join(', ');
        targetMonth.value = appData.getTargetMonth();
        incomePeriod.value = appData.calcPeriod();
        periodSelect.addEventListener('input', appData.changeIncomePeriodValue);
    },
    addExpensesBlock: function (){        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');        
        if(expensesItems.length === 3){
            expensesAdd.style.display = 'none';
        }
    },
    addIncomeBlock: function (){        
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomeAdd.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !==''){
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getIncome: function(){
        incomeItem.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !==''){
                appData.income[itemIncome] = +cashIncome;
            }
        });
        
        
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function (){
        let addExpenses = additionalEpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function () { 
        additionalIncomeItem.forEach(function (item) { 
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
         });
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
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor((appData.budget - appData.expensesMonth)/30);
    },
    getAccumulatedMonth: function () {
        return money - appData.getExpensesMonth();
    },
    getTargetMonth: function () { 
        return Math.ceil(targetAmount.value/appData.budgetMonth);       
        
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
    calcPeriod: function () {  
        return appData.budgetMonth * periodSelect.value;
    } 
};

start.addEventListener('click', appData.start);

incomeAdd.addEventListener('click', appData.addIncomeBlock);
expensesAdd.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.getPeriod);
salaryAmount.addEventListener('change', appData.check);


/* 
for (let key in appData) {
    console.log('Наша программа включает в себя данные: свойство ' + key + ' и значение ' + appData[key]);
};
 */
