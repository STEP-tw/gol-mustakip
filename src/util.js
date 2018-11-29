const generateCartesianProduct = function(position1,position2){
  let cartesianProduct = [];
  position1.forEach((element1) => {
    position2.forEach((element2) => {
      cartesianProduct.push([ element1 , element2]);
    });
  });
  return cartesianProduct;
}

const generateCartesianSquare = function(set){
  return generateCartesianProduct(set,set);
}

const addPositions = function(position1,position2){
  return [position1[0]+position2[0],position1[1]+position2[1]];
}

const substractPositions = function(position1,position2){
  return [position1[0]-position2[0],position1[1]-position2[1]];
}

const isNotOrigin = function(position) {
  return !(position[0] == 0 && position[1] == 0);
}

const justifyLength = function(text, width) {
  let spaceWidth = width - text.toString().length;
  return text + new Array(spaceWidth).fill(' ').join('');

}

module.exports = {generateCartesianSquare,
  generateCartesianProduct,
  addPositions,
  substractPositions,
  justifyLength,
  isNotOrigin };
