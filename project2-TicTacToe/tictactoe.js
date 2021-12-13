let players = []

const player = (name, sign) => {
    let playerName = name
    let playerSign = sign

    return {playerName, playerSign}
}

const gameBoard = (() => {
    let playerX = []
    let playerO = []

    const addXnO = () => {}
    const checkEmptyCell = () => {}
    const printXnO = () => {}
    const checkIfWin = () => {}
})()


const displayController = (() => {
    const checkPlayers = (e) => {
        if (document.querySelector('.player1').value == '' || document.querySelector('.player2').value == '')
        alert('Please type in your names')
        else {
           players.push(player(document.querySelector('.player1').value, 'X'))
           players.push(player(document.querySelector('.player2').value, 'Y'))
           console.log(players)
        }
    }
    return {checkPlayers}
})()
