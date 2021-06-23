//Global Variables
const api_url = 'https://api.itbook.store/1.0/search'
const input = document.querySelector('#blank')
const text = document.querySelector('#search')
let h2 = document.querySelector('h2')
const searchResults = []
const books = document.querySelector('.book-list')

function storeText() {
  let words = input.value
  let searchQuery = words.split('').join('+')
  //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  //source: https://masteringjs.io/tutorials/fundamentals/string-concat - this gave me the idea to check MDN for examples
  console.log(searchQuery)
  getBooks(words)
  //return input
}

text.addEventListener('click', storeText)


async function getBooks(input) {
  try {
    const response = await axios.get(`http://openlibrary.org/search.json?q=${input}`) 
    let bookInfo = response.data.docs  
//Goal here is to add multiple [key, value] pairs onto on 1 html object
    makeBooks(bookInfo.slice(0, 20))
    //Source: Molly Exten - slack - sorting function 
  } catch (error) {
   console.error(error) 
  }
}


function makeBooks(bookData) {
  bookData.forEach(element => {
    // console.log(element.title)
    // console.log(element.subtitle)
    // console.log(element.image)
   
    //Book Appending Features for text and innerText cintent
    let newBook = document.createElement('div')
    newBook.className = "book"
    let bookContainer = document.createElement('div')
    bookContainer.className = "modal"
    bookContainer.setAttribute('id','myModal')
    newBook.append(bookContainer)
    
    //create a span element for modal
    let modalSpan = document.createElement('span')
    modalSpan.className = "close"
    

    //Make and set book content 
    let bookContent = document.createElement('p')
    bookContent.className = "bookContent"
    bookContent.textContent =`Book Title:${element.title} Author: ${element.author_name} Publisher: ${element.publisher}`
    modalSpan.append(bookContent)

    //Features to append button to books and add innerText to them
    let newBookBtn = document.createElement('button')
    newBookBtn.setAttribute('id', 'myBtn')
    newBookBtn.textContent = "details"
    bookContent.append(newBookBtn)
    books.append(newBook)
    
    //Image Appending Features (can split into another function to improve aesthetic of code)
    let imgDiv = document.createElement('div')
    imgDiv.className = "modal-content"
    bookContainer.append(imgDiv)
    let newImg = document.createElement('img')
    newImg.className = "book image"
    newImg.setAttribute('src', 'https://1.bp.blogspot.com/-07BtMPlJimo/T2ugvQamV_I/AAAAAAAAKlA/YeBLJcJ5gQU/s1600/booktemplate-generic.png')
    //imgDiv.append(newImg)
    newBook.append(newImg)
    imgDiv.append(modalSpan)
  });
}


// books.addEventListener('click', toggleContent(class1))

//Toggle Visibility 
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
//dash.generalassemb.ly - lesson 3 
//https://www.youtube.com/watch?v=degwrcZeGF0