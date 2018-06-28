const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    // 加载index.html
    mainWindow.loadFile('index.html')

    // 打开开发者工具
    mainWindow.webContents.openDevTools()

    // 监听window关闭事件
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if(mainWindow === null) {
        createWindow()
    }
})
