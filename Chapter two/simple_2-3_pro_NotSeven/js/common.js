/**
 * Created by Jiatu on 2016/9/18.
 */
// alert("刘程路");
// document.write("<h2>刘程路</h2>");
for (var i = 1; i < 100; i++) {
    if (i % 7 != 0) {
        var flag = new RegExp("7").test(i.toString());//此处使用正则表达式
        if (false == flag) {
            document.write("<p>" + i + "</p>");
        } else {
            writeNull();
        }

    }
    else {
        writeNull();
    }

}
function writeNull() {
    document.write("<p> </p>")
}