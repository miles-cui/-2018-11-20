var res = TCHttpRequest("http://localhost:8090/TotalControl/v1/login", "GET", { Authorization: "bWlsZXNfY3VpOm1hbmFnZXI=" }, "", 2000);
var ret = res.content;
print(ret);

//用TCHttpRequest发送HTTP 请求获取主控设备对象
var res = TCHttpRequest("http://localhost:8090/TotalControl/v1/devices/main?token=g22zKh3zY9s1Oe3C", "GET", {}, "", 2000);
//获取响应内容
var ret = res.content;
print(ret);