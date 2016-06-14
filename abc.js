/**
 * Created by Fly-mydream on 16.6.12.
 */
$(document).ready(function(e)
{
    var flag="go_to_left";
    var point=0;
    function showImage()
    {
        if(point==-2700)
           {
            flag="go_to_right";
            }
        else if(point==0)
            {
            flag="go_to_left";
            }
        if(flag=="go_to_left")
        {
            $(".imgs") .animate({left:point},500);
             point-=900;
        }
        else if (flag =="go_to_right")
           {
            $(".imgs").animate({left: point}, 500);
            point += 900;
          }
    }
    set=setInterval(showImage,1000);
}