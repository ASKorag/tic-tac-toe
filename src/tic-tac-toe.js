class TicTacToe {
  #currentPlayerSymbol = 'x'
  #board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  constructor() {}

  _togglePlayerSymbol() {
    if (this.#currentPlayerSymbol === 'x') {
      this.#currentPlayerSymbol = 'o'
    } else {
      this.#currentPlayerSymbol = 'x'
    }
  }

  getCurrentPlayerSymbol() {
    return this.#currentPlayerSymbol
  }

  nextTurn(row, col) {
    if (this.#board[row][col] === null) {
      this.#board[row][col] = this.#currentPlayerSymbol
      this._togglePlayerSymbol()
    }
  }

  isFinished() {}

  getWinner() {}

  noMoreTurns() {}

  isDraw() {}

  getFieldValue(row, col) {
    return this.#board[row][col]
  }
}

module.exports = TicTacToe
