//Global Variables
const input = document.querySelector('#blank')
const text = document.querySelector('#search')
let h2 = document.querySelector('h2')
const searchResults = []
const books = document.querySelector('.book-list')
const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

function storeText() {
  let words = input.value
  //let newArr = []
  //newArr.push(words.split(' ').join('+')) -> This return all words with a + after each word = perfect!
  //console.log(newArr)
  let searchQuery = words.split(' ').join('+')
  //let searchQuery = words.map().join('+')
  //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  //source: https://masteringjs.io/tutorials/fundamentals/string-concat - this gave me the idea to check MDN for examples
  console.log(searchQuery)
 // getBooks(words)
  //return input
  getBooks(searchQuery)
}

text.addEventListener('click', storeText)


async function getBooks(input) {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${input}`) 
    let bookInfo = response.data.docs  
    makeBooks(bookInfo.slice(0, 6))
    console.log(bookInfo)
    //Source: Molly Exten - slack - sorting function 
  } catch (error) {
   console.error(error) 
  }
}

/*Ask Gracen for help breaking these commands down into more readable functions to call */
/*We are going to use the make book function to make all of the search results into flipping cards  
This is what we need to recreate for each element that passes through the forEach element array
<!-- <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="#" alt="Book-Image" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
        </div>
      </div>
    </div> -->

    */


//function makeBooks(bookData) {
  
  //bookData.forEach(element => {

    // Book Appending Features for text and innerText cintent
    // let newBook = document.createElement('div')
    // newBook.className = "book"
    // let bookContainer = document.createElement('div')
    // bookContainer.className = "modal"
    // bookContainer.setAttribute('id', 'myModal')
    // newBook.append(bookContainer)
    
    //create a span element for modal
    // let modalSpan = document.createElement('span')
    // modalSpan.className = "close"
    

    //Make and set book content 
    // let bookContent = document.createElement('p')
    // bookContent.className = "bookContent"
    // bookContent.textContent = `Book Title:${element.title} Author: ${element.author_name} Publisher: ${element.publisher}`
    // modalSpan.append(bookContent)

    //Features to append button to books and add innerText to them
    // let newBookBtn = document.createElement('button')
    // newBookBtn.setAttribute('id', 'myBtn')
    // newBookBtn.textContent = "details"
    // newBook.append(newBookBtn)
    // books.append(newBook)
    
    //Image Appending Features (can split into another function to improve aesthetic of code)
    // let imgDiv = document.createElement('div')
    // imgDiv.className = "modal-content"
    // bookContainer.append(imgDiv)
    // let newImg = document.createElement('img')
    // newImg.className = "book image"
    // newImg.setAttribute('src', 'https://1.bp.blogspot.com/-07BtMPlJimo/T2ugvQamV_I/AAAAAAAAKlA/YeBLJcJ5gQU/s1600/booktemplate-generic.png')
    //imgDiv.append(newImg)
    // newBook.append(newImg)
    // imgDiv.append(modalSpan)
  //});
//   let btnArr = document.querySelectorAll('#myBtn')
//   btnArr.forEach((btn, index) => {
//     console.log(btn, index)
//     btn.addEventListener('click', function () {
//       if (document.querySelectorAll('.bookContent')[index].style.display === "none") {
//         document.querySelectorAll('.bookContent')[index].style.display = "flex";
//       } else {
//         document.querySelectorAll('.bookContent')[index].style.display = "none";
//       }

//     })
//})
//}
    
function makeBooks(bookData) {
  bookData.forEach(element => {
    //let flipCard = document.createElement('div')
    //flipCard.className = "flip-card"
    //books.append(flipCard)
    //let flipCardInner = document.createElement('div')
    //flipCardInner.className = "flip-card-inner"
    //flipCard.append(flipCardInner)
    // let flipCardFront = document.createElement('div')
    // flipCardFront.className = "flip-card-front"
    // flipCardInner.append(flipCardFront)
    // let flipCardBack = document.createElement('div')
    // flipCardBack.className = "flip-card-back"
    // flipCardInner.append(flipCardBack)
    // let newBook = document.createElement('div')
    // newBook.className = "book"
    // let bookContainer = document.createElement('div')
    // bookContainer.className = "bookContainer"
    // newBook.append(bookContainer)
    // flipCardFront.append(newBook)
    // let bookContent = document.createElement('p')
    // bookContent.className = "bookContent"
    // bookContent.textContent = `Book Title:${element.title} Author: ${element.author_name} Publisher: ${element.publisher}`
    // flipCardBack.append(bookContent)
    // let imgDiv = document.createElement('div')
    // imgDiv.className = "modal-content"
    // bookContainer.append(imgDiv)
    // let newImg = document.createElement('img')
    // newImg.className = "book image"
    // newImg.setAttribute('src', 'https://1.bp.blogspot.com/-07BtMPlJimo/T2ugvQamV_I/AAAAAAAAKlA/YeBLJcJ5gQU/s1600/booktemplate-generic.png')
    // flipCardFront.append(newImg)
    makeFlipCards(element)
  });  
}

function makeFlipCards(element) {
  //New book container
    // let newBook = document.createElement('div')
    // newBook.className = "book"
    // let bookContainer = document.createElement('div')
    // bookContainer.className = "bookContainer"
    // newBook.append(bookContainer)
  
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
    //flipCardBack.append(bookContent)
    let newImg = makeImgs()
    flipCardFront.append(newImg)  
    //   flipCardFront.append(newImg)
  // flipCardFront.append(newBook)
  
  //book content creation 
    // let bookContent = document.createElement('p')
    // bookContent.className = "bookContent"
    // bookContent.textContent = `Book Title:${element.title} Author: ${element.author_name} Publisher: ${element.publisher}`
  let bookDetails = backOfBook(element)  
  flipCardBack.append(bookDetails)
}

//Separating Fxn - Molly Exten Advice - 6/28/21


function makeImgs() {
    let imgDiv = document.createElement('div')
    imgDiv.className = "modal-content"
    //bookContainer.append(imgDiv)
    let newImg = document.createElement('img')
    newImg.className = "book image"
    newImg.setAttribute('src', 'https://1.bp.blogspot.com/-07BtMPlJimo/T2ugvQamV_I/AAAAAAAAKlA/YeBLJcJ5gQU/s1600/booktemplate-generic.png')
    imgDiv.append(newImg)  
    return imgDiv
}

function bookCover() {
  let newBook = document.createElement('div')
  newBook.className = "book"
  let bookContainer = document.createElement('div')
  bookContainer.className = "bookContainer"
  newBook.append(bookContainer)
  return newBook
}

function backOfBook(element) {
  let bookContent = document.createElement('p')
  bookContent.className = "bookContent"
  bookContent.textContent = `Book Title:${element.title} Author: ${element.author_name} Publisher: ${element.publisher}`
  console.log(bookContent.textContent)
  return bookContent
}


//     .addEventListener('click', function () {
//       document.querySelector('.bookContent')[0].style.display= "none";
//  })
// }

//Event Listeners 
// newBookBtn.addEventListener('click', () => {
//   bookContainer.style.display = 'block';
// })

// When the user clicks on the button, open the modal
// NewBookBtn.addEventListener('click', () => {
//   modal.style.display = "block";
// })

// //When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target !== modal) {
//     modal.style.display = "none";
//   }
// }



//Toggle Visibility (Scraped the idea)
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
//dash.generalassemb.ly - lesson 3 
//https://www.youtube.com/watch?v=degwrcZeGF0


// Speech Recognition Functionality
const SpeechGrammarList = window.SpeechGrammarList||window.webkitSpeechGrammarList
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

//source: https://www.youtube.com/watch?v=rwB6RqqCmXc
//source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
//
//
//
//

let grammar = '#JSGF V1.0;'
const Recognition = new SpeechRecognition();
Recognition.lang = 'en-US';
Recognition.interimResults = false;
Recognition.continuous = false;
Recognition.maxAlternatives = 1;
// const SpeechRecognitionGrammarList = new SpeechGrammarList();
// SpeechRecognitionGrammarList.addFromString(grammar, 1);
// Recognition.grammars = SpeechRecognitionGrammarList;


///


///

Recognition.onresult = (event) => {
  
  const lastWord = event.results.length - 1;
  const voiceCmd = event.results[lastWord][0].transcript
  console.log(voiceCmd)
  //console.log(event.results)
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