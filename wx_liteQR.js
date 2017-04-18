/**
 * Created by dhy on 17/4/17.
 */
var http = require("http"),
    fs = require("fs"),
    data = {"path": "pages/homePage/homePage", "width": 430};
data = JSON.stringify(data);

//https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET    GET   获取access_token的接口
var options = {
    method: "POST",
    host: "api.weixin.qq.com",
    path: "/cgi-bin/wxaapp/createwxaqrcode?access_token=5-R9rTlaeHF9bdZPWWh-t9BefbthRfbe5idSzuOSXoSFfPcUOUcTca1QhLNjDVclBK489LX88-hUeT1kL9FV8GBR4fWY78PVxyx_OGnNbJsUEQgAAACMY",
    headers: {
        "Content-Type": 'application/json',
        'Content-Length': data.length
    }
};
var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.setEncoding("binary");
    var imgData = "";
    res.on('data', function (chunk) {
        imgData += chunk;
    });
    res.on("end", function () {
        fs.writeFile("./wx_liteQR.jpeg", imgData, "binary", function (err) {
            if (err) {
                console.log("down fail");
            }
            console.log("down success");
        });
    });
});
req.write(data);
req.end();