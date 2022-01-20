import myName from './myName'

function component() {
    const element = document.createElement('div')

    element.innerHTML = myName('Ervis')

    return element
}

document.body.appendChild(component())