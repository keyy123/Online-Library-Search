//Global Variables
const input = document.querySelector('input#blank')
const text = document.querySelector('#search')
let h2 = document.querySelector('h2')
const searchResults = []
const books = document.querySelector('.book-list')
const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

function storeText() {
  let words = input.value
  let searchQuery = words.split(' ').join('+')
  console.log(searchQuery)
  getBooks(searchQuery)
  console.log(e.target)
}
 
text.addEventListener('click', storeText)

async function getBooks(input) {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${input}`) 
    let bookInfo = response.data.docs
    let bookCover = bookInfo.oclc
    makeBooks(bookInfo.slice(0, 6))
    console.log(bookCover)
    console.log(bookInfo)
    //W.I.P. -http://covers.openlibrary.org/b/$key/$value-$size.jpg - How to add images to my website (Shahroze's Presentation - Double check the docs, triple check it again )
    //Source: Molly Exten - slack - sorting function
  } catch (error) {
   console.error(error) 
  }
}
    
function makeBooks(bookData) {
  bookData.forEach(element => {
    makeFlipCards(element)
  });  
}

function makeFlipCards(element) {
  //New book container

    let newBooks = bookCover()
    
  //Flipcard creation
    let flipCard = document.createElement('div')
    flipCard.classList.add("flip-card") 
    books.append(flipCard)
    let flipCardInner = document.createElement('div')
    flipCardInner.className = "flip-card-inner"
    flipCard.append(flipCardInner)
    let flipCardFront = document.createElement('div')
    flipCardFront.className = "flip-card-front"
    flipCardInner.append(flipCardFront)
    let flipCardBack = document.createElement('div')
    flipCardBack.className = "flip-card-back"
    flipCardInner.append(flipCardBack)
    flipCardFront.append(newBooks)
    let newImg = makeImgs(element.oclc)
    //flipCardFront.append(newImg)  
  newBooks.append(newImg)
  
 
  let bookDetails = backOfBook(element)  
  flipCardBack.append(bookDetails)
}

//Separating Fxn - Molly Exten Advice - 6/28/21

function makeImgs(element) {
    let imgDiv = document.createElement('div')
    imgDiv.className = "modal-content"
    let newImg = document.createElement('img')
    newImg.className = "book image"
    newImg.setAttribute('src', `http://covers.openlibrary.org/b/oclc/${element}-M.jpg`)
    imgDiv.append(newImg)  
    return imgDiv
}

function bookCover() {
  let newBook = document.createElement('div')
  newBook.className = "book"
  // let bookContainer = document.createElement('div')
  // bookContainer.className = "bookContainer"
  // newBook.append(bookContainer)
  return newBook
}

function backOfBook(element) {
  let bookContent = document.createElement('p')
  bookContent.className = "bookContent"
  bookContent.textContent = `Book Title:${element.title} Author: ${element.author_name} Publisher: ${element.publisher} ISBN: ${element.id}`
  console.log(bookContent.textContent)
  return bookContent
}

// Speech Recognition Functionality
const SpeechGrammarList = window.SpeechGrammarList||window.webkitSpeechGrammarList
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

let grammar = '#JSGF V1.0;'
const Recognition = new SpeechRecognition();
Recognition.lang = 'en-US';
Recognition.interimResults = false;
Recognition.continuous = false;
Recognition.maxAlternatives = 1;

Recognition.onresult = (event) => {
  
  const lastWord = event.results.length - 1;
  const voiceCmd = event.results[lastWord][0].transcript
  console.log(voiceCmd)
 
  getBooks(voiceCmd)
}

Recognition.onspeechend = () => {
  Recognition.stop()
}

Recognition.onerror = (error) => {
  console.error(`Speech Recog Error:${error}`)
}

document.querySelector('i').addEventListener('click', () => {
  Recognition.start();
})