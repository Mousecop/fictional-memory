
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client')));








app.get('/', function(req, res) {
}); 

app.post('/', function(request,response) {})

app.delete('/', function(request,response) {})

app.put('/', function(request,response) {})

























app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));