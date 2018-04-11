'use strict';

//setInterval("text.style.opacity^=1",500) //500ms毎に切り替え

// Electronのモジュール
const electron = require("electron");

// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    "transparent": true, //透明度変更
    "frame": false,     // 枠の無いウィンドウ
    "resizable": false,  // ウィンドウのリサイズを禁止
    "alwaysOnTop":true //常に最前面表示
  });
  // 透明な部分のマウスのクリックを検知させない
  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
