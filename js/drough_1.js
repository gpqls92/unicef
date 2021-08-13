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

// //wheel end
// function ani(){
// $('html,body').animate({
//     scrollTop : $(window).height() * num
// });

// $('aside a').removeClass('active');
// $('aside a').eq(num).addClass('active');
// }

// $('aside a').on('click',function(){
// num = $(this).index();
// ani();
// })


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



// const colorArr = ["transparent","gray"];
// const elBtn = document.querySelector(".fix .support a");

//     let num = 0;
//     elBtn[num].style.background = colorArr[0];
//     function aaa(){

//     }
    
//     for(let i = 0; i < tabBtn.length; i++){ 
//         elBtn[i].addEventListener("click", () => {
//             //버튼 active 클래스 넣기
//             elBtn[num].classList.remove("active");

//             //탭, 메뉴 배경색 변경
//             elBtn[num].style.background = colorArr[2];

//             num = i;

//             elBtn[i].style.backgroundColor = colorArr[i];
//             elBtn[i].classList.add("active");
//         });
//     }

//     for(let i = 0; i < tabBtn.length; i++){
//         elBtn[i].addEventListener("mouseenter", () => {
//             if(elBtn[i].classList != "active"){
//                 elBtn[i].style.background = colorArr[gray];
//             }
//         });
//     }
    
//     for(let i = 0; i < tabBtn.length; i++){
//         tabBtn[i].addEventListener("mouseleave", () => {
//             if(tabBtn[i].classList != "active"){
//                 tabBtn[i].style.background = colorArr[transparent];
//             }
//         });
//     }



    const elBurger = document.querySelector('.menu-trigger');
    const elNav = document.querySelector('.menu nav');
    elBurger.addEventListener('click',function(){
        this.classList.toggle('active-7');
        elNav.classList.toggle('active');
    })







});