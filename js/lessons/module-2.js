const clients = ["Mango", "Poly", "Ajax"];

const lastElementIndex = clients.length - 1;

// console.log(clients) // ["Mango", "Poly", "Ajax"]
// console.log(clients[0]); // Mango
// console.log(clients[lastElementIndex]) // Ajax
// console.log(clients.length) // 3
// console.log(lastElementIndex)// 2


//-                   Перебираємо масив
// for(let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]) // Mango/Poly/Ajax Виводимо значення
// }

//-----for/of------

// for(const client of clients) {
//     console.log(client) // Mango/Poly/Ajax Виводимо значення
// }

//----Область видимості------

const globalValue = 10;

// console.log(globalValue) // повертає 10

//-----функція------
// function foo() {
//     console.log(globalValue) // повертає 10 
// }
// foo()


// for (let i = 0; i < 5; i++) {
//     console.log(globalValue) // повертає 10 пять разів
// }

