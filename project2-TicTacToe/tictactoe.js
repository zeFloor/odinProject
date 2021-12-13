let players = []
let turn = 0

const player = (name, sign) => {
    let playerName = name
    let playerSign = sign

    return {playerName, playerSign}
}

const gameBoard = (() => {
    let playerX = []
    let playerO = []

    const addXnO = (sign, slot) => {
        if(sign == 'X')
        playerX.push(slot)
        else
        playerO.push(slot)
        
        _printXnO(sign, slot)
    }
    const checkEmptyCell = () => {}
    const _printXnO = (sign, slot) => {
        document.querySelector(`.${slot}`).innerHTML = `<p>${sign}</p>`
        }
    const checkIfWin = () => {}
    const boardReset = () => {}

    return {addXnO, checkIfWin, boardReset}
})()

const displayController = (() => {
    const checkPlayers = (e) => {
        if (document.querySelector('.player1').value == '' || document.querySelector('.player2').value == '')
        alert('Please type in your names')
        else {
           players.push(player(document.querySelector('.player1').value, 'X'))
           players.push(player(document.querySelector('.player2').value, 'O'))
           console.log(players)
        }
    }

    const _placedSymbol = (() => {
        const cells = document.querySelectorAll('#cell')
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if(cell.innerText !== '') {
                    alert("This slot is taken!")
                } else {
                    if(turn % 2 == 0) {
                        gameBoard.addXnO(players[0].playerSign, cell.className)
                    } else {
                        gameBoard.addXnO(players[1].playerSign, cell.className)
                    }
                    turn++
                }
                
            })
        });
    })()

    return {checkPlayers,}
})()

