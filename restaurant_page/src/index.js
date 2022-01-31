import './main.css'
import mainLoad from './main_load'
import aboutTab from './about'
import contactsTab from './contacts'
import menuTab from './menu'

mainLoad()
aboutTab()

const navBar = document.querySelectorAll('.navLink')
const menu = document.querySelector('.menu')
const about = document.querySelector('.about')
const contacts = document.querySelector('.contacts')

function nav(e) {
    navBar.forEach(element => {
        if(element.classList.contains('on')) {
            element.classList.toggle('on')
        }
    });
    e.classList.toggle('on')

    openTab()
}
window.nav = nav

function openTab() {
    if(menu.classList.contains('on')){
        resetTab()
        menuTab()
    } else if(about.classList.contains('on')){
        resetTab()
        aboutTab()
        
    } else if(contacts.classList.contains('on')){
        resetTab()
        contactsTab()
        
    }
}

function resetTab() {
    document.getElementById('kombucha').innerHTML = ''
}
