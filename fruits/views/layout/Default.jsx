const React = require("react");

function DefaultLayout({ title, children }) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>

      <nav>
        <a href="/fruits">Home</a>
      </nav>

      <body>
        <h1>{title}</h1>

        {children}
      </body>
    </html>
  );
}

module.exports = DefaultLayout;