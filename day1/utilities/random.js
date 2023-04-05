//export module
module.exports.assigned = function (a, b) {
  const random = Math.floor(Math.random() * (b - a) + 1) + a;
  return random;
};
