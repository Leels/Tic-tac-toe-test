//Business logic for Board----------
//create an empty board that takes an array of space objects that hold data
function Board() {
  this.spaces = [];
  this.currentId = 0;
}

//Add space to board
Board.prototype.addSpace = function(space) {
  space.id = this.assignId();
  this.spaces.push(space);
}

//Add id data to space when added to board
Board.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//Business logic for space objects ------------

//constructor for space object
function Space(value, row, column) {
  this.value = value;
  this.row = row;
  this.column = column;
}


//User interface logic --------
var board = new Board();


// Assign 9 spaces to board
for (i = 0; i < 9; i++) {
  var newSpace = new Space("");
  board.addSpace(newSpace);
}

$(document).ready(function() {
  // event.preventDefault();
  console.log(board);
});
