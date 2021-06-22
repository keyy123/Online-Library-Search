//Global Variables
const api_url = 'https://api.itbook.store/1.0/search/'
const input = document.querySelector('#blank')
const text = document.querySelector('#search')
let h2 = document.querySelector('h2')
const searchResults = []

function storeText() {
  console.log(input.value)
  getBooks(input)
  return input
}

text.addEventListener('click', storeText)


async function getBooks(input) {
  try {
    const response = await axios.get(`https://api.itbook.store/1.0/search/${input}`) 
    console.log(response)
    response.data.books.forEach(element => {
      element.forEach(item => {
        console.log(item)
      })
      console.log(element)
      let newBook = document.createElement('div')
      newBook.classList.add('search-results')
      h2.append(element)
    });
  } catch (error) {
   console.error(error) 
  }
}


