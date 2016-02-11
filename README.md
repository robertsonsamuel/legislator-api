### Legislator API challenge

To install and run this assumes you have
NPM and Node.js installed.

Run the following to get started
```
git clone https://github.com/robertsonsamuel/legislator-api.git && cd legislator-api

npm install
```
Start the server by running

```
npm start
```

To run a route test for legislators route use:
```
npm run routeTest
```

This will test
- creating three new legislators
- fail to create by sending no data
- fail to create by sending invalid two times
- read two existing legislators by id
- read one created legislator by id
- fail to read a legislator that does not exist
