const package = require('./package.json');
const path = require('path');
const Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: package.name,
  description: package.description,
  script: path.join(__dirname, 'main.js'),
});

svc.on('error', function() {
  console.error('Service reports generic error, better check that out, kid!');
});

exports.service = svc;
