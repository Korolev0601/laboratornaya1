let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let expenses = {};
let appData = {
budzhet: money,
timeData: time,
expenses: {},
optionalExpenses: null,
income: [],
savings: false
};

function questions(){
let question1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let question2 = prompt("Во сколько обойдется?", '');
    appData.expenses[question1] = question2;
    alert("Ваш бюджет на 1 день: " + (appData.budzhet - appData.expenses[question1])/30);
}
questions();
questions();
