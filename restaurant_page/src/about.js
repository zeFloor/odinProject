const aboutContent = document.createElement('div')
const image = document.createElement('img')
const header = document.createElement('h2')
const aboutContainer = document.createElement('div')
const info = document.createElement('div')

const aboutTab = () => {
    image.setAttribute('src', '../images/kombucha.jpeg')
    image.className = 'aboutImage'
    header.innerText = 'About kombucha'
    info.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
    info.className = 'intro'
    aboutContainer.className = 'aboutContainer'
    aboutContent.className = 'aboutContent flex-container'
    aboutContainer.append(header, info)
    aboutContent.append(aboutContainer, image)

    document.getElementById('kombucha').appendChild(aboutContent)
}

export default aboutTab
