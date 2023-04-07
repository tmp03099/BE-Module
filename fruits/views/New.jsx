const React = require("react");
function New() {
  return (
    <div>
      <h1>New Fruit</h1>
      <form action="/fruits" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Is ready to eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create Fruit" />
      </form>
    </div>
  );
}
module.exports = New;
