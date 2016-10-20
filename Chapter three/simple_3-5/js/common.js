/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
   var num = $("#num").val();
    $("#box button:first").click(function () {
       $("#num").val(++num);
    });
    $("#box button:last").click(function () {
       $("#num").val(--num);
    });
    
});