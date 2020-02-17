# cloudSkybox
a 3D interactive cloud space. Hooray!

Generating js from node modules was setup according to this tutorial:
https://www.techiediaries.com/how-to-bring-node-js-modules-to-the-browser/

## Important commands
Install browserify:
`npm install -g browserify`

generate javascript for cloudSkybox.html:
`browserify cloudSkybox.js -o csb.js`

generate javascript for index.html:
`browserify main.js -o index.js`
