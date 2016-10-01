/**
 * Created by Jiatu on 2016/9/21.
 */
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

/*
 visibility属性用来确定元素是显示还是隐藏，visible表示显示，hidden表示隐藏。
 当visibility被设置为"hidden"的时候，元素虽然被隐藏了，但它仍然占据它原来所在的位置。
 display被设置：none，这时元素实际上就从页面中被移走，它下面所在的元素就会被自动跟上填。*/


/*
 onabort 	图像的加载被中断。
 onblur 	元素失去焦点。
 onchange 	域的内容被改变。
 onclick 	当用户点击某个对象时调用的事件句柄。
 ondblclick 	当用户双击某个对象时调用的事件句柄。
 onerror 	在加载文档或图像时发生错误。
 onfocus 	元素获得焦点。
 onkeydown 	某个键盘按键被按下。
 onkeypress 	某个键盘按键被按下并松开。
 onkeyup 	某个键盘按键被松开。
 onload 	一张页面或一幅图像完成加载。
 onmousedown 	鼠标按钮被按下。
 onmousemove 	鼠标被移动。
 onmouseout 	鼠标从某元素移开。
 onmouseover 	鼠标移到某元素之上。
 onmouseup 	鼠标按键被松开。
 onreset 	重置按钮被点击。
 onresize 	窗口或框架被重新调整大小。
 onselect 	文本被选中。
 onsubmit 	确认按钮被点击。
 onunload 	用户退出页面。*/
