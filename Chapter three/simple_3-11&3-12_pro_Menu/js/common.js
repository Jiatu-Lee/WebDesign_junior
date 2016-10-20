/**
 * Created by Jiatu on 2016/9/24.
 */
$(document).ready(function () {
    $(".main>a").click(function () {
        var urNode = $(this).next("ul");
        /*if (urNode.css("display") == "none") {
            urNode.css("display", "block");
        } else {
            urNode.css("display", "none");
        }*/
       urNode.toggle("slow");
    })
    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
    },function () {
        $(this).children("ul").slideUp();
    })
})