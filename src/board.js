//Business logic for Board----------
//create an empty board that takes an array of space objects that hold data
export function Board() {
  this.spaces = [];
  this.currentId = 0;
}

//Add space to board
Board.prototype.addSpace = function(space) {
  space.id = this.assignId();
  this.spaces.push(space);
};

//Add id data to space when added to board
Board.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Create find contact method using object id to be used in UI logic.
Board.prototype.findSpace = function(id) {
  for (var i=0; i< this.spaces.length; i++) {
    if (this.spaces[i]) {
      if (this.spaces[i].id == id) {
        return this.spaces[i];
      }
    }
  }
  return false;
};
