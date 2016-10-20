/**
 * Created by Jiatu on 2016/10/5.
 */
$(function () {
   $(".submenu").hover(function () {
       $(".submenu_panel").show().prev().addClass("menu_btn_hover");
   },function () {
       $(".submenu_panel").hide().prev().removeClass("menu_btn_hover");
   }) ;
});