const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should()
const {app, runServer, closeServer} = require('../server');
const {BlogPosts} = require('../model');

chai.use(chaiHttp);



describe('Blog Posts' function() {
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('Display blog posts on GET', function(){
        return chai.request(app)
            .get('/blog-posts')
            .then(function(res) {
                res.should.have.status(200);
            });
    });
});




