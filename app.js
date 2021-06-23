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
  console.log(searchQuery)
  getBooks(words)
  //return input
}

text.addEventListener('click', storeText)


async function getBooks(input) {
  try {
    const response = await axios.get(`http://openlibrary.org/search.json?q=${input}`) 
    console.log(response)
//Goal here is to add multiple [key, value] pairs onto on 1 html object
   makeBooks(response.data.books)
    
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
    bookContainer.className = "class1"
    newBook.append(bookContainer)
    let bookContent = document.createElement('p')
    bookContent.className = "bkContent class1"
    bookContent.textContent =
    `Book Title:${element.title}, Subheading: ${element.subtitle}`
    books.append(newBook)
    
    //Image Appending Features (can split into another function to improve aesthetic of code)
    let imgDiv = document.createElement('div')
    imgDiv.className = "book cover"
    let newImg = document.createElement('img')
    newImg.className = "book image"
    newImg.setAttribute('src', element.image)
    imgDiv.append(newImg)
    bookContainer.append(imgDiv)
    imgDiv.append(bookContent)

  });
}


function toggleContent(element) { 
 element.className === "class1" ? element.className = "class2" : element.className = "class1"
}

// books.addEventListener('click', toggleContent(class1))

//Toggle Visibility 
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
//dash.generalassemb.ly - lesson 3 
//https://www.youtube.com/watch?v=degwrcZeGF0