const deepEqual = require("assert").deepEqual;
const { generateCartesianSquare, 
  generateCartesianProduct,
  justifyLength,
  isNotOrigin, 
  addPositions} = require("../src/util.js");


describe(" Test generateCartesianProduct",function() {
  it("should return array of cartesian product of two given sets",function() {
    deepEqual(generateCartesianProduct([1],[0]),[[1,0]]);
    deepEqual(generateCartesianProduct([],[]),[]);
    deepEqual(generateCartesianProduct([-1,1],[2,0]),[[-1,2],[-1,0],[1,2],[1,0]]);
  });
});

describe(" Test generateCartesianSquare",function() {
  it("should return array of cartesian product of a given set",function() {
    deepEqual(generateCartesianSquare([1]),[[1,1]]);
    deepEqual(generateCartesianSquare([-2]),[[-2,-2]]);
    deepEqual(generateCartesianSquare([-1,1]),[[-1,-1],[-1,1],[1,-1],[1,1]]);
  });
});

describe(" Test addPositions",function() {
  it("should return array of addPositionsition of respective elements of two given arrays",function() {
    deepEqual(addPositions([1,4],[2,3]),[3,7]);
    deepEqual(addPositions([-2,1],[2,3]),[0,4]);
    deepEqual(addPositions([-1,1],[3,4]),[2,5]);
  });
});

describe(" Test isNotOrigin",function() {
  it("should return array not including [0,0] ",function() {
    deepEqual(isNotOrigin([0,0]),false);
    deepEqual(isNotOrigin([-2,1]),true);
  });
});

describe("justifyLength" , function(){
  it("should return justified text " , function(){
    deepEqual(justifyLength("1",3),"1  ");
    deepEqual(justifyLength("14",3),"14 ");
  });
});

