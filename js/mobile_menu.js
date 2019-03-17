$(document).ready(function(){
    var chk = false;
    $('.menu_box').click(function(){
        if(chk == true) { //메뉴닫기
            $('.menu_box').removeClass('active'); 
            $('.menu_box').addClass('menu_box_reverse');  
            $('.panel-overlay').css({
                display : 'none'
            })
            chk = false; 
        }
        else { //메뉴열기
            $('.menu_box').removeClass('menu_box_reverse');
            $('.menu_box').addClass('active');
            $(".mobile_menu").removeClass("hide");
            $('.panel-overlay').css({
                display : 'block'
            })
            chk = true;

        }

       $(".mobile_menu").toggleClass("show");
    });
  

    $('.panel-overlay').click(function(){
        $('.menu_box').removeClass('active'); 
        $('.menu_box').addClass('menu_box_reverse');  
        $(".mobile_menu").toggleClass("show");
        $('.panel-overlay').css({
            display : 'none'
        })
        chk = false; 
            
    });

    // var winWidth = $(window).width();
    // if(winWidth >= 1024){
    //     $('.panel-overlay').trigger('click')
    //     chk = false; 
     
    // }else{
    //     $('.panel-overlay').css({
    //         display : 'block'
    //     })
    //     chk = true;
    // }
   
    //서브메뉴

    $('.mobile_menu ul li').click(function(){
        $(this).children('.sub_hide').stop().slideToggle();
    })

});