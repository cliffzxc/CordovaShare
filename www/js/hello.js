/**
 * Created by njupt on 7/9/15.
 */

var screenWidth;
var screenHeight;

var type;
$(document).ready(function(){
    //$("#btn").on("click",function(){
    //    $("#testP").text("has clicked");
    //});
    //$("#size").text(window.innerWidth + " " + window.innerHeight);
    //document.getElementById("size").innerHTML = "";
    //alert("fe");

    screenWidth = screen.availWidth;
    screenHeight = screen.availHeight;

    type = 1;

    $("#textShareBtn").on("click", function (e) {
        $("#shareways").slideDown(500);
        type = 1;
        stopPropagation(e)
    });
    $("#imgShareBtn").on("click",function (e) {
        $("#shareways").slideDown(500);
        type = 2;
        stopPropagation(e);
    });
    $(document).on("click", function () {
        $("#shareways").slideUp(500);
    });
    $(".fourShare").on("click",function() {
        gotoShare(this.id);
    });

    //$("#wbLink").on("click", function () {
    //    wbClick();
    //});

    //$("#framePage").height = "100";
    //
    //alert(screenHeight);
});

function stopPropagation(e)
{
    if(e.stopPropagation)
    {
        e.stopPropagation();
    }
    else
    {
        e.cancelBubble = true;
    }
}
function gotoShare(id)
{
    switch (id)
    {
        case "shareSina":
            //location.href = "http://service.weibo.com/share/share.php";
            location.href = "#page2";
            //$("#framePage").src = "http://service.weibo.com/share/share.php";
            //window.location.reload();
            //window.open("http://service.weibo.com/share/share.php");
            if(type == 1)
            {
                document.fr.location.href = "http://service.weibo.com/share/share.php?title=" + $("#textShareContent").val();
            }
            else if(type == 2)
            {
                //alert(document.getElementById('imgShareImg').src);
                document.fr.location.href = "http://service.weibo.com/share/share.php?title=" + $("#imgShareContent").val() + "&pic=" + document.getElementById('imgShareImg').src;
            }

            //location.href = "http://service.weibo.com/share/share.php";
            break;
        case "shareQQ":

            break;
        case "shareWX":

            break;
        case "shareWXC":

            break;
    }
}

function wbClick()
{
    //alert("fdf");
    //window.open("http://www.baidu.com","windowName","height=200,width=200,top=100,left=100");
    //return false;
    //http://service.weibo.com/share/share.php

    //document.write("<iframe src='http://www.baidu.com/' width='400' height='200' scrolling='yes' />");

}

