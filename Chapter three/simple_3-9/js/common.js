/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
    $(".box").hover(function () {
            $(".box p").show();
        },
        function () {
            $(".box p").hide();
        }
    )
    ;
});