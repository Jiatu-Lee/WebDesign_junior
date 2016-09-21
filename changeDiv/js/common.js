/**
 * Created by Jiatu on 2016/9/21.
 */

//visibility属性用来确定元素是显示还是隐藏，visible表示显示，hidden表示隐藏。
// 当visibility被设置为"hidden"的时候，元素虽然被隐藏了，但它仍然占据它原来所在的位置。
// display被设置：none，这时元素实际上就从页面中被移走，它下面所在的元素就会被自动跟上填。
function change() {
    var div = document.getElementById("div");
    div.style.width = "300px";
}
function hide() {
    var div = document.getElementById("div");
    div.style.display = "none";
}
function show() {
    var div = document.getElementById("div");
    div.style.display = "block";
}
function strong() {
    var div = document.getElementById("div");
    div.style.border = "4px solid #ff0000";
}
function changBg() {
    var div = document.getElementById("div");
    div.style.backgroundColor = "blue";
}
function over() {
    var div = document.getElementById("div");
        div.style.display = "block";
}
function out() {
    var div = document.getElementById("div");
    div.style.display = "none";
}
