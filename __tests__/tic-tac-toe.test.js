import { Space } from "./../src/space.js";
import { Board } from "./../src/board.js";

describe('Space', () => {
  var newSpace = new Space();

  test('create object of type Space with a value of x', () => {
    newSpace.addValue("x");
    expect(newSpace.value).toEqual("x");
  });

  test('create object of type Space with a coordinate', () => {
    newSpace.addCoord("11");
    expect(newSpace.coord).toEqual("11");
  });

});

describe('Board', () => {
  var newBoard = new Board();
  var newSpace = new Space();
  newSpace.addValue("x");

  test('create object of type Board with a space in it', () => {
    newBoard.addSpace(newSpace);
    expect(newBoard.spaces[0]).toEqual(newSpace);
    console.log(newBoard.spaces[0]);
  });

  test('assign id to space in board', () => {
    newBoard.addSpace(newSpace);
    newBoard.assignId();
    expect(newBoard.spaces[0].id).toEqual(newBoard.currentId - 1);
    console.log(newBoard.currentId);
  });

  test('locate the id to the correct space', () => {
    newBoard.addSpace(newSpace);
    newBoard.assignId();
    newBoard.findSpace(newSpace.id);
    expect(newBoard.spaces[0].value).toEqual(newSpace.value);
  });
});
