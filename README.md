# mdns-publisher-windows

A simple way to publish services via mDNS in Windows. Initially written to support SSH service publication for Windows' built-in SSH server, it can support any service your heart desires.

# Usage

First install depenencies using `npm install`.

Modify the `services` array in `package.json` to the specification listed in [bonjour](https://github.com/watson/bonjour#publishing). Then, CD into this directory and install the service:

`npm run install`

This will both install and start the service. The service will read from `package.json` at start, so to publish new services simply modify that file and restart the service.

# Uninstall

`npm run uninstall` will remove the service from the system.

# Rationale

I rely on mDNS for many services in my home network, and as such I wanted to expose SSH as an available service on a Windows machine. The C# bindings for Apple's Bonjour implementation were too clunky and I couldn't be bothered to learn how to write a Windows service from scratch. This takes care of both problems nicely.
