/**
 * Created by Jiatu on 2016/10/1.
 */
$(function () {
    $("#box").click(function () {
       $("#box").append("<div>"+($("div").length)+"</div>");
        $(".num").html($("div").length-1);
    });
});