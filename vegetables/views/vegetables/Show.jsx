const React = require("react");

function Show({ vegetable }) {
  console.log(vegetable);
  return (
    <div>
      <h1>Show Vegetable</h1>
      <p>
        The {vegetable.name} is {vegetable.color} type {vegetable.type}
        {vegetable.isReadyToEat ? " It's ready to eat" : " don't touch"}
      </p>
    </div>
  );
}

module.exports = Show;
