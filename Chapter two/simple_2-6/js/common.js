/**
 * Created by Jiatu on 2016/9/30.
 */
window.onerror = function (errorMessage, errorUrl, errorLine) {
    alert("发生错误！\n" + errorMessage + "\nURL:" + errorUrl + "\nLine Number:" + errorLine);
    return true;
}