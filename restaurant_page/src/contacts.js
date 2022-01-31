const contactsContent = document.createElement('div')
const contactsTitle = document.createElement('h2')
const ul = document.createElement('ul')

const contactsTab = () => {

    contactsContent.className = 'contactsContent'

    contactsTitle.innerText = 'Contacts'
    ul.innerHTML = `
    <li><a href="tel:">+3706666666</a></li>
    <li><a href="mailto:">email@email.com</a></li>
    <li><a href="">Adress 21-11, Adresstination</a></li>
    `
    contactsContent.append(contactsTitle, ul)
    document.getElementById('kombucha').appendChild(contactsContent)
}

export default contactsTab