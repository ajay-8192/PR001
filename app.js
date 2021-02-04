let movieName = prompt("Give Movie Name: ")

let h2 = document.createElement('h2')

url = `http://www.omdbapi.com/?t=${movieName}&apikey=9ef3981c`

fetch(url)
.then(response => response.json())
.then(data => {
    h2.innerText = movieName + ': ' + data.imdbRating
})

document.querySelector('body').appendChild(h2)
