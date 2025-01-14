class TicTacToe {
  #symbols = ['x', 'o']

  #board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  #currentSymbol = 'x'

  #winner = null
  #isFinished = false

  constructor() {}

  _toggleSymbol() {
    const currentSymbolIndex = this.#symbols.indexOf(this.#currentSymbol)
    this.#currentSymbol = this.#symbols[(currentSymbolIndex + 1) % 2]
  }

  _checkWinner() {
    let res = null

    //-------Check Rows--------
    this.#board.forEach(row => {
      this.#symbols.forEach(symbol => {
        if (row.every(value => value === symbol)) {
          res = symbol
        }
      })
    })

    //-------Check Columns-------
    const col1 = [this.#board[0][0], this.#board[1][0], this.#board[2][0]]
    const col2 = [this.#board[0][1], this.#board[1][1], this.#board[2][1]]
    const col3 = [this.#board[0][2], this.#board[1][2], this.#board[2][2]]

    const columns = [col1, col2, col3]

    columns.forEach(col => {
      this.#symbols.forEach(symbol => {
        if (col.every(value => value === symbol)) {
          res = symbol
        }
      })
    })

    //-------Check Diagonals-------
    const diag1 = [this.#board[0][0], this.#board[1][1], this.#board[2][2]]
    const diag2 = [this.#board[2][0], this.#board[1][1], this.#board[0][2]]

    const diagonals = [diag1, diag2]

    diagonals.forEach(diag => {
      this.#symbols.forEach(symbol => {
        if (diag.every(value => value === symbol)) {
          res = symbol
        }
      })
    })

    return res
  }

  getCurrentPlayerSymbol() {
    return this.#currentSymbol
  }

  nextTurn(row, col) {
    if (this.#board[row][col] === null) {
      this.#board[row][col] = this.#currentSymbol
      this._toggleSymbol()
      this.#winner = this._checkWinner()

      if (this.#winner !== null || this.noMoreTurns() === true) {
        this.#isFinished = true
      }
    }
  }

  isFinished() {
    return this.#isFinished
  }

  getWinner() {
    return this.#winner
  }

  noMoreTurns() {
    return !this.#board.flat().includes(null)
  }

  isDraw() {
    return this.noMoreTurns() === true && this.#winner === null
  }

  getFieldValue(row, col) {
    return this.#board[row][col]
  }
}

module.exports = TicTacToe
