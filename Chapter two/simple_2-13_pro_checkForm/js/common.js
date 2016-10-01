/**
 * Created by Jiatu on 2016/9/30.
 */
function checkUser() {
    var user = document.jiatu.user.value;
    var us = document.getElementById("us");

    if (user != "liuchenglu") {
        us.style.visibility = "visible";
    } else {
        us.style.visibility = "hidden";
    }
}
function checkPwd() {
    var pwd = document.jiatu.pwd.value;
    var ps = document.getElementById("ps");

    if (pwd.length < 6 || pwd.length > 16) {
        ps.style.visibility = "visible";
    } else {
        ps.style.visibility = "hidden";
    }
}
function checkPwd2() {
    var pwd = document.jiatu.pwd.value;
    var pwd2 = document.jiatu.pwd2.value;
    var ps2 = document.getElementById("ps2");

    if (pwd != pwd2) {
        ps2.style.visibility = "visible";
    } else {
        ps2.style.visibility = "hidden";
    }
}
function check() {
    var user = document.jiatu.user.value;
    var pwd = document.jiatu.pwd.value;
    var pwd2 = document.jiatu.pwd2.value;
    var ps2 = document.getElementById("ps2");

    if (user != "" && pwd != "" && pwd2 != "") {
        if (pwd != pwd2) {
            alert("密码不匹配！");
            return false;
        } else {
            return true;
        }
    } else {
        alert("有空的项！");
        return false;
    }

}