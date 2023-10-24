//Методи масиву

const genres = ['Jazz', 'Blues']

//додаємо значення в кінець масиву
genres.push('Rock&Roll')
//додаємо значення на початок масиву
genres.unshift('Contry')
// перший елемент масиву
// console.log(genres[0])

// останній елемент масиву
// console.log(genres[genres.length - 1])

// довжина масиву
// console.log(genres.length)

// console.log(genres)

// Обчислення площі прямокутника

const value = '8 11';
//переводимо рядок в масив і розділяємо пробілом
const array = value.split(' '); // [8, 11]

const square = array[0] * array[1]
// console.log(square);

//  Перебираємо масив

//Напиши скрипт для перебору масиву циклом for
const fruits = ['tomato', 'banana', 'lemon', 'grape', 'strawberry'];

for(let index=0; index < fruits.length; index += 1) {
    // console.log(index); // 0, 1, 2, 3, 4
    // console.log(fruits[index]); // tomato, banana, lemon, grape, strawberry
    // console.log(`${index + 1}: ${fruits[index]}`)
}

// Напиши скрипт який виводить у консоль імя і телефон користувача

// const names = 'Jacob,Williams,Solomon,Kate';
// const phones = '38001234567,38001112233,38005556677,38009994455'

// const nameArray = names.split(','); // пертворюємо рядок в масив
// const phonesArray = phones.split(',');

// for(let index=0; index < nameArray.length; index+=1){ // перебираємо масив
//     console.log(`${nameArray[index]} - ${phonesArray[index]}`) // виводимо значення
// }
// console.log(nameArray)
// console.log(phonesArray)

//Напищи скрипт який виводить всі слова рядка у консоль крім першогго і останнього

// const srtring = 'Welcome to the future';

// const srtringArray = srtring.split(' ')

// srtringArray.shift()// видаляємо перший елемент з масиву
// srtringArray.pop() // видаляємо останній елемент з масиву

// console.log(srtringArray);

// const newString = srtringArray.join(' ') //  перетворюємо масив у рядок

// console.log(newString);

// Напиши скрипт, який розвертає рядок (зворотній порядок літер)
// по словах
// const string = 'Welcome to the future';

// const stringArray = string.split(' ');

// stringArray.reverse();

// // console.log(stringArray);

// const newString = stringArray.join(' ')
// console.log(newString);

// по літерах 
// const string = 'Welcome to the future';

// let newString = ''

// for(let index = 0; index < string.length; index += 1) {
//     // console.log(string[index])
//     newString = string[index] + newString    
// }

// console.log(newString)

// Шукаємо найменше число у масиві 

// const numbers = [101, 78, 12, 76, 5, 11, 9]

// let minNumber = Infinity; // мінімільне значення = безкінечність

// for (let number of numbers) { // перебираємо масив
//     if(minNumber > number) { // якщо значення намбер менше початкового значення
//         minNumber = number // то переприсвоюємо мінімальне значення 
//     }   
// }
//  console.log(minNumber)


//         ФУНКЦІЇ

// function declaration - викликається будь-де

// getSumm(3,9) //12

// function getSum(number1, number2) {
//     console.log(number1 + number2)
// } 

// getSum(5,7) // 12
// getSum(4,8) // 12

//function expression - викликається тільки після оголошення

// const getSum = function (number1, number2) {
//     console.log(number1 + number2)
// }

// getSum(5,7)


//функція повертає суму переданих аргументів (цикл for)

// function getSum() {

//     let total = 0;
//     for (let arg of arguments) {
//         // console.log(el);
//         total += arg        
//     } 
// console.log(total)
// } 

// getSum(10, 34, 56, 63, 28)

//функція роботи з навчальними курсами 

const courses = ['python', 'fullstack', 'frontend']

function addCourse(name) { // додаємо курс
    if(!courses.includes(name)) { //перевіряємо чи є такий курс 
           courses.push(name) // додаємо курс
    }
}

// console.log(courses) // ['python', 'fullstack', 'frontend']
addCourse('java');
addCourse('java');
addCourse('html');
addCourse('css')

// console.log(courses) // ['python', 'fullstack', 'frontend', 'java', 'html', 'css']

function removeCourses(name) { // видаляємо курс
 const coursesId = courses.indexOf(name);// шукаємо індекс необхідного елемента

 if (coursesId === -1) { //перевірка чи є такий індекс
    return
 }
 courses.splice(coursesId, 1)
}

 removeCourses('css')
 removeCourses('html')
 console.log(courses) // ['python', 'fullstack', 'frontend', 'java']

function updateCourses(oldName, newName) {
const coursesId = courses.indexOf(oldName); // шукаємо індекс старого елемента
if (coursesId === -1) {
    return;
}
courses.splice(coursesId, 1, newName) // замінюємо старий елемент на новий
}

updateCourses('java', 'html')
 console.log(courses) //  ['python', 'fullstack', 'frontend', 'html']


