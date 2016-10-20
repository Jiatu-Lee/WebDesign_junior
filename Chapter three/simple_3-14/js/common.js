/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
    $(".tab_title li").mouseover(function () {
        var i = $(".tab_title li").index(this);
        $(".tab_content").hide().eq(i).show();
        $(this).addClass("current").siblings("li").removeClass("current");
    });
});