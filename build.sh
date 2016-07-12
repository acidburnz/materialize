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

echo "Build Dist"
echo "Download meterial design icons"
if [ -e "fonts/Material-Design-Icons.woff2" ]; then
  rm fonts/Material-Design-Icons.woff2
fi
wget -O fonts/Material-Design-Icons.woff2 https://github.com/google/material-design-icons/blob/master/iconfont/MaterialIcons-Regular.woff2

echo "Copy fonts to dist"
if [ ! -d "dist/fonts" ]; then
  mkdir dist/fonts
fi
cp fonts/* -R dist/fonts/

echo "Copy JS"
if [ ! -d "dist/js" ]; then
  mkdir dist/js
fi
cp bin/material*.js dist/js/

echo "Copy CSS"
if [ ! -d "dist/css" ]; then
  mkdir dist/css
fi
cp bin/material*.css dist/css

