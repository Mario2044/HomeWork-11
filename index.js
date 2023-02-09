// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.
let arr = [];
let amount = prompt("Введите количество елементов").split('');
console.log(amount)
for (let i = 0; i < amount.length; i++) {
    if (amount !== "number") {
        amount.sort() 
    }
}
console.log(amount);
console.log(amount.splice(1,3));
