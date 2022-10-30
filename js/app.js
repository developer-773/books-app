const elForm = document.querySelector(".form");
const elInput  = document.querySelector(".input");
const elLanguagesSelect = document.querySelector(".languages");
const elBrowsesSection = document.querySelector(".browse-section");
const elSelectSort = document.querySelector("#sort");
const elLanguagesList = document.querySelector(".languages__list");
const elGenresList = document.querySelector(".genres__list");
const elList = document.querySelector(".list");
const elViewAll = document.querySelector(".all");
const savedBooksList = document.querySelector(".saved__books");
const elTemplates = document.querySelector("#template").content;
const BooksFragment = document.createDocumentFragment();
const newGenresFragment = document.createDocumentFragment();
const booksLanguages = [];
const booksGenres = [];
const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
let value = 0;



function renderLanguagesAndGenres() {
    books.forEach(book => {
        if(booksLanguages.indexOf(book.language) === -1) {
            booksLanguages.push(book.language)
        }
        
        
    }) 
    booksLanguages.sort();
}




function renderLanguagesOption() {
    const newSelectFragment = document.createDocumentFragment();
    booksLanguages.forEach(lang => {
        let newOption = document.createElement('option');
        let item = document.createElement('li');
        let context = document.createElement("p");
        context.classList.add("language__txt")
        item.classList.add("language__item");
        newOption.classList.add("option")
        newOption.value = lang;
        newOption.textContent = lang;
        context.textContent = lang;
        item.appendChild(context);
        newSelectFragment.appendChild(newOption);
        newGenresFragment.appendChild(item);
    });
    elLanguagesList.appendChild(newGenresFragment)
    elLanguagesSelect.appendChild(newSelectFragment);
}


books.forEach(item => {
    
    let genre = item.genre;
    genre.forEach(res => {
        if (!booksGenres.includes(res) ) {
            booksGenres.push(res)
        }
    })
    
    booksGenres.sort();
});




function renderGenresItems() {
    booksGenres.forEach(genre => {
        console.log(genre);
        let item = document.createElement("li");
        let text = document.createElement("p");
        
        item.classList.add("genre__item");
        text.classList.add("genre__txt", "language__txt");
        text.textContent = genre;
        item.appendChild(text);
        newGenresFragment.appendChild(item);
    });
    elGenresList.appendChild(newGenresFragment);
}




function renderBooks(reading) {
    elList
    
    for (let i = 0; i < reading.length; i++) {   
        let BooksCloned = elTemplates.cloneNode(true);
        BooksCloned.querySelector(".book__description").href = reading[i].link;
        BooksCloned.querySelector(".book__image").src = reading[i].imageLink;
        BooksCloned.querySelector(".book__title").textContent = reading[i].title;
        BooksCloned.querySelector(".book__title").dataset.index = [i];
        BooksCloned.querySelector(".book__author").textContent = reading[i].author;
        BooksCloned.querySelector(".book__release").textContent = "(" + reading[i].year + ")";
        BooksCloned.querySelector(".book__page").textContent = reading[i].pages + " pages";
        BooksCloned.querySelector(".bookmark-button").dataset.index = [i];
        BooksFragment.appendChild(BooksCloned);
    }
    elList.appendChild(BooksFragment);   
}



// let genree = document.querySelectorAll(".genre__txt");
// let zero = Array.from(genree)
// let result = zero.map(item => {
//     return item.innerHTML;
// })

// let resultt = result.join();

// console.log(result.join())



function showSearchBooks(param) {
    return books.filter(item => {
        const res = item.title.match(param) && (elLanguagesSelect.value === "All" || item.language.includes(elLanguagesSelect.value)) || item.language.includes(param) || item.genre.includes(param);
        return res;
    })
}

function sorting(sortedList, sorted) {
    if (sorted === "authors") {
        sortedList.sort((a, b) => a.author.charCodeAt(0) - b.author.charCodeAt(0));
    }
    else if (sorted === "sm-books") {
        sortedList.sort((a, b) => a.pages - b.pages);
    }
    else if (sorted === "xl-books") {
        sortedList.sort((a, b) => b.pages - a.pages);
    }
    if (sorted === "a-z") {
        sortedList.sort((a, b) => a.title.localeCompare(b.title));
    } 
    else if (sorted === "z-a") {
        sortedList.sort((a, b) => b.title.localeCompare(a.title));
    } 
}

function genres(params) {
    
    
    // books.forEach(lang => {
    //     console.log(lang.link)
    // })
    
    /* 
    0 - Historical Fiction
    1 - Literary fiction, Poetry
    2 - Literary fiction, Poetry
    3 - religious text
    4 - Romance, Fiction
    5 - Romance, Fiction
    6 - Fiction
    7 - fiction
    8 - fantasy
    9 - Romance, Tragedy
    10 - Horror, Thriller
    11 - Action, Adventure
    12 - Adventure
    13 - Literary fiction
    14 - Literal fiction, Romance
    15 - Novel, Political Fiction
    16 - Novel
    17 - Novel
    18 - Novel, Literal Fiction
    19 - Novel, Philosophical Fiction
    20 - Novel
    21 - Death Metal
    22 - Novel, Philosophical Fiction
    23 - Novel, Historical Fiction
    24 - Novel, Literal Fiction
    25 - Tragedy
    26 - Novel, Historical fiction
    27 - Novel, Southern Gothic
    28 - Novel, Literaly Fiction
    29 - Novel, Literaly Fiction
    30 - Poetry
    31 - Novel, Fantasy
    32 - Novel, Romance, Literaly Fiction
    33 - Tragedy
    34 - Novel, Literaly Fiction
    35 - Historical Fiction, Novel, Political Fiction
    36 - Literary Fiction
    37 - Action, Science Fiction, Thriller, Adventure
    38 - Nautical Fiction, Novel
    39 - Poetry
    40 - Poerty
    41 - Modern Tragedy
    42 - Literary Fiction, Novel
    43 - Short Story, Literaly Fiction
    44 - Philosophical Fiction, Novel
    45 - Comedy, Novel, Philosophical Fiction, Political Fiction
    46 - Drama 
    47 - Literary Fiction, Novel
    48 - Literary Fiction, Novel
    49 - Fictional Autobiography
    50 - Novel, Literary Fiction
    51 - Poetry
    52 - Physological Fiction
    53 - Chidldren's, Literary Fiction
    54 - Short Story
    55 - Literary Fiction, Novel
    56 - Literary Fiction, Novel
    57 - Literary Fiction, Novel, Modern Literature
    58 - Nautical Fiction, Adventure
    59 - Essay
    60 - Literary Fiction, Novel
    61 - Literary Fiction, Novel
    62 - Historical Fiction, Novel
    63 - Literary Fiction, Novel
    64 - Historical Fiction, Novel, Philosophical Fiction
    65 - Novel, Literaly Fiction
    66 - Science Fiction, Political Fiction
    67 - Poetry
    68 - Novel, Autobiography
    69 - Literary Fiction, Mystery
    70 - Philosophical Fiction, Fictional Autobiography
    71 - Literaly Fiction
    72 - Literary Fiction, Novel
    73 - Poetry
    74 - Historical Fiction, Novel
    75 - Poetry
    76 - Literary Fiction, Novel
    77 - Post-apocalytic
    78 - Tragedy, Drama
    79 - Tragedy
    80 - Tragedy
    81 - Tragedy
    82 - Novel, Psychological
    83 - Novel, Humorious Fiction
    84 - Novel, Literary Fiction
    85 - Novel, Chidldren's, Science Fiction, Adventure, Fantasy
    86 - Novel, Historical Fiction, Romance, Philosophical Fiction
    87 - Novel, Fiction
    88 - Fiction, Novella
    89 - Novel, Chidldren's, Adventure
    90 - Ramyana
    91 - Poetry, Fantasy
    92 - Mhbhrt
    93 - Poetry
    94 - Novel, Psychological Fiction
    95 - Novel, Fiction
    96 - Historical Fiction, Novel, Philosophical Fiction
    97 - Novel, Literaly Fiction
    98 - Novel, Fiction
    99 - Fiction
    
    
    */
    
}
elForm.addEventListener("submit", evt => {
    evt.preventDefault();
    const search = new RegExp(elInput.value.trim(), 'gi')
    const searchBooksFilter = showSearchBooks(search); 
    if (searchBooksFilter.length > 0) {
        sorting(searchBooksFilter, elSelectSort.value)
        renderBooks(searchBooksFilter, elList);
    }
    else {
        alert("not found");
    }
    
});

elBrowsesSection.addEventListener("click", evt => {
    evt.preventDefault();
    
    
    // Carousel buttons 
    if (evt.target.classList.contains("next__lang") ) {
        value-=200;
        elLanguagesList.style.transform = `translateX(${value}px)`;
        if (value == -4600) {
            value=0
            elLanguagesList.style.transform = "translateX(0px)";
        }
        
    }
    else if (evt.target.classList.contains("previous__lang")) {
        
        if (value < 0) {
            value+=200;
        }
        elLanguagesList.style.transform = `translateX(${value}px)`;
    }
    
    if (evt.target.classList.contains("next__genre")) {
        value-=700
        elGenresList.style.transform = `translateX(${value}px)`;
        if (value === -7700) {
            value = 0;
            elGenresList.style.transform = "translateX(0px)";
        }
    }
    
    else if (evt.target.classList.contains("previous__genre")) {
        if (value < 0) {
            value+=900;
        }
        elGenresList.style.transform = `translateX(${value}px)`;
        
    }
});



elLanguagesList.addEventListener("click", evt=> {
    evt.preventDefault();
    elList.innerHTML = "";
    if (evt.target.classList.contains("language__txt")) {
        searchBooksFilter = showSearchBooks(evt.target.innerHTML)
        renderBooks(searchBooksFilter);
    }else {
        console.log("No")
    }
});


elGenresList.addEventListener("click", evt => {
    evt.preventDefault();
    
    elList.innerHTML = "";
    if (evt.target.classList.contains("genre__txt")) {
        searchBooksFilter = showSearchBooks(evt.target.innerHTML)
        renderBooks(searchBooksFilter)
    }
});


renderGenresItems()
renderLanguagesAndGenres()

renderLanguagesOption()


renderBooks(books.slice(75, 83));


elViewAll.addEventListener("click", evt => {
    evt.preventDefault();
    renderBooks(books)
});





document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
        return false;
    }
    if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
        return false;
    }
}

// elList.addEventListener("click", evt => {
//     evt.preventDefault();

//     const bookmark = evt.target.matches(".bookmark-button");

//     if (bookmark) {
//         let item = evt.target.getAttribute("data-index");
//         console.log(item)

//         let finded = books.find(item => {
//             return item.id === item
//         });

//         if(savedBooks.indexOf(finded) === -1) {
//             localStorage.setItem('books', JSON.stringify(savedBooks));

//             savedBooks.push(finded);
//             renderBooks(savedBooks,savedBooksList);
//         }
//     }
// });








// let modifiedBook = [];


// for (let i = 0; i < books.length; i++) {

//     let genre = nums[i]
//     bookss = {
//         "id": [i],
//         "author": books[i].author,
//         "country": books[i].country,
//         "imageLink": books[i].imageLink,
//         "language": books[i].language,
//         "link": books[i].link,
//         "pages": books[i].pages,
//         "title": books[i].title,
//         "year": books[i].year,
//         "genre": genre,
//     }

//     modifiedBook.push(bookss);
// }

// console.log(modifiedBook)
