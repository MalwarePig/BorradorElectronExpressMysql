const {createWindow} = require('./app')
const {app} = require('electron')
require('./database')
require('electron-reload')(__dirname)

app.whenReady().then(createWindow)

