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
function Space() {

}

Space.prototype.addCoord = function(coord) {
  this.coord = (coord);
}

//User interface logic --------
var board = new Board();

var turn = "x";

// Assign 9 spaces to board
for (i = 0; i < 9; i++) {
  var newSpace = new Space();
  board.addSpace(newSpace);
}

// Show X on spaces
function showMark(id) {
  var spaceX = board.findSpace(id);
  console.log(turn);
  if (turn === "x") {
    $("#coord" + spaceX.coord).text("X");
  } else {
    console.log("O");
    $("#coord" + spaceX.coord).text("O");
  }
}



var coords = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];

function attachContactListeners() {

  for (var i = 0; i < 9; i++) {
    $("div.col-md-4").on("click", "p#coord" + coords[i], function() {
      console.log(i);
      var coord = this.id.slice(5);
      this.coord = coord;
      var space11 = board.findSpace(coords.indexOf(coord) + 1);
      space11.addCoord(coord);
      showMark((coords.indexOf(coord)) + 1);

    });

  }





  // $("div.col-md-4").on("click", "p#coord11", function() {
  //   var coord = "p#coord11".substr(-2);
  //   this.coord = coord;
  //   var space11 = board.findSpace(1);
  //   space11.addCoord(coord);
  //   showMark(1);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord12", function() {
  //   var coord = "p#coord12".substr(-2);
  //   this.coord = coord;
  //   var space12 = board.findSpace(2);
  //   space12.addCoord(coord);
  //   showMark(2);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord13", function() {
  //   var coord = "p#coord13".substr(-2);
  //   this.coord = coord;
  //   var space13 = board.findSpace(3);
  //   space13.addCoord(coord);
  //   showMark(3);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord21", function() {
  //   var coord = "p#coord21".substr(-2);
  //   this.coord = coord;
  //   var space21 = board.findSpace(4);
  //   space21.addCoord(coord);
  //   showMark(4);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord22", function() {
  //   var coord = "p#coord22".substr(-2);
  //   this.coord = coord;
  //   var space22 = board.findSpace(5);
  //   space22.addCoord(coord);
  //   showMark(5);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord23", function() {
  //   var coord = "p#coord23".substr(-2);
  //   this.coord = coord;
  //   var space23 = board.findSpace(6);
  //   space23.addCoord(coord);
  //   showMark(6);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord31", function() {
  //   var coord = "p#coord31".substr(-2);
  //   this.coord = coord;
  //   var space31 = board.findSpace(7);
  //   space31.addCoord(coord);
  //   showMark(7);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord32", function() {
  //   var coord = "p#coord32".substr(-2);
  //   this.coord = coord;
  //   var space32 = board.findSpace(8);
  //   space32.addCoord(coord);
  //   showMark(8);
  // });
  //
  // $("div.col-md-4").on("click", "p#coord33", function() {
  //   var coord = "p#coord33".substr(-2);
  //   this.coord = coord;
  //   var space33 = board.findSpace(9);
  //   space33.addCoord(coord);
  //   showMark(9);
  // });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#game-board").click(function(event) {
    event.preventDefault();
    if (turn === "x") {
      turn = "o";
    } else {
      turn = "x";
    }
    console.log(board);
  });
});
