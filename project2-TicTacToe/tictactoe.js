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
        console.log(playerX, playerO)
        _printXnO(sign, slot)
        _checkIfWin()
    }

    const _printXnO = (sign, slot) => {
        document.querySelector(`.${slot}`).innerHTML = `<p>${sign}</p>`
        }

    const _checkIfWin = () => {
        let winOptions = [['TC', 'CC', 'BC'],
                        ['TL', 'CL', 'BL'],
                        ['TR', 'CR', 'BR'],
                        ['TL', 'TC', 'TR'],
                        ['CL', 'CC', 'CR'],
                        ['BL', 'BC', 'BR'],
                        ['TL', 'CC', 'BR'],
                        ['TR', 'CC', 'BL']]
        winOptions.forEach(win => {
            winner = win.every(i => playerX.includes(i))
            if(winner){
                // winners alert reset offer
            }
        })
    }

    const boardReset = () => {
        let cells = document.querySelectorAll('#cell')
        cells.forEach(cell => {
            cell.innerHTML = ''
        })
        playerO = []
        playerX = []
    }

    return {addXnO, boardReset}
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
        })
    })()

    return {checkPlayers}
})()

gameBoard.boardReset()