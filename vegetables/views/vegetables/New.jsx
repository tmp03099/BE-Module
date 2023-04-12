const React = require("react");
function New() {
  return (
    <div>
      <h1>New Vegetable</h1>
      <form action="/vegetables" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Type: <input type="text" name="type" />
        <br />
        Is ready to eat: <input type="checkbox" name="isReadyToEat" />
        <br />
        <input type="submit" name="" value="Create Vegetable" />
      </form>
    </div>
  );
}
module.exports = New;
