let players = []
let turn = 0

// Function factory for creating player object

const player = (name, sign) => {

    let playerName = name
    let playerSign = sign

    return {playerName, playerSign}
}

// Module pattern for storing, printing and checking game results

const gameBoard = (() => {

    let playerX = []
    let playerO = []
    // Method that stores player turn then prints and checks for winner
    const addXnO = (sign, slot) => {
        if(sign == 'X')
        playerX.push(slot)
        else
        playerO.push(slot)

        _printXnO(sign, slot)
        _checkIfWin()
    }
    // Private method to print out X or O symbol to the board
    const _printXnO = (sign, slot) => {
        document.querySelector(`.${slot}`).innerHTML = `<p>${sign}</p>`
        }
    // Private method that checks if there is a winner
    const _checkIfWin = () => {
        let winOptions = [['TC', 'CC', 'BC'],
                        ['TL', 'CL', 'BL'],
                        ['TR', 'CR', 'BR'],
                        ['TL', 'TC', 'TR'],
                        ['CL', 'CC', 'CR'],
                        ['BL', 'BC', 'BR'],
                        ['TL', 'CC', 'BR'],
                        ['TR', 'CC', 'BL']]
        // Loops over possible win combinations and search for them in the array of stored player turns
        for(const win of winOptions) {
            winnerX = win.every(i => playerX.includes(i))
            winnerO = win.every(i => playerO.includes(i))
            if(winnerX) {
                alert(`Congradulations! ${players[0].playerName} WINS! `)
                document.getElementById('matchEnd').style.removeProperty('display')
                displayController.grayed()
            } else if(winnerO) {
                alert(`Congradulations! ${players[1].playerName} WINS! `)
                document.getElementById('matchEnd').style.removeProperty('display')
                displayController.grayed()
            } else if (playerX.length + playerO.length == 9) {
                alert('Match is Draw')
                document.getElementById('matchEnd').style.removeProperty('display')
                displayController.grayed()
                break
            }
        }
    }
    // Method that clears board, set turns to 0 and empties out player turn arrays
    const boardReset = () => {
        let cells = document.querySelectorAll('#cell')
        cells.forEach(cell => {
            cell.innerHTML = ''
        })
        playerO = []
        playerX = []
        turn = 0
    }

    return {addXnO, boardReset}
})()

// Module pattern that controls the flow of the fight

const displayController = (() => {
    // Method that restarts the match
    const resetMatch = () => {
        gameBoard.boardReset()
        document.getElementById('matchEnd').style.setProperty('display', 'none')
        unGrayed()
    }
    // Method that restarts the game, new player names are asked
    const restartGame = () => {
        players = []
        gameBoard.boardReset()
        document.getElementById('matchEnd').style.setProperty('display', 'none')
        document.querySelector('.players').innerHTML = 
        `
            <input type="text" placeholder="Player1" class="player1">
            <input type="text" placeholder="Player2" class="player2">
            <input type="submit" class="submit" onclick="displayController.checkPlayers(this)">
        `
    }
    // Method that styles the board how it looks when the game is not started
    const grayed = () => {
        document.querySelector('.board').style.setProperty('background-color', 'gray')
        document.querySelector('.board').style.setProperty('opacity', '0.4')
    }
    // Method that hides the input section, and undo the styles of grayed method
    const unGrayed = () => {
        document.querySelector('.board').style.removeProperty('background-color')
        document.querySelector('.board').style.removeProperty('opacity')
        document.querySelector('.players').innerHTML = 
            `<p>Player1: ${players[0].playerName}</p>
            <p>Player2: ${players[1].playerName}</p>`
         
    }
    // Method that checks if players typed their name in, game can't be started elseway
    const checkPlayers = (e) => {
        if (document.querySelector('.player1').value == '' || document.querySelector('.player2').value == '')
        alert('Please type in your names')
        else {
           players.push(player(document.querySelector('.player1').value, 'X'))
           players.push(player(document.querySelector('.player2').value, 'O'))

           unGrayed()

        }
    }
    // Private method to check if players are placing their symbols in the empty spot
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

    return {checkPlayers, resetMatch, restartGame, grayed}
})()
