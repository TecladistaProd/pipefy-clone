const fs = require('fs')
const path = require('path')

let file = fs.readFileSync(path.resolve(__dirname, 'build', 'index.html'))

file = file.toString()

file = file.replace(/\/static\//g, './static/')

fs.writeFileSync(path.resolve(__dirname, 'build', 'index.html'), file)

// src="./static/