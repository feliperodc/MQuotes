const d = document;

fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let quoteText = d.querySelector('.quote-text')
    let quoteAuthor = d.querySelector('.quote-author')
    let random = Math.round(Math.random()*1000)
    quoteText.innerHTML = data[random].text
    quoteAuthor.innerHTML = data[random].author
    
}); 


const reloadButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);



