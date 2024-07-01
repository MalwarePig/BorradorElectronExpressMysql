const {BrowserWindow,ipcMain} = require ('electron')

ipcMain.on('PruebaIPC', (event, arg) => {
    console.log(arg)
})


function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    //win.maximize();
    win.loadFile('src/ui/index.html')
    win.webContents.openDevTools();

    win.webContents.on('did-finish-load',()=>{//Al terminar de cargar mandar un msj al front
        win.webContents.send('dataFromServer','Holas')
    })

    ipcMain.on('dataFromWeb',(event,data) =>{
        console.log(data)
    })

   
}

function AlertandoCompa() {
    console.log("ejecutando proceso desde ui")
}


module.exports = {
    createWindow,AlertandoCompa
}

