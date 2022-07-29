//Nav Bar Create

const wholeCont = document.createElement("div");
wholeCont.setAttribute("class","container-fluid");

const navBar = document.createElement("nav");
navBar.setAttribute("class","navbar");

const navContainer = document.createElement("div");
navContainer.setAttribute("class","container");

const title = document.createElement("a");
title.setAttribute("class","navbar-brand");
title.style.color = "white";
title.style.textAlign = "center";
title.style.fontSize = "29px"
title.innerHTML = `<h2> BOOK DETAILS USING FETCH API </h2>`

navContainer.appendChild(title);
navBar.appendChild(navContainer);
wholeCont.appendChild(navBar);
 

//Collect Book Data 

let cont = document.createElement("div");
cont.setAttribute("class","container book-container");
wholeCont.appendChild(cont);

async function getDataBook(){
    try{
    let res = await fetch("https://anapioficeandfire.com/api/books");
    let data = await res.json();
    console.log(data);    // data 10 only

    data.forEach(book =>{
        // console.log(book.name);
        // console.log(book.isbn);
        // console.log(book.numberOfPages);
        // console.log(book.publisher);
        // console.log(book.authors[0]);
        let date = book.released; // Split the T
        let rDate = date.split("T");
        let strDate = new Date(rDate[0]).toDateString();
        // console.log(strDate);
        // console.log(rDate[0]);
        // console.log(book.characters[0]);
        // console.log(book.characters[1]);
        // console.log(book.characters[2]);
        // console.log(book.characters[3]);
        // console.log(book.characters[4]);
        // console.log(book.characters[5]);
     

 let box = document.createElement("div");
  box.setAttribute("class","box");
  cont.append(box);

let cardBookName = document.createElement("h4");
cardBookName.setAttribute("class","bookName");
cardBookName.innerHTML = `📕 <b>BOOK NAME</b> : ${book.name}`
box.appendChild(cardBookName)

let isbnNum = document.createElement("p");
isbnNum.setAttribute("class","isbnNum");
isbnNum.innerHTML = `🔢 <b>ISBN</b> : ${book.isbn}`
box.appendChild(isbnNum)

let numOfPage = document.createElement("p");
numOfPage.setAttribute("class","numOfPage");
numOfPage.innerHTML = `📃 <b>Number Of Pages</b> : ${book.numberOfPages}`
box.appendChild(numOfPage)

let authorName = document.createElement("p");
authorName.setAttribute("class","authorName");
authorName.innerHTML = `📝 <b>Author Name</b> : ${book.authors[0]}`
box.appendChild(authorName)

let publisherName = document.createElement("p");
publisherName.setAttribute("class","publisherName");
publisherName.innerHTML = `🤵 <b>Publisher Name</b> : ${book.publisher}`
box.appendChild(publisherName);

let releaseDate = document.createElement("p");
releaseDate.setAttribute("class","releaseDate");
releaseDate.innerHTML = `⏰ <b>Release Date</b> : ${strDate}`
box.appendChild(releaseDate);


let ol = document.createElement("p");
ol.setAttribute("class","orderedList");
ol.innerHTML = "👥 <p><b>CHARACTERS</b></p>"
box.appendChild(ol);

let char1 = document.createElement("p");
char1.setAttribute("class","list-item");
char1.innerHTML = `${book.characters[0]}`

let char2 = document.createElement("p");
char2.setAttribute("class","list-item");
char2.innerHTML = `${book.characters[1]}`

let char3 = document.createElement("p");
char3.setAttribute("class","list-item");
char3.innerHTML = `${book.characters[2]}`

let char4 = document.createElement("p");
char4.setAttribute("class","list-item");
char4.innerHTML = `${book.characters[3]}`

let char5 = document.createElement("p");
char5.setAttribute("class","list-item");
char5.innerHTML = `${book.characters[4]}`

box.append(char1,char2,char3,char4,char5);
})
}catch(error){
        console.log(error);
    }
} 
getDataBook();

document.body.append(wholeCont);