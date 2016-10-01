/**
 * Created by Jiatu on 2016/10/1.
 */
var timer;
var h = 200;
setTimeout("close()", 3000);
var div = document.getElementById("jiatu");
function close() {
    timer = setInterval("hide()", 10);
}
function hide() {
    div.style.height = h + "px";
    h -= 1;
    if (h == -1) {
        clearInterval(timer);
    }

}