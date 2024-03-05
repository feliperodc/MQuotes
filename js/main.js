const d = document;

fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let quoteText = d.querySelector('.quote-text')
    let quoteAuthor = d.querySelector('.quote-author')
    let random = Math.round(Math.random()*10)
    quoteText.innerHTML = data[random].text
    let autor = (quoteAuthor.innerHTML = data[random].author).replace(', type.fit', ' ')
    quoteAuthor.innerHTML = autor
    console.log(autor);
}); 
