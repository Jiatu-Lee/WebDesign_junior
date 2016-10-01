/**
 * Created by Jiatu on 2016/10/1.
 */
function checkForm() {
    var sUser = document.form1.user.value;
    var sPwd = document.form1.pwd.value;
    var sPwd2 = document.form1.pwd2.value;
    if (sUser == "") {
        alert("用户名不能为空");
        return false;
    }
    if (sUser.length < 4 || sUser.length > 10) {
        alert("输入内容长度4-8位");
        return false;
    }
    if (sPwd == "" || sPwd != sPwd2 || sPwd.length < 4 || sPwd.length > 15) {
        alert("密码不能为空，长度应为5-14位，两次输入密码应一致。");
        return false;
    }
}