//Business logic for Board----------
//create an empty board that takes an array of space objects that hold data
function Board() {
  this.spaces = [];
  this.currentId = 0;
  this.coordinate = [1, 1]
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
function Space(value) {
  this.value = value;
  this.column = column;
  this.row = row;
}




//User interface logic --------
var board = new Board();


for (i = 0; i < 9; i++) {
  var space = new Space(null);
  board.addSpace();
}
