const {makeNoList ,
  findNeighboursPositions,
  findAliveposition,
  extractSize,
  updateWorld,
  generateNextWorld} = require("./gameLibrary.js");

const nextGeneration = function(currGeneration,bounds) {
  let dimensions = extractSize(bounds);
  let world = makeNoList(dimensions);
  world = updateWorld(world,currGeneration);
  let worldDetails = {world,dimensions};
  worldDetails.world = generateNextWorld(worldDetails);
  let alivePosition = findAliveposition(worldDetails);
  return alivePosition;
}
module.exports = {nextGeneration};
