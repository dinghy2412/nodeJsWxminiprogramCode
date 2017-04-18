# 简单说明


小程序中用到了扫描二维码打开指定的小程序页面功能，微信提供了指定页面的二维码生成借口，但是返回的不是二维码的网络地址，需要服务端转存一下;用node搞了一下
[API地址](https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html)


接口需要用access_token来请求，请求access_token涉及到appid,secret就没贴出来；用下面的接口获取access_token，GET请求;懒得写代码的直接扔到浏览器获取即可；

	https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET