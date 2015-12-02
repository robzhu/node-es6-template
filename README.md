# node-es6-template
ES6/node/babel template

## Goals
* Support ES6 Stage-1 syntax
* Recompile on file changes
* Sourcemap support
* Debugging with Iron-Node

## Instructions

Clone the repo and restore dependencies
```
git clone https://github.com/robzhu/node-es6-template
cd node-es6-template
npm install
```

Debug- this will once, launch the debugger, and then rebuild whenever edits to the sources are made. You'll need to CTRL-R from Iron-Node to reload the changes.
```
grunt debug
```

Build- this transpiles the sources once
```
grunt build
```

Run from CLI- only valid after a successful build.
```
node build/index.js
```
