# OpenFin examples: Notifications

OpenFin allows native desktop notifications, the system-level windows which briefly appear as alerts at the bottom right of the screen, to be created and interacted with. 

To run this example you will need [Node.js](https://nodejs.org/en/download). Clone the repository, run:

```javascript
$ npm install
```
There is a simple Node/Express server which will run to host the app locally. Navigate to the root directory of the project and start the server by typing:

```javascript
$ node server
```
then launch the app in OpenFin from the command line with the [openfin-cli](https://www.npmjs.com/package/openfin-cli)

```javascript
$ npm install -g openfin-cli
$ openfin --launch --url http://localhost:5000
```
