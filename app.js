//Global Variables
const api_url = 'https://api.itbook.store/1.0/search/'
const input = document.querySelector('#blank')
const text = document.querySelector('#search')
let h2 = document.querySelector('h2')
const searchResults = []
const books = document.querySelector('.book-list')


function storeText() {
  console.log(input.value)
  getBooks(input)
  return input
}

text.addEventListener('click', storeText)


async function getBooks(input) {
  try {
    const response = await axios.get(`https://api.itbook.store/1.0/search/${input}`) 
    console.log(response.data.books)
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
   
    let newBook = document.createElement('div')
    newBook.className = "book"
    let bookContainer = document.createElement('div')
    bookContainer.className = "container"
    newBook.append(bookContainer)
    let bookContent = document.createElement('p')
    bookContent.className = "book content"
    bookContent.textContent =
    `Book Title:${element.title}, Subheading: ${element.subtitle}`
    books.append(newBook)
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

