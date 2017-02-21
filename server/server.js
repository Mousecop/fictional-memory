
const express = require('express');
const app = express();
const path = require('path');
const blogrouter = require('./blogrouter')

app.use(express.static(path.join(__dirname, '../client')));
app.use('/blog-posts', blogrouter);

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));