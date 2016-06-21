module.exports = function ({renderString, bundlePath, stylePath, stateString }) {
  return `
<html>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.8.0/jquery.fullPage.css" />
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">

<link rel="stylesheet" href="${stylePath}">
<body>
<div id='root'>${renderString}</div>
<script>
window.__INITIAL_STATE = ${stateString}
</script>

<script src="${bundlePath}"></script>
</body>
</html>`
}