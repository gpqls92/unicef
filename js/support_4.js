window.addEventListener('DOMContentLoaded',function(){


    /*약관 및 개인정보 동의*/
        all.onclick = function(){
            agree.checked = all.checked;
            poll.checked = all.checked;
        }

        save1.onclick = function(e){
            e.preventDefault();
            if(!agree.checked || !poll.checked){
                alert('작성 및 체크해 주세요.');
                return;
            }
            join.action = '1_drough.html';
            join.submit();
        }

        // $('.yes li').on('click',function(){
        //     if($(this).hasClass('active')){
        //     $('.yes li').removeClass('active').find('div').stop().slideUp();
        //     return;
        // }
        // $('.yes li').removeClass('active').find('div').slideUp();
        // $(this).addClass('active').find('div').stop().slideDown();
        // });










    
});