'use strict';
let chai            = require("chai"),
    chaiHttp        = require("chai-http"),
    testDB          = require("./testDataBase/dataBase"),
    respDataBase    = require('./testDataBase/respDataBase'),
    app             = require("../../server.js");

chai.use(chaiHttp);

let expect = chai.expect;
let chaiApp = chai.request(app);


describe("Creating Legislators", () => {
  it('Should create the legislator Karen Doe', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData3)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.have.status(200);
      expect(resp.body).to.be.an("object");
      expect(resp.body).to.deep.equal(respDataBase.testData3);
      done();
    })
  })

  it('Should create the legislator Steve Smith', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData4)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.have.status(200);
      expect(resp.body).to.be.an("object");
      expect(resp.body).to.deep.equal(respDataBase.testData4);
      done();
    })
  })

  it('Should create the legislator Jane Doe', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData5)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.have.status(200);
      expect(resp.body).to.be.an("object");
      expect(resp.body).to.deep.equal(respDataBase.testData5);
      done();
    })
  })

  it('Should fail to create the legislator given no data', done => {
    chaiApp.post('/legislators')
    .send()
    .end((err, resp) => {
      expect(err).to.exist;
      expect(resp).to.have.status(400);
      expect(resp.text).to.be.a("string");
      expect(resp.text).to.equal("No legislator or incomplete provided.");
      done();
    })
  })

  it('Should fail to create the legislator given incomplete data', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData6)
    .end((err, resp) => {
      expect(err).to.exist;
      expect(resp).to.have.status(400);
      expect(resp.text).to.be.a("string");
      expect(resp.text).to.equal("No legislator or incomplete provided.");
      done();
    })
  })

  it('Should fail to create the legislator given wrong data keys', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData6)
    .end((err, resp) => {
      expect(err).to.exist;
      expect(resp).to.have.status(400);
      expect(resp.text).to.be.a("string");
      expect(resp.text).to.equal("No legislator or incomplete provided.");
      done();
    })
  })

  it('Should fail to create the duplicate legislator', done => {
    chaiApp.post('/legislators')
    .send(testDB.testData5)
    .end((err, resp) => {
      expect(err).to.exist;
      expect(resp).to.have.status(400);
      expect(resp.text).to.be.a("string");
      expect(resp.text).to.equal("Duplicate Entry");
      done();
    })
  })

})

describe("Get legislators by their ID.", () => {
  it('Should get the legislator John Smith ', done => {
    chaiApp.get('/legislators/1')
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.have.status(200);
      expect(resp.body).to.be.an('object');
      expect(resp.body).to.deep.equal(respDataBase.testData1)
      done();
    })
  })

  it('Should get the legislator Jane Smith ', done => {
    chaiApp.get('/legislators/2')
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.have.status(200);
      expect(resp.body).to.be.an('object');
      expect(resp.body).to.deep.equal(respDataBase.testData2)
      done();
    })
  })

  // relies on the post, Karen post fails then this will fail.
  it('Should get the legislator Karen Doe ', done => {
    chaiApp.get('/legislators/3')
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).to.have.status(200);
      expect(resp.body).to.be.an('object');
      expect(resp.body).to.deep.equal(respDataBase.testData3)
      done();
    })
  })

  it('Should fail to get a legislator by ID: Taco', done => {
    chaiApp.get('/legislators/taco')
    .end((err, resp) => {
      expect(err).to.be.exist;
      expect(resp).to.have.status(400);
      expect(resp.text).to.equal("No legislators in the Database or none found.");
      done();
    })
  })

  it('Should fail to get a legislator by ID: 235325', done => {
    chaiApp.get('/legislators/235325')
    .end((err, resp) => {
      expect(err).to.be.exist;
      expect(resp).to.have.status(400);
      expect(resp.text).to.equal("No legislators in the Database or none found.");
      done();
    })
  })

})
