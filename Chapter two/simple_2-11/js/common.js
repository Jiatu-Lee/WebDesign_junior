/**
 * Created by Jiatu on 2016/10/1.
 */
function changeColor() {
    document.bgColor = randomColor();
}

function randomColor() {
    var arrNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var arrFirst = "#";
    var index;
    for (var i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * 16);
        arrFirst += arrNum[index];
    }
    return arrFirst;
}
/*
 一般地颜色表示为#rrggbb
 以#开始，用光学三原色表示，r代表red，g代表green，b代表blue
 r、g、b用16进制表示
 如果r、g、b两两相同，则可以简写为#rgb
 超过6位则取前6位，之后的被忽略
 W3C组织定义了WEB标准颜色，比如red代表#FF0000，不过不建议使用这种写法，原因有二：
 1. 数量少，140种
 2. 显示的颜色跟计算机硬件，浏览器有关，不可控

 另外还有一中#ααrrggbb，α代表Alpha，表示透明度，这种写法我在其他语言中使用过，但在现在的html和css中不起作用。

 光学三原色：红绿蓝
 色彩三原色：红黄蓝
 */

