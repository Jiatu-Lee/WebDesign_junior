/**
 * Created by Jiatu on 2016/10/1.
 */
function systemTime() {
    var dateTime = new Date();

    var year = dateTime.getFullYear();
    var month = dateTime.getMonth();
    var day = dateTime.getDay();
    var hh = dateTime.getHours();
    var mm = dateTime.getMinutes();
    var ss = dateTime.getSeconds();

    mm = extra(mm);
    ss = extra(ss);
    document.getElementById("time").innerHTML =year+"/"+month+"/"+day+"&nbsp;&nbsp;"+hh + ":" + mm + ":" + ss;
    setTimeout("systemTime()", 1000);
}
//补0
function extra(x) {
    //如果传入数字小于10，数字前补一位0。
    if (x < 10) {
        return "0" + x;
    }
    else {
        return x;
    }
}