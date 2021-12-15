class Book {

    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    static displayBook() { 
        document.getElementById('bookshelf').innerHTML = ""
        for(let i = 0; i < myLib.length; i++) {
            document.getElementById('bookshelf').innerHTML += `
            <div class="book">
                <p>"${myLib[i]['title']}" by ${myLib[i]['author']}, ${myLib[i]['pages']} pages, ${myLib[i]['read']}</p>
                <div class="buttons">
                    <button class="removeBook" onclick="Book.removeBook(this)">Remove</button>
                    <button class="readNotRead" onclick="Book.readToggle(this)">Read</button>
                </div>
            </div>
            `
        }
        let bookshelf = document.querySelectorAll('.book')
    
        for(let i = 0; i < bookshelf.length; i++) {
            bookshelf[i].setAttribute('data-index', i)
        }
    }

    static removeBook(e) {
        e.parentNode.parentNode.remove()
        myLib.splice(e.parentNode.parentNode.dataset.index, 1)
        this.displayBook()
    }

    static readToggle(e) {
        let read = myLib[e.parentNode.parentNode.dataset.index]
        if (read.read == 'already read') {
            read.read = 'not read yet'
        } else {
            read.read = 'already read'
        }
        this.displayBook()
    }
}

function addBookToLibrary() {
    let title = document.querySelector('.title').value
    let author = document.querySelector('.author').value
    let pages = document.querySelector('.pages').value
    let isRead = document.querySelector('#isRead').value

    if(title != '' && author != '') {
        if(pages > 0) {
            if(isRead == 'already read') {
                myLib.push(new Book(title, author, pages, isRead))              
            } else if(isRead == 'not read yet'){
                myLib.push(new Book(title, author, pages, isRead)) 
            } else {
                alert("Is it already read?")
            }
        } else {
            alert("Pick a valid page number")
        }
    } else {
        alert("Don't forget the title and author")
    }
    console.log(myLib)
    Book.displayBook()
}

myLib = []
