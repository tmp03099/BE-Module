const React = require("react");

function Index({ fruits }) {
  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {fruits.map((fruit, i) => {
          return (
            <li>
              The <a href={`/fruits/${i}`}> {fruit.name} </a>
              is {fruit.color}{" "}
              {fruit.readyToEat ? " It is ready to eat" : " Don't touch"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
