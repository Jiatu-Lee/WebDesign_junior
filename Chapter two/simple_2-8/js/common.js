/**
 * Created by Jiatu on 2016/10/1.
 */
function changeBox() {
    var iWidth = Math.floor(Math.random() * 501) + 100;
    var iHeight = Math.floor(Math.random() * 501) + 100;
    var colorValue = Math.floor(Math.random() * 900) + 100;
    var jiatu = document.getElementById("jiatu");
    jiatu.style.width = iWidth + "px";
    jiatu.style.height = iHeight + "px";
    jiatu.style.backgroundColor = "#" + colorValue;
    jiatu.innerHTML = "宽度：" + iWidth + "px<br/>高度：" + iHeight + "px<br/>颜色：#" + colorValue;

}
//Math.random() [0,1)左包含（包头不包尾）。