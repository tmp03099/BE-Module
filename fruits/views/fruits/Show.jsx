const React = require("react");

function Show({ fruit }) {
  console.log(fruit);
  return (
    <div>
      <h1>Hello Show</h1>
      <p>
        The {fruit.name} is {fruit.color}
        {fruit.readyToEat ? " It's ready to eat" : " don't touch"}
      </p>
    </div>
  );
}

module.exports = Show;
