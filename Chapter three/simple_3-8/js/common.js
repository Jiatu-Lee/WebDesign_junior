/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
   $("#right li").mouseover(function () {
       var i = $("#right li").index(this);
       $("#left img").attr("src","images/"+(i+1)+".jpg");
   }) ;
});