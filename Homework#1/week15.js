//Задание 1
// Выведите числа от 1 до 10 в консоль
for(let i = 1; i<=10; i++){
    console.log(i);
};

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for(let i = 1; i<=20; i++){
    if(i%2 == 0)
    console.log(i);
};

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for(let i=10; i>=1; i--){
    console.log(i);
};

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for(let i=1; i<=10; i++){
    const elem = i*5;
    console.log(elem);
};

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for(let i=1; i<=100; i++){
    sum += i;
};
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for(i=0; i<array.length; i++){
    console.log(array[i]);
};

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
let sum2 = 0;
const numbers = [1, 2, 3, 4, 5];
for(i=0; i<numbers.length; i++){
    sum2 += i;
};
console.log(sum2);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for(i=0; i<animals.length; i++){
    animals[i] = animals[i] + " - прекрасное животное";
};
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for(simbol of str){
    console.log(simbol);
};

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for(num of array){
    console.log(num);
};

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (sentence of sentences){
    sentence.split('');
    console.log(sentence);
};

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum3 = 0;
for(let number of numbers){
    sum3 += number;
};
console.log(sum3);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for(let elem of list){
    console.log(elem.length);
};

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

vowels.forEach((elem) => {
    let i = 0;
    while (true) {
        i = greeting.indexOf(elem, i);
        if (i !== -1){
            vowelCount += 1;
            i += 1;
        } else {
            i = 0; break;
        }
    }
});
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];

const newStr = words.join(' ');
console.log(newStr);

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
for(word of words){
    const wordUpper = word.toUpperCase();
    console.log(wordUpper);
};

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let a = 1;
while(a<=10){
    console.log(a);
    a++;
};

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let b = 10;
while(b>=1){
    console.log(b);
    b--;
};

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

let c = 0;
while(allNumbers[c]){
    if(allNumbers[c] >= 0){
        c++;
    } else {
        allPositive = false;
        break;
    };
};
console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

let d = 0;
do{
    console.log(random[d]);
    d++;
} while(random[d]>=0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let e = 1;
do{
    if (e%3 !== 0){
        console.log(e);
        e++;
    } else {
        e++;
    }
} while (e<=100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sum4 = 0;
let yourNumber = 0;
do {
    yourNumber = parseInt(prompt('Введите число'));
    sum4 += yourNumber;
} while(sum4 <=100);
console.log(sum4);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

function changeColor(){
    [...document.getElementsByTagName('h4')].forEach(item =>
    item.style.background = 'blue');
}
changeColor();

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

while (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);
