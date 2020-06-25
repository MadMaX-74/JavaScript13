'use strict';


const  start = document.getElementById('start'), //кнопка расчитать
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
        expensesTitle = document.querySelector('input.expenses-title'), //наименование обязат расходов        
        additionalEpensesItem = document.querySelector('.additional_expenses-item'), // возможные расходы
        periodSelect = document.querySelector('.period-select'), // тумблер
        targetAmount = document.querySelector('.target-amount'),//цель
        periodAmount = document.querySelector('.period-amount');//текст под тумблером
        
let     incomeItems = document.querySelectorAll('.income-items'), //сумма доп доходов
        expensesItems = document.querySelectorAll('.expenses-items'); //сумма обязательных расходов
        
        start.setAttribute("disabled", true);

class AppData {
    constructor(){
        this.budget =  0;
        this.budgetDay =  0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;    
        this.income =  {};
        this.incomeMonth =  0;
        this.addIncome =  [];
        this.expenses =  {};
        this.addExpenses =  [];
        this.deposit =  false;
        this.mission =  50000;
        this.period =  10;
        this.percentDeposit =  0;
        this.moneyDeposit =  0; 
    }

    isNumber(testNumber) {
        return!isNaN( parseFloat(testNumber) )  &&  isFinite(testNumber);
    }

    check() {
        if(salaryAmount.value !== '') {
            start.removeAttribute("disabled");
        } 
    }

    start(){        
        salaryAmount.value = salaryAmount.value.trim();
        if (!this.isNumber(salaryAmount.value)) {
            alert('Используйте только цифры для ввода месячного дохода.');
            return;
        }

        this.budget = +salaryAmount.value;
        this.check();
        this.getExpenses();    
        this.getIncome();    
        this.getExpensesMonth();  
        this.getAddExpenses();
        this.getAddIncome();        
        this.getBudget();       
    
       
    
        let dataInput = document.querySelectorAll('.data input[type=text]');//значение меняется
        console.log(dataInput);
        dataInput.forEach(function(item) {
            item.setAttribute("disabled", "true");
        });
        
        this.showResult();
    }

    getPeriod() { 
        periodAmount.textContent = +periodSelect.value;
    }

    showResult(){
        const _this = this;
        budgetMonth.value = this.budgetMonth;
        budgetDay.value = this.budgetDay;
        expensesMonth.value = this.expensesMonth;
        additionalExpenses.value = this.addExpenses.join(', ');
        additionalIncome.value = this.addIncome.join(', ');
        targetMonth.value = this.getTargetMonth();
        incomePeriod.value = this.calcPeriod();
        periodSelect.addEventListener('input', function(){
            incomePeriod.value = _this.calcPeriod();
        });
    }

    addExpensesBlock(){        
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');        
        if(expensesItems.length === 3){
            expensesAdd.style.display = 'none';
        }
    }

    addIncomeBlock(){        
        const cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomeAdd.style.display = 'none';
        }
    }

    getExpenses() {
        const _this = this;
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !==''){
                _this.expenses[itemExpenses] = +cashExpenses;
            }
        });
    }

    getIncome(){
        const _this = this;
        incomeItems.forEach((item) => {
            let itemIncome = item.querySelector('input.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !==''){
                _this.income[itemIncome] = +cashIncome;
            }
        });        
        
        for (let key in this.income){
            _this.incomeMonth += +this.income[key];
        }
    }
    getAddExpenses(){
        const _this = this;
        const addExpenses = additionalEpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== ''){
                _this.addExpenses.push(item);
            }
        });
    }
    getAddIncome () { 
        const _this = this;
        additionalIncomeItem.forEach((item) => { 
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                _this.addIncome.push(itemValue);
            }
         });
    }

    getExpensesMonth(){        
        let sum = 0;
        
        for (let key in this.expenses){
            sum += this.expenses[key]
            this.expensesMonth = sum;
        }         
        return sum;
        
    }

    getBudget() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor((this.budget - this.expensesMonth)/30);
    }

    getAccumulatedMonth() {
        return money - this.getExpensesMonth();
    }

    getTargetMonth() { 
        return Math.ceil(targetAmount.value/this.budgetMonth);       
        
    } 

    getStatusIncome() {
        if (this.budgetDay > 1200){
            console.log ('У вас высокий уровень дохода');
        }else if (this.budgetDay <= 1200 && appData.budgetDay >=600){
            console.log ('У вас средний уровень дохода');
        }else if (this.budgetDay <0){
            console.log ('Что то пошло не так');
        }else{
            console.log ('К сожалению у вас уровень дохода ниже среднего');
        }
    }

    getInfoDeposit = function(){
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
    }
    calcPeriod () {  
        return this.budgetMonth * periodSelect.value;
    }
    visibleButton() {
        start.style.display = 'none';
        cancel.style.display = 'block'; 
    }
    reset(){
        this.addExpenses.length = 0;
        this.addIncome.length = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        this.incomeMonth = 0;      
    
        for (let key in this.expenses) delete this.expenses[key];
        for (let key in this.income) delete this.income[key]; 
    
        
        cancel.style.display = 'none';
        start.style.display = 'block';
    
        periodAmount.textContent = '1';        
        periodSelect.value = 1;    
        
        incomeAdd.style.display = 'block';
        expensesAdd.style.display = 'block';
    
        let dataInput = document.querySelectorAll("input[type='text']");
    
        dataInput.forEach((item) => {
            item.removeAttribute("disabled");
        });
        
        for(let i = 1; i < incomeItems.length; i++) {
            if (incomeItems.length > 1) {
                incomeItems[i].remove();
            };
        };
    
        for(let i = 1; i < expensesItems.length; i++) {
            if (expensesItems.length > 1) {
                expensesItems[i].remove();
            };
        };
    
        dataInput.forEach((item) => {
            if (item.value !== '') {
                item.value = '';
            };
        });
    
        start.setAttribute("disabled", true);
    
    }

    eventListeners = function(){
        let _this = this;
        start.addEventListener('click', _this.start.bind(this));
        start.addEventListener('click', _this.visibleButton); 
        cancel.addEventListener('click',_this.reset.bind(this));
        incomeAdd.addEventListener('click', _this.addIncomeBlock);
        expensesAdd.addEventListener('click', _this.addExpensesBlock);
        periodSelect.addEventListener('input', _this.getPeriod);
        salaryAmount.addEventListener('input', _this.check);
    }

};

const appData = new AppData();

console.log(appData);

appData.eventListeners();

/* 
 */

/* 
for (let key in appData) {
    console.log('Наша программа включает в себя данные: свойство ' + key + ' и значение ' + appData[key]);
};
 */
