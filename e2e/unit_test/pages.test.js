var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
const { should } = require('chai');

chai.use(chaiHttp);

//user credentials
const userCredentials = {
  usernam: 'Maui',
  password: 'users'
}
//now let's login the user before we run any tests
var authenticatedUser = request.agent(app);
before(function(done){
  authenticatedUser
    .post('/login')
    .send(userCredentials)
    .end(function(err, response){
      expect(response.statusCode).to.equal(200);
      expect('Location', '/profile');
      done();
    });
});

// test the home page route
describe('Test the home page route', function () {
  it("it should have a 200 status code", function (done) {
      chai.request('http://localhost:8084')
          .get('/')
          .end(function (err, res) {
              assert.equal(res.status, 200);
              done();
          });
  });
})

// test profile page route
describe('Test the profile page route', function () {
    it("it should have a 200 status code", function (done) {
        chai.request('http://localhost:8084')
            .get('/profile')
            .end(function (err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
})

// test the profile page route if logged in
describe('Test the profile page route if logged in', function () {
    it("it should have a 200 status code", function (done) {
        chai.request('http://localhost:8084')
            .get('/profile')
            .end(function (err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
})


// test the search page route
describe('Test the search page route', function () {
    it("it should have a 200 status code", function (done) {
        chai.request('http://localhost:8084')
            .get('/search?keyword=hello')
            .end(function (err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
})
