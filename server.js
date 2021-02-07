const express = require('express');
const app = express();

// set the view engine with ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening to port 5000...'));
