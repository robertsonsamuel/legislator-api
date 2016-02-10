'use strict';
let chai = require("chai");
let chaiHttp = require("chai-http");
let request = require("superagent");
let testDB = require("../testDataBase/dataBase");

chai.use(chaiHttp);

let app = require("../../server.js");
let expect = chai.expect;
let chaiApp = chai.request(app);



describe("Creating Legislators", () => {
  it('Should create the legislator John Smith', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData1)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.be.an("object");
      expect(resp.body.id).to.equal(1);
      expect(resp.body.name).to.equal("John Smith");
      expect(resp.body.state).to.equal("CA");
      expect(resp.body.district).to.equal(1);
      expect(resp.body.political_party).to.equal("republican");
      expect(resp.body.term_starts_on).to.equal("2016-09-01");
      expect(resp.body.term_ends_on).to.equal("2018-00-01");
      done();
    })
  })

  it('Should create the legislator Jane Smith', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData2)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.be.an("object");
      expect(resp.body.id).to.equal(2);
      expect(resp.body.name).to.equal("Jane Smith");
      expect(resp.body.state).to.equal("PA");
      expect(resp.body.district).to.equal(4);
      expect(resp.body.political_party).to.equal("independent");
      expect(resp.body.term_starts_on).to.equal("2016-02-01");
      expect(resp.body.term_ends_on).to.equal("2018-01-01");
      done();
    })
  })

  it('Should create the legislator Karen Doe', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData3)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.be.an("object");
      expect(resp.body.id).to.equal(3);
      expect(resp.body.name).to.equal("Karen Doe");
      expect(resp.body.state).to.equal("MA");
      expect(resp.body.district).to.equal(2);
      expect(resp.body.political_party).to.equal("democratic");
      expect(resp.body.term_starts_on).to.equal("2016-02-01");
      expect(resp.body.term_ends_on).to.equal("2018-02-01");
      done();
    })
  })

  it('Should create the legislator Steve Smith', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData4)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.be.an("object");
      expect(resp.body.id).to.equal(4);
      expect(resp.body.name).to.equal("Steve Smith");
      expect(resp.body.state).to.equal("FL");
      expect(resp.body.district).to.equal(7);
      expect(resp.body.political_party).to.equal("republican");
      expect(resp.body.term_starts_on).to.equal("2016-02-01");
      expect(resp.body.term_ends_on).to.equal("2018-02-01");
      done();
    })
  })

  it('Should create the legislator Jane Doe', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData5)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.be.an("object");
      expect(resp.body.id).to.equal(5);
      expect(resp.body.name).to.equal("Jane Doe");
      expect(resp.body.state).to.equal("CA");
      expect(resp.body.district).to.equal(8);
      expect(resp.body.political_party).to.equal("democratic");
      expect(resp.body.term_starts_on).to.equal("2016-02-01");
      expect(resp.body.term_ends_on).to.equal("2018-02-01");
      done();
    })
  })



})
