// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.
let arr = [];
let amount = prompt("Введите любые данные.").split(',');
console.log(amount)
amount.sort();
for (let i = 0; i < amount.length; i++) {
    if (amount !== "number") {
        amount = [...new Set(amount)];
    }
}
console.log(amount);
console.log(amount.splice(1,3));
