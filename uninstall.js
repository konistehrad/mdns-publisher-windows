const svc = require('./service.js').service;

svc.on('alreadyuninstalled', function(){
  console.log(`Service not currently installed; nothing to do! :)`);
});

svc.on('uninstall', function(){
  console.log(`Uninstall complete. Exists reports: ${svc.exists}`);
});

svc.uninstall();
