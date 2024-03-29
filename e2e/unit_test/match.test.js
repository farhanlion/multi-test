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

// test the mview page route
describe('Test the mview page route', function () {
    it("it should have a 200 status code", function (done) {
        chai.request('http://localhost:8084')
            .get('/mview')
            .end(function (err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
})

// test the upload page route
describe('Test the upload page route', function () {
    it("it should have a 200 status code", function (done) {
        chai.request('http://localhost:8084')
            .get('/upload')
            .end(function (err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
})
