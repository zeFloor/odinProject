const body = document.body
const header = document.createElement('header')
const main = document.createElement('main')
const footer = document.createElement('footer')
const navBar = document.createElement('div')
const ul = document.createElement('ul')
const about = document.createElement('li')
const menu = document.createElement('li')
const contacts = document.createElement('li')
const lid = document.createElement('div')
const title = document.createElement('h1')
const scoby = document.createElement('div')
const kombucha = document.createElement('div')
const copyRights = document.createElement('p')


const mainLoad = () => {
    //HEADER
    navBar.className = 'navBar'
    about.className = 'about on navLink'
    menu.className = 'menu navLink'
    contacts.className = 'contacts navLink'
    menu.setAttribute('onclick', 'nav(this)')
    about.setAttribute('onclick', 'nav(this)')
    contacts.setAttribute('onclick', 'nav(this)')
    ul.className = 'flex-container'
    about.innerText = 'About'
    menu.innerText = 'Menu'
    contacts.innerText = 'Contacts'
    ul.append(menu, about, contacts)
    navBar.append(ul)
    header.append(navBar)
    //END OF HEADER

    //MAIN
    lid.className = 'lid'
    title.className = 'title'
    scoby.className = 'scoby'
    kombucha.id = 'kombucha'
    title.innerText = 'TrobelesBoocha'
    main.append(lid, title, scoby, kombucha)
    //END OF MAIN

    //FOOTER
    copyRights.innerText = 'All Rights Reserved | 2022'
    footer.append(copyRights)
    //END OF FOOTER

    body.append(header)
    body.append(main)
    body.append(footer)
}
export default mainLoad