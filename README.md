# Basic XSS Server
For educational purposes only.

### Prerequisites
IP and HTTP modules are installed into the node modules folder of the package, but in case you would remove them:

```
npm i ip
```

```
var ip = require('ip')
var http = require('http')
```
## Run

```
var xss = require('basic-xss-server');

xss.StartXSS();
```
