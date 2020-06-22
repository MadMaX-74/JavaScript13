'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let   start = document.getElementById('start'), //кнопка расчитать
        cancel = document.getElementById('cancel'),//кнопка отмены (сбросить)
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

        this.budget = +salaryAmount.value;

        this.getExpenses();    
        this.getIncome();    
        this.getExpensesMonth();  
        this.getAddExpenses();
        this.getAddIncome();        
        this.getBudget();
        this.showResult();

        console.log(this);

        let dataInput = document.querySelectorAll('.data input[type=text]');
        console.log(dataInput);
        for (let key in dataInput){
            dataInput[key].setAttribute("disabled", "disabled");
        };
        
        
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

        incomePeriodValue.value = this.calcPeriod();
    },
    showResult: function(){
        budgetMonth.value = this.budgetMonth;
        budgetDay.value = this.budgetDay;
        expensesMonth.value = this.expensesMonth;
        additionalExpenses.value = this.addExpenses.join(', ');
        additionalIncome.value = this.addIncome.join(', ');
        targetMonth.value = this.getTargetMonth();
        incomePeriod.value = this.calcPeriod();
        periodSelect.addEventListener('input', this.changeIncomePeriodValue);
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
            this.incomeMonth += +this.income[key];
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
            sum += this.expenses[key]
            this.expensesMonth = sum;
        }         
        return sum;
        
    },
    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor((this.budget - this.expensesMonth)/30);
    },
    getAccumulatedMonth: function () {
        return money - this.getExpensesMonth();
    },
    getTargetMonth: function () { 
        return Math.ceil(targetAmount.value/this.budgetMonth);       
        
    },    
    getStatusIncome : function () {
        if (this.budgetDay > 1200){
            console.log ('У вас высокий уровень дохода');
        }else if (this.budgetDay <= 1200 && appData.budgetDay >=600){
            console.log ('У вас средний уровень дохода');
        }else if (this.budgetDay <0){
            console.log ('Что то пошло не так');
        }else{
            console.log ('К сожалению у вас уровень дохода ниже среднего');
        }
    },
    getInfoDeposit: function(){
        if(this.deposit){
            this.percentDeposit = prompt('Какой годовой процент?', 5);

            while(!isNumber(this.percentDeposit)) {
                this.percentDeposit = prompt('Какой годовой процент?', 5);
            }

            this.moneyDeposit = prompt('Какая сумма заложена?', 500000);

            while(!isNumber(this.moneyDeposit)) {
                this.moneyDeposit = prompt('Какая сумма заложена?', 500000);
            }
        }
    },
    calcPeriod: function () {  
        return this.budgetMonth * periodSelect.value;
    },
    visibleButton: function () {
        start.style.display = 'none';
        cancel.style.display = 'block'; 
    },
    reset: function (){
        location.reload();
    } 
};

start.addEventListener('click', appData.start.bind(appData));
start.addEventListener('click', appData.visibleButton);   


cancel.addEventListener('click',appData.reset);


incomeAdd.addEventListener('click', appData.addIncomeBlock);
expensesAdd.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.getPeriod);
salaryAmount.addEventListener('input', appData.check);


/* 
for (let key in appData) {
    console.log('Наша программа включает в себя данные: свойство ' + key + ' и значение ' + appData[key]);
};
 */
