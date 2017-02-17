
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '../client')));






































app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));