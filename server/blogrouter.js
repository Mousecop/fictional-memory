const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {BlogPosts} = require('../model');

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

router.delete('/:id', function(req,res) {
	BlogPosts.delete(req.params.id);
	console.log(`Im deleting yo ${req.params.id}`);
	res.status(204).end();
});

router.put('/:id', jsonParser, function(req,res) {
	const requiredFields = ['title', 'content', 'author'];
	for (let i = 0; i < requiredFields.length; i++) {
	    const field = requiredFields[i];
	    if (!(field in req.body)) {
	        const message = `Missing \`${field}\` in request body`
	        console.error(message);
	        return res.status(400).send(message);
	    }
	}
	if (req.params.id !== req.body.id) {
    	const message = (
      		`Request path id (${req.params.id}) and request body id `
      		`(${req.body.id}) must match`);
    	console.error(message);
   		return res.status(400).send(message);
  	}
  	console.log(`Updating shopping list item \`${req.params.id}\``);
  	const updatedItem = BlogPosts.update({
    	id: req.params.id,
    	title: req.body.title,
    	content: req.body.content,
    	author: req.body.author
 	});
  res.status(204).json(updatedItem);
})



module.exports = router;