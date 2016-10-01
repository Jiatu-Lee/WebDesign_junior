/**
 * Created by Jiatu on 2016/10/1.
 */
var seconds = 10;
var handle;
function startTimer() {
    handle = setInterval("timer()", 1000);
}
function stopTimer() {
    var showTime = document.getElementById("showTime");
    clearInterval(handle);
    seconds = 10;
    showTime.innerHTML = "10s倒计时完成";
}
function timer() {
    var showTime = document.getElementById("showTime");
    seconds -= 1;
    showTime.innerHTML = "您还有<font color='red'>" + seconds + "</font>s";
    if (seconds == 0) {
        stopTimer();
    }

}