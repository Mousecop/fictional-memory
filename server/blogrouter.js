const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {BlogPosts} = require('./model');





// Sample DATA 

BlogPosts.create('How to be healthy', 'Yo just eat apples',' health dude');
BlogPosts.create('How NOT to be health', 'Yo just eat crap',' Lazy dude');




router.get('/', function(req, res) {
	res.json(BlogPosts.get());
}); 



router.post('/', jsonParser, function(req,res) {
	const requiredFields = ['title', 'content', 'author'];
  	for (let i=0; i<requiredFields.length; i++) {
    	const field = requiredFields[i];
    	if (!(field in req.body)) {
      		const message = `Missing \`${field}\` in request body`
     		console.error(message);
      		return res.status(400).send(message);
    	}

	}
  const item = BlogPosts.create(req.body.title, req.body.content, req.body.author);
  	res.status(201).json(item);
});









router.delete('/', function(request,response) {})

router.put('/', function(request,response) {})



module.exports = router;