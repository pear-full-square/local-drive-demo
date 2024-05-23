# localdrive-demo

Leg 1 of the journey, the localdrive example revisited.
The original example is here: https://docs.pears.com/helpers/localdrive.

At the core of the __Pear__ platform is the brilliance of how it deals with data across the swarm, and on the local filesystem.  
__Pear__ implements __Hyperdrive__, a secure real-time distributed file system designed for easy P2P file sharing.  
It features a simple API that instead of mirroring POSIX APIs, captures better the core requirements of P2P file transfer.

The __localdrive__ module is an auxiliary tool of the __Hyperdrive__ family .  
It makes it easy to work with files on the local filesystem that streamline import/export flows and make it easy to mirror drives to and from the local filesystem.

This example illustrates the basic operations of __localdrive__.  
See the code in _index.js_ for details.

To run a Pear app from code, execute the command below, assuming the working folder is set to the project folder.
```bash
pear run dev .
```
