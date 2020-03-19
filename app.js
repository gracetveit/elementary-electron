var electron = require('electron')

electron.app.on('ready', function () {
    var mainWindow = new electron.BrowserWindow({width:600, height: 800})
    // Creates a mainwondow with a fixed width and height
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    //Indside the window, loads a url with index.html.
})