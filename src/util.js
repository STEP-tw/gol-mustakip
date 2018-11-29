const generateCartesianProduct = function(set1,set2){
  let cartesianProduct = [];
  set1.forEach((element1) => {
    set2.forEach((element2) => {
      cartesianProduct.push([ element1 , element2]);
    });
  });
  return cartesianProduct;
}

const generateCartesianSquare = function(set){
  return generateCartesianProduct(set,set);
}

const add = function(set1,set2){
  return [set1[0]+set2[0],set1[1]+set2[1]];
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
  add,
  justifyLength,
  isNotOrigin };
