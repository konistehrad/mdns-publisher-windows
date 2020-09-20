const bonjour = require('bonjour')();
const package = require('./package.json');
const services = package.services;

for(const service of services) {
  console.log(`Publishing service ${service.name} of type ${service.type} on port ${service.port}...`);
  bonjour.publish(service);
}

// actually receive SIGINT on Windows ... :/ 
if (process.platform === "win32") {
  var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

process.on("SIGINT", function () {
  console.log(`Received SIGINT; unpublishing services...`);
  bonjour.unpublishAll(function() {
    //graceful shutdown
    console.log(`Service unpub complete, exiting.`);
    process.exit();
  });
});