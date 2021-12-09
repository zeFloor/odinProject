myLib = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    if(read == true) {
        return this.read = 'already read'
    } else {
        return this.read = 'not read yet'
    }
}
//myLib.push(new Book('JavaScript', 'Ervis', '420', false))
//myLib.push(new Book('Ruby', 'Kriste', '69', true))

function addBookToLibrary() {
    let title = document.querySelector('.title').value
    let author = document.querySelector('.author').value
    let pages = document.querySelector('.pages').value
    let isRead = document.querySelector('#isRead').value

    if(title != '' && author != '') {
        if(pages > 0) {
            if(isRead == 'read') {
                myLib.push(new Book(title, author, pages, true))              
            } else if(isRead == 'notRead'){
                myLib.push(new Book(title, author, pages, false)) 
            } else {
                alert("Is it already read?")
            }
        } else {
            alert("Pick a valid page number")
        }
    } else {
        alert("Don't forget the title and author")
    }
    displayBook()
}

function displayBook() { 
    for(let i = 0; i < myLib.length; i++) {
        // Parasyti if salyga, kad nesikartotu idedami objektai i DOM
        document.getElementById('bookshelf').innerHTML += `
        <div class="book">
            <p>"${myLib[i]['title']}" by ${myLib[i]['author']}, ${myLib[i]['pages']} pages, ${myLib[i]['read']}</p>
            <div class="buttons">
                <button class="removeBook" onclick="removeBook(this)">Remove</button>
                <button class="readNotRead">Read</button>
            </div>
        </div>
        `
    }
    let bookshelf = document.querySelectorAll('.book')

    for(let i = 0; i < bookshelf.length; i++) {
        bookshelf[i].setAttribute('data-index', i)
    }
}

function removeBook(elem) {
    elem.parentNode.parentNode.remove()
    myLib.splice(elem.parentNode.parentNode.dataset.index, 1)
}


// Parasyti read / not read funkcija