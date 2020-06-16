'use strict';

const   start = document.getElementById('start'),
        incomeAdd = document.getElementsByTagName('button')[0],
        expensesAdd = document.getElementsByTagName('button')[1],
        depositCheck = document.querySelector('#deposit-check'),
        additionalIncomeItemOne = document.querySelectorAll('.additional_income-item')[0],
        additionalIncomeItemTwo = document.querySelectorAll('.additional_income-item')[1],       
        budgetMonth = document.getElementsByClassName('budget_month-value')[0],
        budgetDay = document.getElementsByClassName('budget_day-value')[0],
        expensesMonth = document.getElementsByClassName('expenses_month-value')[0],
        additionalIncome = document.getElementsByClassName('additional_income-value')[0],
        additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
        incomePeriod = document.getElementsByClassName('income_period-value')[0],
        targetMonth = document.getElementsByClassName('target_month-value')[0],
        salaryAmount = document.querySelector('.salary-amount'),
        incomeTitle = document.querySelector('.income-title'),
        incomeAmount = document.querySelector('.income-amount'),
        expensesTitle = document.querySelector('.expenses-title'),
        expensesAmount = document.querySelector('.expenses-amount'),
        additionalEpensesItem = document.querySelector('.additional_expenses-item'),
        periodSelect = document.querySelector('.period-select');

