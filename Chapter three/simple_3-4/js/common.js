/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
   $("#button").click(function () {
       var dn =$("#dishname").val();
       if(dn!=""){
           $("ul").append("<li>"+dn+"</li>");
           $("#dishname").val("").focus();
       }
   }) ;
});