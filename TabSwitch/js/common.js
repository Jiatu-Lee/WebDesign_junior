/**
 * Created by Jiatu on 2016/9/24.
 */
$(document).ready(function () {
    $("#tabul li").each(function (index) {
        $(this).onmouseover(function () {
            $("div.content").removeClass("content");
            $("#tabul li.tab").removeClass("tab");
            $("div").eq(index).addClass("content");
            $(this).addClass("tab")
        })
    })
})