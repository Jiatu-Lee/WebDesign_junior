/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
   $("#box ul li").hover(function () {
       $(this).find("ul").show();
   },function () {
       $(this).find("ul").hide();
   });
});