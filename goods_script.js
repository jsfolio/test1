
$(document).ready(function(){
    function scroll_block(){
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    };
    function scroll_on(){
        $('body').off('scroll touchmove mousewheel');
    };
    $('#email_select').change(function(){
        $('#email_select option:selected').each(function(){
            if($(this).val()=='1'){
                $('#email_id2').val('');
                $('#email_id2').attr('disabled', flase);
            }
            else{
                $('#email_id2').val($(this).text());
                $('#email_id2').attr('disabled',true);
            }
        })
    })
    $('.login').click(function(){
        scroll_block();
        $('.loginmodal').css({display:'block'})
        $('#login_modal-content').fadeIn('fast');
        $("#login_modal-content").css({
            marginTop: -( $("#login_modal-content").outerHeight()/2),
            marginLeft:-( $("#login_modal-content").outerWidth()/2),
        }); 
        
    });

    $('.modalclose, .loginmodal, .modal').click(function(e){         
        $('.loginmodal, #login_modal-content').css({
            display: "none"
         });
      
        $('#login_modal-content').click(function(e){
            e.preventDefault();
            e.stopPropagation();   
        });
        scroll_on();
    });
    //------------------------------------------------------
    $(".img_hover").mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace("_off.jpg","_on.jpg"));
        });
        $(".img_hover").mouseout(function() {
            $(this).attr("src", $(this).attr("src").replace("_on.jpg", "_off.jpg"));
    });
    //------------------------------------------------------------------------
    var origin_img = "";
    $(".img_hover2").hover(function(){
        // origin_img = 
        console.log($(this).parents('.another_color').children('li').eq(0).children('.img_hover2').attr('src'));

        origin_img = $(this).parents('.another_color').children('li').eq(0).children('.img_hover2').attr('src');
        var anothercolor_src = "";
        anothercolor_src = $(this).attr('src');
        $(this).parent('li').parent('.another_color').siblings('.img_hover').attr('src', anothercolor_src);
        },
        function(){
            $(this).parent('li').parent('.another_color').siblings('.img_hover').attr('src', origin_img);
        
        });
    
    //--------------------------------------------------------------------
      
    $('.thumb').click(function(){
        scroll_block();
        $('.goods_name').text($(this).find('.product_name').text()) ;
        $('.goods_sort').text($(this).find('.product_subname').text());
        $('.goods_cost').text($(this).find('span').text());
    });

    $('.modal-content').click(function(e){
        e.preventDefault();
        e.stopPropagation();
    });
    //-------------------------------------------------------------------
   
    $('.product_small_thumb li').mouseover(function(){
        $('.product_big_img').show();
            var imgsrc = "";
            imgsrc = $(this).children('img').attr('src');
            $('.product_big_img').css({
            background: "url('" + imgsrc + "')"
        });
    })

    //--------------------------------------------------------

     $('button[count_range]').click(function(e){
        e.preventDefault();
        var type = $(this).attr('count_range');
        var $count = $(this).parent().children('input.count');
        var count_val = $count.val(); // min 1
        if(type=='m'){
            
            if($('.count').val() > 1) {

                if(count_val<1){
                    return;
                }
                $count.val(parseInt(count_val)-1);
            }
        }else if(type=='p'){
            $count.val(parseInt(count_val)+1);
        }
    });

    //---------------------------------------------------------
    $('.heart').click(function(){
        $(this).toggleClass('active_h');
    })

   //-----------------------------------------------------
    
  });