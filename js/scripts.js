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

Space.prototype.addValue = function(value) {
  this.value = value;
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
    $("#coord" + spaceX.coord).text("O");
  }
}

var xValues = [];
var oValues = [];

function valueArray() {
  for (var i = 1; i < 10; i++) {
    if (board.findSpace(i).value === "x" && !xValues.includes(board.findSpace(i).id)) {
      xValues.push(board.findSpace(i).id);
    } else if (board.findSpace(i).value === "o" && !oValues.includes(board.findSpace(i).id)) {
      oValues.push(board.findSpace(i).id);
    }
  }
  console.log(xValues);
  console.log(oValues);
}

var coords = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];

function attachContactListeners() {

  for (var i = 0; i < 9; i++) {
    $("div.col-md-4").on("click", "p#coord" + coords[i], function() {
      if (!this.coord) {
        var coord = this.id.slice(5);
        this.coord = coord;
        var space11 = board.findSpace(coords.indexOf(coord) + 1);
        space11.addCoord(coord);
        showMark((coords.indexOf(coord)) + 1);
        if (turn === "x") {
          var value = "x";
        } else {
          var value = "o"
        }
        this.value = value;
        space11.addValue(value);
      } else {
        alert("That space is already taken!!!!")
      }
      valueArray();
      winnerIs();

    });

  }

};

function winnerIs() {
  var winPositions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
  for (var i = 0; i < 8; i++) {
    if (xValues.includes(winPositions[i][0]) && xValues.includes(winPositions[i][1]) && xValues.includes(winPositions[i][2])) {
      console.log("it fucking worked");
    }

    // if (xValues  winPositions[i]) {
    //   alert(winPositions[i]);
    // }
  }
}



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
