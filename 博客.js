/**
 * Created by Fly-mydream on 16.7.13.
 */
$(function(){
    var sidebar,mask,sidebar_trigger;
    sidebar=$('#sidebar');//选择侧栏
    mask=$('.mask');
    sidebar_trigger=$('#sidebar_trigger');
    sidebar_trigger.click(function(){
        console.log('clicked');
        mask.fadeIn(1000);
        sidebar.css('right',0);
    });
    mask.click(function(){
        mask.fadeOut(1000);
        sidebar.animate({"right": -sidebar.width()});
    });
    $("#back_to_toper").click(function(){
        console.log('back');
        $('html,body').animate({scrollTop:0},800)
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>$(window).height())
            $('#back_to_toper').fadeIn();
        else
            $('#back_to_toper').fadeOut();
    });
    $(window).trigger('scroll');

});