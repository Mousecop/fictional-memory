const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should()
const {app, runServer, closeServer} = require('../server');
const {BlogPosts} = require('../model');

chai.use(chaiHttp);



