/**
 * Created by Jiatu on 2016/10/1.
 */
var imgs = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg");
var i = 0;
var photo = document.getElementsByTagName("img")[0];
setInterval("change()", 2000);
function change() {
    photo.setAttribute("src", "images/" + imgs[i++]);
    if (i == imgs.length)i = 0;
}
//setAttribute方法修改html元素的属性。