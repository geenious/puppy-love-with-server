const express = require('express');

const app = express();

app.use(express.static('public'));

// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.listen(3001, function() {
  console.log('Listening to port 3001');
});
