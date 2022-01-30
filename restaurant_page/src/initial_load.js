const container = document.getElementById('content')
const title = document.createElement('h1')
const image = document.createElement('img')
const about = document.createElement('p')


const initialLoad = () => {

    title.innerText = 'The Restaurant'
    image.setAttribute('src', '../images/restaurant.jpeg')
    about.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    container.appendChild(title)
    container.appendChild(image)
    container.appendChild(about)
}
export default initialLoad