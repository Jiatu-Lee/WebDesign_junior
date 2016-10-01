/**
 * Created by Jiatu on 2016/10/1.
 */
function handleLoad() {
    document.images[0].onerror = function () {
        alert("载入图片时发生错误！");
    };
    setTimeout("document.images[0].src = 'jiatu.ico';", 1000);
    setTimeout("document.images[0].src = 'images/jiatu.ico';", 4500);
}
//通过document.images[0]来获得页面中的第一个图片对象。
//setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。

//图片jiatu.ico存放于文件夹images中，设置src  = "jiatu.ico"时，找不到文件，载入错误。
//设置src  = "images/jiatu.ico"时，能够正确载入并正常显示。