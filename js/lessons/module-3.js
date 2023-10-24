//     Об'єкти

const book = {
    title: 'Kobzar',
    author: 'Taras Shevchenko',
    genres: ['historical prose', 'adventure'],
    isPublic: true,
    rating: 8.38,
}

// console.log(book)
book.pageCount = 836; // додаємо кількість сторінок
book.translations = ["ua", "en"]; // додаємо мови

// console.log(book)

// перебирання масива for ... in

for (const key in book) {
    // console.log(key) // повертає  title, author, genres, isPublic, rating
    //console.log(book[key]) // повертає  'Kobzar', 'Taras Shevchenko', ['historical prose', 'adventure'], true, 8.38,  836, ["ua", "en"]
}

const keys = Object.keys(book) // повертає масив ключів
// console.log(keys) 

const value = Object.values(book)// повертає масив значень
// console.log(value)

const entries =Object.entries(book) // перетворює ключ значення в окремі масиви
// console.log(entries)


const user = {
    name: 'Jack Daniels',
    tag: 'jckdnls',
    location: {
        country: 'Jamaica',
        city: 'Ocho Rios',
    },
    stars: {
        followers: 5630,
        views: 4827,
        likes: 1308,
    }
}

// console.log(user)
// console.log(user.location); //  Об'єкт location
// console.log(user.stars) //  Об'єкт stars
// console.log(user.location.country) // Jamaica
// console.log(user.stars.likes) // 1308

const userName = user['name'];
const userLocation = user['location'];
const userStars = user['stars'];
// console.log(userName); // Jack Daniels
// console.log(userLocation); // Об'єкт location
// console.log(userStars) // Об'єкт stars

// const bookShelf = {
//     books: ['The Last Kingdom', 'Dream Guardian'],
//     getBooks() { // виводимо всі книги
//     // console.log(this.books) // масив з 2 книг 'The Last Kingdom', 'Dream Guardian'
// },
//     addBooks(bookName) { // додаємо книгу
//         this.books.push(bookName)
//     }
// }

// bookShelf.getBooks()
// bookShelf.addBooks('Stars Wars') // додаємо книгу

// console.log(bookShelf.books) // масив з 3 книг 'The Last Kingdom', 'Dream Guardian', 'Stars Wars'


//-------------------------------МАСИВ ОБЄКТІВ------------
const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На березі спокійних вод",
      author: "Роберт Шеклі",
      rating: 8.51,
    },
    {
      title: "Сон смішної людини",
      author: "Федір Достоєвський",
      rating: 7.75,
    },
  ];

// for (const book of books) {
//     console.log(book.title) // повертає список назв книг
//     console.log(book.author)// повертає список авторів
//     console.log(book.rating)// повертає список рейтингів
// }

//--------створюємо масив назв/авторів/рейтингів

const booksName = [];
const booksAuthor =[];
let totalRating = 0

for (const book of books) {
    booksName.push(book.title);
    booksAuthor.push(book.author);
    totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1); // середній рейтинг

// console.log(booksName);
// console.log(booksAuthor);
// console.log(totalRating);
// console.log(averageRating);

//------------------------------------SPREAD i REST (...)-------------

//                         Масиви
const temps = [14, -4, 25, 8, 11];

// console.log(temps); // масив значень
// console.log(...temps); // окремі значення

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];

const allTemps =[...lastWeekTemps, ...currentWeekTemps]; // обєднуємо 2 масиви в 1
// console.log(allTemps)

//                          Обєкти

const first = {propA: 5, propB: 10};
const second = {propC: 15};
const third = {...first, ...second} // обєднуємо обєкт; 
// console.log(third)

//                       Аргументи функції


function multiply(...args) {
// console.log(args)
}
multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]

//                      Деструктуризація
//                       обєктів

const bookk = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};

const { title, author, genres, isPublic, rating, coverImage = "https://via.placeholder.com/640/480"   } = bookk;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.p

const firstBook = {
    title: "The Last Kingdom",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
  };
  
  const {
    title: firstTitle, // змінюємо назву змінної
    coverImage: firstCoverImage = "https://via.placeholder.com/640/480", // змінюємо адресу зображення 
  } = firstBook;
  
//   console.log(firstTitle); // The Last Kingdom
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
  

//                                Деструктуризація в циклах

const bookss= [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На березі спокійних вод",
      author: "Роберт Шеклі",
      rating: 8.51,
    },
  ];
  
//   for (const books of bookss) {
    // console.log(books.title);
    // console.log(books.author);
    // console.log(books.rating);
//   }
//          або скорочений запис

for (const books of bookss) {
    const { title, author, rating } = books;
  
    // console.log(title);
    // console.log(author);
    // console.log(rating);
  }

  //                              Глибока деструктуризація

  const uсer = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  const {
    name,
    tag,
    stats: { followers, views: userViews, likes: userLikes = 0 },
  } = uсer;
  
  // console.log(name); // Jacques Gluke
  // console.log(tag); // jgluke
  // console.log(followers); // 5603
  // console.log(userViews); // 4827
  // console.log(userLikes); // 1308

  