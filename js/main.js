(function(globals){ // IIFE: Immediately Invoked Function Expression
})(window || module && module.exports || this);

(function(globals){ // IIFE: Immediately Invoked Function Expression
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [
    [ ([6][3]), [6][2], [6][4], [7][5], ([7][6]), ([0][6]), ([1][4]), ([1][3]), ([0][5]) ],
    [ ([4][3]), ([4][2]), ([5][6]), ([6][6]), ([5][5]), ([2][5]), ([2][4]), ([3][3]), ([1][5]) ]
  ]; // END moves

  // var from = moves[0];
  // var to = moves[1];

  moves.forEach(function(item, index, array) {
    console.log(moves[0]);
  });

  // var current = moves[0];

    //globals is an object. globals.game is assigned a dictionary
  // You don't need to understand `globals` yet...
  var game = (globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();

      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      // Doesn't this seem to be missing something?
      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      // Another good place for code...
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
  //  key:value
    tracer: function(){
      var bullet = '';
      //creates a block of statements
      for ( var rank = 0; rank < board.length; rank++ ){
        console.log(rank, board[rank]);
        console.log('tracer function bullet');
      }

      for ( rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! .
     ..and remove this comment.
     */


    applyMove: function(from, to){

      board.moves[1] = board.moves[0];
      board.moves[0] = ' ';

      //creates a block of statements
      for ( var rank = 0; rank < board.length; rank++ ){
        console.log(rank, board[rank]);
        console.log('tracer function bullet');
      }

      for ( rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return moves[1];
    },



    // END applyMove
  }); // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
