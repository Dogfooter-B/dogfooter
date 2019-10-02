const express = require('express');
const WebSocket = require('ws');
const path = require('path');
const http = require('http');

/* Store the message from client */
var messageServer = [];
var factorialResult = 0;

/* Server port */
const PORT = process.env.PORT || 18091;
/* Tell express to deliver files found in this folder*/
const PUBLIC  = path.join(__dirname, 'public');

const app = express()
    .use(express.static(PUBLIC));

/* Initialize an http server */
const server = http.createServer(app);

/* Initialize the WebSocket server instance */
const wss = new WebSocket.Server({ server });

/* Server port */
server.listen(PORT, function listening() {
//    console.log('Listening on %d', server.address().port);
  });

/* On any connection */
wss.on('connection', (ws) => {
    /* Connection is OK then add an event */
    ws.on('message', (message) => {
        /* Log the received message */
        console.log(`Message received from client: ${message}`);

    });
    console.log('도그푸터 매크로 로그인에 성공했습니다.');
});

const fs = require('fs');
const pip_user_file_path = './pip-user.json';
const pip_file_path = './pip.json';
const git_file_path = './.git';
const vbs_file_path = './도그푸터 바로 실행.vbs';
let pip_user = null;

if (fs.existsSync(pip_user_file_path)) {
    pip_user = JSON.parse(fs.readFileSync(pip_user_file_path, 'utf8'));
}

if ( pip_user === null) {
    pip_user = {}
    // 처음 실행
    console.log('도그푸터 초기화 중입니다...')
    const vbs_content = `
Set WshShell = CreateObject("WScript.Shell" )
WshShell.Run "node dogfooter.js", 0
Set WshShell = Nothing
    `;
    fs.writeFile(vbs_file_path, vbs_content, 'utf8', function(e) {

    });

} else {
    console.log('업데이트 확인 중입니다...')
}

const execSync = require('child_process').execSync;
execSync('"git" pull', function(error, stdout, stderr) {
    console.log(stdout)
});

let pipJson = null;
if (fs.existsSync(pip_file_path)) {
    pipJson = JSON.parse(fs.readFileSync(pip_file_path, 'utf8'));
}

if ( pipJson ) {
    let pip = pipJson.pip;
    for ( let i = 0; i < pip.length; i++ ) {
        if ( !pip_user.hasOwnProperty(pip[i]) ) {
            pip_user[pip[i]] = true;
            pip_command = '"pip" install ' + pip[i];
            console.log(pip_command)
            execSync(pip_command, function(error, stdout, stderr) {
                console.log(stdout);
            });
        }
    }
}

fs.writeFile(pip_user_file_path, JSON.stringify(pip_user), 'utf8', function(e) {});

/* Generate a python process using nodejs child_process module */
//const spawn = require('child_process').spawn;
//child = spawn('python', ['main.py'])

const exec = require('child_process').exec;
console.log('도그푸터 매크로 실행 중입니다. 잠시만 기다려주세요.')
exec('"python" main.py', function(error, stdout, stderr) {
    console.log('python error:', error)
    console.log('python stdout:', stdout)
    console.log('python stderr:', stderr)

    process.exit()
});