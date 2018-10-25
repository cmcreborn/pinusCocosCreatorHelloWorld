# 目的
建立簡單的pinus 可用連線客端sample

# 測試環境
目前Pinus 可以使用跟Pomelo相同的客端連線方式

Server side : Mac (nodeJs v8.11) / Windows Server 2016 (nodeJS v8.10)

Client: CocosCreator 2.0.4 / Html5 / iOS 12.0/ Android 8.0 (Android Studio 3.2)

pomelo plugin : https://github.com/fuhongxue/CocosCreator-Pomelo-plugin

# Server side
參照官方helloworld即可

```
pinus init ./helloworld
cd helloworld
sh npm-install.sh  # windows 下執行npm-install.bat
cd game-server
npm run build
cd dist
node app
```


# Client Side
下載 CocosCreator 2.0.4
下載 plugin : https://github.com/fuhongxue/CocosCreator-Pomelo-plugin
複製 plugin 裡的 pomelo-creator-client.js 置入 CocosCreator 專案的 Script資料夾內
於上述屬性檢查器中 導入為插件, 同時允許web 以及 允許 native
連線範例：
```javascript
var pinus = window.pomelo;
            var host = "your-server-ip-or-domain";
            var port = "3010";
            pinus.init({
                host: host,
                port: port,
                log: true
            }, function() {
            pinus.request("connector.entryHandler.entry", "hello pinus", function(data) {
                console.log(data.msg);
                that.label.string = data.msg;
                });
            });
```