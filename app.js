//Global Variables
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
    makeBooks(bookInfo.slice(0, 20))
    //Source: Molly Exten - slack - sorting function 
  } catch (error) {
   console.error(error) 
  }
}

/*Ask Gracen for help breaking these commands down into more readable functions to call */
function makeBooks(bookData) {
  
  bookData.forEach(element => {

    //Book Appending Features for text and innerText cintent
    let newBook = document.createElement('div')
    newBook.className = "book"
    let bookContainer = document.createElement('div')
    bookContainer.className = "modal"
    bookContainer.setAttribute('id', 'myModal')
    newBook.append(bookContainer)
    
    //create a span element for modal
    let modalSpan = document.createElement('span')
    modalSpan.className = "close"
    

    //Make and set book content 
    let bookContent = document.createElement('p')
    bookContent.className = "bookContent"
    bookContent.textContent = `Book Title:${element.title} Author: ${element.author_name} Publisher: ${element.publisher}`
    modalSpan.append(bookContent)

    //Features to append button to books and add innerText to them
    let newBookBtn = document.createElement('button')
    newBookBtn.setAttribute('id', 'myBtn')
    newBookBtn.textContent = "details"
    newBook.append(newBookBtn)
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
  let btnArr = document.querySelectorAll('#myBtn')
  btnArr.forEach((btn, index) => {
    console.log(btn, index)
    btn.addEventListener('click', function () {
      if (document.querySelectorAll('.bookContent')[index].style.display === "none") {
        document.querySelectorAll('.bookContent')[index].style.display = "flex";
      } else {
        document.querySelectorAll('.bookContent')[index].style.display = "none";
      }

    })
  })
}
    
//     .addEventListener('click', function () {
//       document.querySelector('.bookContent')[0].style.display= "none";
//   })
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