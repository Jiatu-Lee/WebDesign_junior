/**
 * Created by Jiatu on 2016/10/1.
 */
var urls = [
    "http://liuchenglu.com",
    "http://baidu.com",
    "http://library.neusoft.edu.cn",
    "http://campus.neusoft.edu.cn",
    "http://liuchenglu.com"
];
var rDiv = document.getElementById("random_link");
var index = Math.floor(Math.random() * urls.length);
rDiv.innerHTML = "<a href='" + urls[index] + "'>随机网址！</a>";