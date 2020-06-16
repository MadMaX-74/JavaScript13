'use strict';

const   start = document.getElementById('start'), //кнопка расчитать
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
        incomeTitle = document.querySelector('.income-title'), //наименование доп дохода
        incomeAmount = document.querySelector('.income-amount'), //сумма доп дохода
        expensesTitle = document.querySelector('.expenses-title'), //наименование обязат расходов
        expensesAmount = document.querySelector('.expenses-amount'), //сумма обязательных расходов
        additionalEpensesItem = document.querySelector('.additional_expenses-item'), // возможные расходы
        periodSelect = document.querySelector('.period-select'); // тумблер

console.log(start, incomeAdd, expensesAdd, depositCheck, additionalIncomeItem, budgetDay, expensesMonth, additionalIncome, additionalExpenses, incomePeriod, targetMonth, salaryAmount, incomeTitle, incomeAmount, expensesTitle, expensesAmount, additionalEpensesItem, periodSelect );

