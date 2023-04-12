const React = require("react");

function Index({ vegetables }) {
  return (
    <div>
      <nav>
        <a href="/vegetables/new">Create a New Vegetable</a>
      </nav>

      <h1>Index Page</h1>
      <ul>
        {vegetables.map((veggie, i) => {
          return (
            <li key={veggie._id}>
              The <a href={`/vegetables/${veggie._id}`}>{veggie.name}</a> is{" "}
              {veggie.color} type {veggie.type}
              {veggie.isReadyToEat
                ? " It is ready to eat"
                : " It is not ready to eat"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
