var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
const { should } = require('chai');

chai.use(chaiHttp);

describe('Test login route', function () {
    it("it should have a 404 status code as it doesn't exist", function (done) {
        chai.request('http://localhost:8084')
            .get('/login')
            .end(function (err, res) {
                assert.equal(res.status, 404);
                done();
            });
    });
});

describe('Test the sign-up route', function () {
    it("it should have a 200 status code", function (done) {
        chai.request('http://localhost:8084')
            .get('/signup')
            .end(function (err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
});

describe('Test the access route', function () {
    it("it should have a response status of more than 1", function (done) {
        chai.request('http://localhost:3000')
            .get('/access')
            .end(function (err, res) {
                assert.equal(res.data.length, 1);
                done();
            });
    });
});
