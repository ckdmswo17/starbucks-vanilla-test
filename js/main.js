
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
},300));
// _.throttle(함수, 시간(밀리세컨드))

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, indexx){
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
        delay: (indexx + 1) * .7, // 0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 10000, // 밑에 방법이 안먹혀서 거리를 엄청늘리는 임시방책 사용..
  autoplay: {
    disableOnInteraction : false
  }
});

/*swiperEls = document.querySelectorAll('.swiper-wrapper .swiper-slide'); // 요소의 id 값이 target이라 가정
_.throttle('scroll',function(){
    swiperEls.forEach(function(swiperEl,index) {
    clientRect = swiperEl.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
    relativeTop = clientRect.top;
    console.log(relativeTop);
})},1);*/ // 범위밖 슬라이드를 안보이게 하려는 도전 -> 실패