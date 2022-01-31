const menuContent = document.createElement('div')
const menuTitle = document.createElement('h2')
const menuList = document.createElement('ul')
const item1 = document.createElement('li')
const item2 = document.createElement('li')
const item3 = document.createElement('li')

const menuTab = () => {
    menuContent.className = 'menuContent'
    menuTitle.className = 'menuTitle'
    menuList.className = 'menuList'

    menuTitle.innerText = 'Menu'

    item1.innerHTML = `
        <img src="../images/strawbarries.jpg">
        <div>
            <h3>Kombucha with strawbarries</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    `
    item2.innerHTML = `
        <img src="../images/kiwi.jpg">
        <div>
            <h3>Kombucha with kiwi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    `
    item3.innerHTML = `
        <img src="../images/ginger.jpg">
        <div>
            <h3>Kombucha with ginger</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    `

    menuList.append(item1, item2, item3)
    menuContent.append(menuTitle, menuList)
    document.getElementById('kombucha').appendChild(menuContent)

}

export default menuTab