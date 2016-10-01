/**
 * Created by Jiatu on 2016/9/30.
 */
for (var i = 1; i < 100; i++) {
    if (i % 7 != 0 && i % 10 != 7 && Math.floor((i / 10)) != 7) {
        document.write("<div>" + i + "</div>");
    } else {
        document.write("<div></div>");
    }
}
/*
 * %是取余
 * &&是长路与，并且的意思。
 *
 * Math 对象常用的方法
 * abs(x) 	返回数的绝对值
 * ceil(x) 	对一个数进行上舍入。
 * floor(x) 	对一个数进行下舍入。
 * max(x,y) 	返回 x 和 y 中的最高值
 * min(x,y) 	返回 x 和 y 中的最低值
 * random() 	返回 0 ~ 1 之间的随机数
 * round(x) 	把一个数四舍五入为最接近的整数
 * sqrt(x) 	返回数的平方根
 *
 * */