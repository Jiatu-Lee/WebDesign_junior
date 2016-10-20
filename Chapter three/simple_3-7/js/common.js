/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
   $(".list").click(function () {
       var index=$(".list").index(this);
       $(".list").eq(index).toggleClass("clicked");
       $(".amount").html(index+1);
   }) ;
});