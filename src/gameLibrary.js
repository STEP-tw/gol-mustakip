const { generateCartesianSquare, 
  generateCartesianProduct,
  justifyLength,
  isNotOrigin, 
  add} = require("./util.js");

const findAliveposition = function(worldDetails){
  let count = 0;
  let alivePosition = [];
  let height = worldDetails.dimensions[0];
  let width = worldDetails.dimensions[1];
  let set1 = new Array(height).fill(1).map(element => count++);
  count = 0;
  let set2 = new Array(width).fill(1).map(element => count++);
  set1.forEach((row) => {
    set2.forEach((column) => {
      worldDetails.world[row][column] == 1 && alivePosition.push([row,column]);
    });
  });
  return alivePosition;
}

const updateWorld = function(world,currGeneration) {
  currGeneration.map(position => world[position[0]][position[1]] = "1");
  return world;
}

const extractSize = function(bounds) {
  let height =  bounds.bottomRight[0] - bounds.topLeft[0];
  let width = bounds.bottomRight[1] - bounds.topLeft[1];
  return [height,width];
}

const makeWorld = function(dimensions){
  let height = dimensions[0];
  let width = dimensions[1];
  let world  = new Array(height).fill("1");
  world = world.map( x => new Array(width).fill("*").map(x => 0));
  return world;
}

const makeGrid = function(world){
  let gridArray = [];
  for(index = 0; index < world.length ; index++){
    gridArray[index] = generateRow(world[index]);
  }
  return gridArray.join("\n") ;
}

const generateRow = function(world){
  world =  world.map( x => justifyLength(x,3)+"|");
  return "|"+world.join("");
}

const findNeighboursPositions = function(currPosition){
  return generateCartesianSquare([-1,0,1]).
    filter(isNotOrigin).map(delta => add(delta,currPosition));
}

const isValidPosition = function(world,currPosition){
  let row = currPosition[0];
  let column = currPosition[1];
  return (world[row] != undefined && world[column] != undefined)
}

const findNeighbours = function(world,currPosition){ 
  let neighboursPositions = findNeighboursPositions(currPosition);
  let neighbours = [];
  return neighboursPositions.filter(isValidPosition.bind(null,world)).
    map(position => world[position[0]][position[1]]);
}

const countAliveNeighbours = function(list,position){
  return findNeighbours(list,position).filter( x => x == 1).length;
}

const decideState = function(length,cell){
  let rules = [ '0','0',cell,'1','0','0','0','0','0' ];
  return rules[length];
}

const generateNextWorld = function(worldDetails) {
  let nextWorld = makeWorld(worldDetails.dimensions);
  for(let row = 0; row < worldDetails.dimensions[0]; row++) {
    for(let column = 0; column < worldDetails.dimensions[1]; column++) {
      let cell = worldDetails.world[row][column];
      let aliveNeighboursCount = countAliveNeighbours(worldDetails.world,[row,column]);
      nextWorld[row][column] = decideState(aliveNeighboursCount,cell);
    }
  }
  return nextWorld; }

module.exports = { makeGrid ,
  makeWorld ,
  findNeighbours,
  findAliveposition,
  decideState,
  findNeighboursPositions,
  extractSize,
  updateWorld,
  isValidPosition,
  countAliveNeighbours,
  generateNextWorld,
  generateRow};

