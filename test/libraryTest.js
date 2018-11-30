const deepEqual = require("assert").deepEqual;

const {
  makeWorld,
  makeGrid,
  generateRow,
  findNeighboursPositions,
  countAliveNeighbours,
  isValidPosition,
  findNeighbours,
  decideState,
  generateNextWorld
} = require("../src/gameLibrary.js");

describe('Test for functions in Library ', function () {
  describe("  Test makeWorld" , function(){
    it(" Should make height*width array if size is given" , function(){
      deepEqual(makeWorld([2,2]),[[0,0],[0,0]]);
      deepEqual(makeWorld([1,1]),[[0]]);
    });
  });

  describe("  Test MakeGrid" , function(){
    it("should return the grid of size same as of the length of input array" , function(){
      deepEqual(makeGrid([[0,1],[2,3]]),"|0  |1  |\n|2  |3  |");
      deepEqual(makeGrid([[0]]),"|0  |");
    });
  });

  describe("  Test generateRow" , function(){
    it("should return a row with pipes in between the elements" , function(){
      deepEqual(generateRow([0,1]),"|0  |1  |");
      deepEqual(generateRow([0]),"|0  |");
    });
  });

  describe("  Test findNeighboursPositions" , function(){
    it("should return array of positions of all neighbours of the given input position" , function(){
      let expectedOutput_0_1 = [[-1,0],[-1,1],[-1,2],[0,0],[0,2],[1,0],[1,1],[1,2]];
      let expectedOutput_1_1 = [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]];
      deepEqual(findNeighboursPositions([0,1]),expectedOutput_0_1);
      deepEqual(findNeighboursPositions([1,1]),expectedOutput_1_1);
    });
  });

  describe("  Test countAliveNeighbours" , function(){
    it("should return the number of  alive neighbours for the input position" , function(){
      let world = {list : [['1','0','0'],['1','0','0'],['1','0','0']], size : 3};
      deepEqual(countAliveNeighbours(world.list,[1,1]),3);
      deepEqual(countAliveNeighbours(world.list,[0,0]),1);
      deepEqual(countAliveNeighbours(world.list,[1,0]),2);
      deepEqual(countAliveNeighbours(world.list,[2,2]),0);
    });
  });

  describe("  Test isValidPosition" , function(){
    it("should return true if the position is valid in the world", function(){
      let world = [['1','0','0'],['1','0','0'],['1','0','0']];
      deepEqual(isValidPosition(world,[1,4]),false);
      deepEqual(isValidPosition(world,[1,1]),true);
      deepEqual(isValidPosition(world,[0,-1]),false);
      deepEqual(isValidPosition(world,[2,2]),true);
    });
  });

  describe("  Test findNeighbours" , function(){
    it("should return an array of neighbours for the input position" , function(){
      let world = [['1','0','0'],['1','0','0'],['1','0','0']];
      deepEqual(findNeighbours(world,[1,1]),['1','0','0','1','0','1','0','0']);
      deepEqual(findNeighbours(world,[0,2]),['0','0','0']);
      deepEqual(findNeighbours(world,[0,1]),['1','0','1','0','0']);
    });
  });

  describe("  Test decideState" , function(){
    it("should return next state of the cell according to the rules" , function(){
      deepEqual(decideState(3,1),1);
      deepEqual(decideState(2,1),1);
      deepEqual(decideState(1,1),0);
      deepEqual(decideState(3,0),1);
      deepEqual(decideState(2,0),0);
      deepEqual(decideState(4,0),0);
      deepEqual(decideState(4,1),0);
    });
  });

  describe("  Test generateNextWorld" , function(){
    it("should return next world according to the rules" , function(){
      let worldDetails = {world : [['1','0','0'],['1','0','0'],['1','0','0']], dimensions : [3,3]};
      deepEqual(generateNextWorld(worldDetails),[['0','0','0'],['1','1','0'],['0','0','0']]);
    });
  });
}); 
