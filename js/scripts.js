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

//Create find contact method using object id to be used in UI logic.
Board.prototype.findSpace = function(id) {
  for (var i=0; i< this.spaces.length; i++) {
    if (this.spaces[i]) {
      if (this.spaces[i].id == id) {
        return this.spaces[i];
        }
      }
    };
  return false;
};

//Business logic for space objects ------------

//constructor for space object
function Space(value, coord) {
  this.value = value;
  this.coord;
}

Space.prototype.addCoord = function(coord) {
  this.coord = (coord);
}

//User interface logic --------
var board = new Board();


// Assign 9 spaces to board
for (i = 0; i < 9; i++) {
  var newSpace = new Space("");
  board.addSpace(newSpace);
}

// Show X on spaces
function showX(spaceId) {
  var spaceX = board.findSpace(spaceId);
  $("#coord" + this.coord).text("X");
}

function attachContactListeners() {
  $("div.col-md-4").on("click", "p#coord11", function() {
    var coord = "p#coord11".substr(-2);
    this.coord = coord;
    var space11 = board.findSpace(1);
    console.log(space11);
    space11.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord12", function() {
    var coord = "p#coord12".substr(-2);
    this.coord = coord;
    var space12 = board.findSpace(2);
    console.log(space12);
    space12.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord13", function() {
    var coord = "p#coord13".substr(-2);
    this.coord = coord;
    var space13 = board.findSpace(3);
    console.log(space13);
    space13.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord21", function() {
    var coord = "p#coord21".substr(-2);
    this.coord = coord;
    var space21 = board.findSpace(4);
    console.log(space21);
    space21.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord22", function() {
    var coord = "p#coord22".substr(-2);
    this.coord = coord;
    var space22 = board.findSpace(5);
    console.log(space22);
    space22.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord23", function() {
    var coord = "p#coord23".substr(-2);
    this.coord = coord;
    var space23 = board.findSpace(6);
    console.log(space23);
    space23.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord31", function() {
    var coord = "p#coord31".substr(-2);
    this.coord = coord;
    var space31 = board.findSpace(7);
    console.log(space31);
    space31.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord32", function() {
    var coord = "p#coord32".substr(-2);
    this.coord = coord;
    var space32 = board.findSpace(8);
    console.log(space32);
    space32.addCoord(coord);
    showX(this.id);
  });

  $("div.col-md-4").on("click", "p#coord33", function() {
    var coord = "p#coord33".substr(-2);
    this.coord = coord;
    var space33 = board.findSpace(9);
    console.log(space33);
    space33.addCoord(coord);
    showX(this.id);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#game-board").click(function(event) {
    event.preventDefault();

    console.log(board);
  });
});
