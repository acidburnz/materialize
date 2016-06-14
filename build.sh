#!/bin/bash

echo "Build Materialize"
node extras/requirejs/r.js -o app.build.js

echo "Build Materialize Min"
node extras/requirejs/r.js -o app.min.build.js

echo "Build sass"
sass  sass/materialize.scss:bin/materialize.css

echo "Build sass Min"
sass -t compressed sass/materialize.scss:bin/materialize.min.css

echo "Look at bin directory for result"
