import myName from './myName'
import './style.css'

function component() {
    const element = document.createElement('div')

    element.innerHTML = myName('Ervis')
    element.classList.add('hello')

    return element
}

document.body.appendChild(component())