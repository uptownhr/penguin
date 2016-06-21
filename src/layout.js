module.exports = function ({renderString, bundlePath, stylePath, stateString }) {
  return `<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.fullpage/2.5.9/jquery.fullPage.min.css" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="${stylePath}" />
  </head>

<body>
  <div id='root'>${renderString}</div>
  <script>
  window.__INITIAL_STATE = ${stateString}
  </script>
  <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
  <script src="https://cdn.jsdelivr.net/jquery.fullpage/2.5.9/jquery.fullPage.min.js"></script>
  <script src="${bundlePath}"></script>
</body>
</html>`
}