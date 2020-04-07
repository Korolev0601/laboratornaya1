let money;
let time;
//let button = document.getElementById("button"); второй вариант
let expenses = {};
let appData = {
    money: money,
    timeData: time,
    expenses:{},
    optionalExpenses: null,
    income: [],
    savings: false
};
//button.onclick = function() второй вариант
function Send() {
    money = document.getElementById('money').value;
    time = document.getElementById('time').value;
    appData.money = money;
    appData.timeData = time;
    let AnswerOne = prompt("Введите обязательную статью расходов в этом месяце");
    let AnswerTwo = prompt("Во сколько обойдется?");
    appData.expenses[AnswerOne] = AnswerTwo;
    alert("Ваш бюджет на 1 день: " + (appData.money - appData.expenses[AnswerOne])/30);
    /*
    for (let key in appData.expenses) {
        alert( "Ключ: " + key + " значение: " + appData.expenses[key] );
      }
      */
  };