const svc = require('./service.js').service;

svc.on('alreadyinstalled', function(){
  console.log(`Service already installed; nothing to do! :)`);
});

svc.on('install', function(){
  console.log(`Install complete. Exists reports: ${svc.exists}. Starting...`);
  svc.start();
});

svc.on('invalidinstallation', function() {
  console.warn('Received "invalidinstallation" message; uh oh! Please uninstall and reinstall?');
});

// Install the service.
svc.install();
