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
    // 약관 및 개인정보 동의 상세보기 내용
        $('.yes li').on('click',function(){
            if($(this).hasClass('active')){
            $('.yes li').removeClass('active').find('div').stop().slideUp();
            return;
        }
        $('.yes li').removeClass('active').find('div').slideUp();
        $(this).addClass('active').find('div').stop().slideDown();
        });



    //주민번호체크(per2)
    const elInput = document.querySelector('.per2 input');
    const elBtn = document.querySelector('.per2 button');

    elBtn.addEventListener('click',function(){
        let num = elInput.value,
            key = [2,3,4,5,6,7,8,9,2,3,4,5],
            total = 0;

        for(let i in key){
            total += key[i] * num[i];
        }
        
        let checkNum = Math.floor(  (11-(total%11))%10  );
        if(num[12] == checkNum){
            alert('정상')
        }else{
            alert('비정상')
        }        
    });




    
});