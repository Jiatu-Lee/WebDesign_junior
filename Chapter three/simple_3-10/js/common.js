/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
    $(".box").hover(function () {
            $(this).find("p").show();
        },
        function () {
            $(this).find("p").hide();
        }
    )
    ;
});