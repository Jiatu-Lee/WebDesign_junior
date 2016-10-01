function showTab(n) {
    var t1 = document.getElementById("tab1");
    var t2 = document.getElementById("tab2");
    var t3 = document.getElementById("tab3");
    t1.style.display = "none";
    t2.style.display = "none";
    t3.style.display = "none";

    if (n == 1)t1.style.display = "block";
    if (n == 2)t2.style.display = "block";
    if (n == 3)t3.style.display = "block";
    //switch语句写法
    /* switch (n) {
     case 1:
     t1.style.display = "block";
     break;
     case 2:
     t2.style.display = "block";
     break;
     case 3:
     t3.style.display = "block";
     break;
     default:
     break;
     }*/
}
//当if语句里只有一行时，花括号{}可以省略。