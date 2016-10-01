/**
 * Created by Jiatu on 2016/10/1.
 */
var maxw = 230, minw = 100, width = 100;
var flag1, flag2;
var sr = document.getElementById("sr");
function bc() {
    sr.value = "";
    flag1 = setInterval("bcf()", 10);
}
function bd() {
    if (sr.value == "") {
        sr.value = "商品名称";
        flag2 = setInterval("bdf()", 10);
    }
}
function bcf() {
    sr.style.width = width + "px";
    sr.style.marginLeft = (maxw - width) + "px";
    width++;
    if (width > maxw) {
        clearInterval(flag1);
    }
}
function bdf() {
    sr.style.width = width + "px";
    sr.style.marginLeft = (maxw - width) + "px";
    width--;
    if (width < minw) {
        clearInterval(flag2);
    }
}