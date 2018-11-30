const deepEqual = require("assert").deepEqual;
const { cartesianSquare, 
  cartesianProduct,
  justifyLength,
  subtractPositions,
  isNotOrigin, 
  repeatSymbol,
  addPositions} = require("../src/util.js");

describe('Test for Util Functions', function () {
  describe("  Test cartesianProduct",function() {
    it("should return array of cartesian product of two given sets",function() {
      deepEqual(cartesianProduct([1],[0]),[[1,0]]);
      deepEqual(cartesianProduct([],[]),[]);
      deepEqual(cartesianProduct([-1,1],[2,0]),[[-1,2],[-1,0],[1,2],[1,0]]);
    });
  });

  describe("  Test cartesianSquare",function() {
    it("should return array of cartesian product of a given set",function() {
      deepEqual(cartesianSquare([1]),[[1,1]]);
      deepEqual(cartesianSquare([]),[]);
      deepEqual(cartesianSquare([-1,1]),[[-1,-1],[-1,1],[1,-1],[1,1]]);
    });
  });

  describe("  Test addPositions",function() {
    it("should return array that contains addition of respective elements of two given arrays",function() {
      deepEqual(addPositions([1,4],[2,3]),[3,7]);
      deepEqual(addPositions([-2,1],[2,3]),[0,4]);
    });
  });

  describe("  Test subtractPositions",function() {
    it("should return array that contains subtraction of respective elements of two given arrays",function() {
      deepEqual(subtractPositions([1,4],[2,3]),[-1,1]);
      deepEqual(subtractPositions([-2,1],[2,3]),[-4,-2]);
    });
  });

  describe("  Test isNotOrigin",function() {
    it("should return true if the input position is not equal to the origin position ",function() {
      deepEqual(isNotOrigin([0,0]),false);
      deepEqual(isNotOrigin([-2,1]),true);
    });
  });

  describe("  Test justifyLength" , function(){
    it("should return text justified with number of length given ", function(){
      deepEqual(justifyLength("1",3),"1  ");
      deepEqual(justifyLength("14",3),"14 ");
    });
  });

  describe("  Test repeatSymbol" , function(){
    it("should return repeated symbol for given number of times " , function(){
      deepEqual(repeatSymbol(3,"*"),"***");
      deepEqual(repeatSymbol(-2,"&"),"");
      deepEqual(repeatSymbol(0," "),"");
    });
  });
});

