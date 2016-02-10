'use strict';

let chai = require("chai").expect()
let chaiHttp = require("chai-http");
let request = require("superagent");
let testData = require("../testDataBase/dataBase");

let app = require("../../server");

chai.use(chaiHttp);

describe('Create Legislator', () => {
  it('Should create a new legislator Steve Smith', done => {
    chaiApp.post('/legislators')
    .send(testData.testData1)
    .end((err, resp) => {
      expect(err).to.be.null;
      expect(resp).not.to.be.null;
      expect(resp).to.be.an('object')
      expect(resp.data.id).to.exist;
      expect(resp.data.name).to.equal('Steve Smith')
    })
  })
})


let expect = chai.expect;
let chaiApp = chai.request(app);
