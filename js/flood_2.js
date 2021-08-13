window.addEventListener('DOMContentLoaded',function(){

    const elSection = document.querySelectorAll('main section');
    const pnindicato = document.querySelectorAll('.fix aside a');

    let idx = 0, delta,inter,pos;


    function slide2(){
        console.log(idx)
        try{
            if(idx != 0) elSection[idx].style=`top:${100*pos}%`;
        }catch{}
    }
    function update(){
        let plen = $('main section').length;
        $('.fix .earth_3').text((idx+1)+'/'+plen);
            
        $('.fix aside a').removeClass('active');
        $('.fix aside a').eq(idx).addClass('active');
    }

    $('.fix aside a').on('click',function(){
        let _this =  $(this).index()

        pos = 0;
        for(let i=_this; i>0; i--){
            elSection[i].style=`top:${100*pos}%`;
        }
        

        idx = $(this).index();
        pos = 1;
        for(let i=idx+1; i<7; i++){
            elSection[i].style=`top:${100*pos}%`;
        }
        
        
        update();
    })


$('main section').on('mousewheel',function(e){
    delta = e.originalEvent.wheelDelta;
    clearTimeout(inter);
    inter = setTimeout(function(){
        if(delta < 0){
            if(idx < $('main section').length-1) idx++; 
            pos = 0;
        }else{
            pos = 1;
        }
        
        slide2();

        if(delta > 0){
            if(idx > 0) idx--;
        }
        update();
        

    },500);


});



    const elBurger = document.querySelector('.menu-trigger');
    const elNav = document.querySelector('.menu nav');
    elBurger.addEventListener('click',function(){
        this.classList.toggle('active-7');
        elNav.classList.toggle('active');
    })




    const elFigure = document.querySelector('.section6 .left_wrap6 .s6 figure');
    const pnBtn = document.querySelectorAll('.section6 .left_wrap6 .s6 button');

    let sIdx = 0;
    for(let i=0;i<pnBtn.length;i++){
        pnBtn[i].addEventListener('click',function(){
            if(i==1){
                if(sIdx < 3) sIdx++;
            }else{
                if(sIdx > 0) sIdx--;
            }
            slide();
        });
    }

    function slide(){
        elFigure.style=`transform:translateX(${-100*sIdx}%)`;
    }
    
    let loop;
    function interval(){
        loop = setInterval(function(){
                        if(sIdx < 3){
                            sIdx++;
                        }else{
                            sIdx=0;
                        }
                        slide();
                    },2000);
    }
    interval();
    
    const elSlide = document.querySelector('.s6_slide')
    elSlide.addEventListener('mouseenter',function(){
        clearInterval(loop);
    });

    elSlide.addEventListener('mouseleave',function(){
        console.log('sss')
        interval();
    });




});