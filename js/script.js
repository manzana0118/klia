window.onload = function(){

       //  aos 관련
        AOS.init({  
        // once: true              
    });

    // 모달창
    let modal_close = $('.modal-close');
    let modal = $('.modal');

    modal_close.click(function(){
        modal.hide();
    });

    let modal_bt = $('.modal-bt');
    modal_bt.click(function(){
        modal.show();
    });

    // 스크롤시 애니메이션    
    $(".customer-box-cont").each(function (index, el) {
        new Waypoint({
            element: el,
            handler: function (direction) {
                var element = $(this.element);
                var delay = element.attr('data-delay');
                setTimeout(function () {
                    if (direction == "down") {
                        element.addClass('slideUp');
                        element.addClass('effect-op-active');
                    } else {
                        element.removeClass('slideUp');
                        element.removeClass('effect-op-active');
                    }
                }, delay);
                // this.destroy();
            },
            offset: '90%'
        });
    });


    $(".news-bottom").each(function (index, el) {
        new Waypoint({
            element: el,
            handler: function (direction) {
                var element = $(this.element);
                var delay = element.attr('data-delay');
                setTimeout(function () {
                    if (direction == "down") {
                        element.addClass('slideUp2');
                        element.addClass('effect-op-active');
                    } else {
                        element.removeClass('slideUp2');
                        element.removeClass('effect-op-active');
                    }
                }, delay);
                // this.destroy();
            },
            offset: '90%'
        });
    });


    $(".partner-link").each(function (index, el) {
        new Waypoint({
            element: el,
            handler: function (direction) {
                var element = $(this.element);
                var delay = element.attr('data-delay');
                setTimeout(function () {

                    if (direction == "down") {
                        element.addClass('slideUp');
                        element.addClass('effect-op-active');
                    } else {
                        element.removeClass('slideUp');
                        element.removeClass('effect-op-active');
                    }
                }, delay);
              //   this.destroy();
            },
            offset: '90%'
        });
    });

    // 메뉴기능
    // 주메뉴
    let gnb_li = $('.gnb > li');
    let submenu_div = $('.submenu-div')
    let submenu_box = $('.submenu-box');
    // 서브메뉴 높이 값
    let submenu_height = [];
    // 서브메뉴 높이 값 파악
    $.each(submenu_box, function(index, item){
        let temp = $(this).outerHeight();
        temp = Math.ceil(temp);
        submenu_height.push(temp);
        submenu_height[index] = temp;
    }); 
    $.each(gnb_li, function(index, item){
        $(this).mouseenter(function(){
            // 높이값을 파악한다.
            let h = submenu_height[index];
            // 높이값을 적용한다.
            submenu_div.css('height', h);
            submenu_div.css('border-bottom-width', 2);
            // 서브메뉴 보이고 숨기기
            submenu_box.hide();
            submenu_box.eq(index).show();
            // 포커스 유지
            gnb_li.removeClass('gnb-li-active');
            gnb_li.eq(index).addClass('gnb-li-active');
        });
    });
    // 서브메뉴 숨기기
    let nav = $('.nav');
    // 서브메뉴 타이머
    let menu_timer;
    let menu_timer_delay = 100;
    nav.mouseenter(function(){
        clearTimeout(menu_timer);
    });
    nav.mouseleave(function(){
        clearTimeout(menu_timer);
        menu_timer = setTimeout(menuUp, menu_timer_delay);
    });

    function menuUp(){
        clearTimeout(menu_timer);
        submenu_div.css('height', 0);
        submenu_div.css('border-bottom-width', 0);
        // 포커스 해제
        gnb_li.removeClass('gnb-li-active');
    };

    // 서브메뉴 묶음
    let submenu_container = $('.submenu-div .container');
    submenu_container.mouseenter(function(){
        clearTimeout(menu_timer);
    });
    submenu_container.mouseleave(function(){
        clearTimeout(menu_timer);
        menu_timer = setTimeout(menuUp, menu_timer_delay);
    });

    // 공지사함 탭
    let news_menu = $('.news-menu a');
    let news_list = $('.news-list');
    $.each(news_menu, function(index, item){
        $(this).click(function(event){
            // a href 막기
            event.preventDefault();
            news_menu.removeClass('news-menu-active')
            news_menu.eq(index).addClass('news-menu-active');
            news_list.removeClass('news-list-active');
            news_list.eq(index).addClass('news-list-active');
        });
    });

    let sw_vs_notice = new Swiper('.sw-vs-notice', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        direction: "vertical",
        navigation: {
            nextEl: '.sw-vs-notice-next',
            prevEl: '',
        }
    });

    let sw_vs_news = new Swiper('.sw-vs-news', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        direction: "vertical",
        navigation: {
            nextEl: '.sw-vs-news-next',
            prevEl: '',
        }
    });

    let sw_news = new Swiper('.sw-news', {
        // loop: true,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        speed: 500,
        pagination: {
            el: '.sw-news-pg',
            clickable : true,
        },
    });
    $('.sw-news-bt').click(function(){

        // 현재 sw-news-bt-active 가 없으면
        // 자동 실행 중이다.

        // sw-news-bt-active 가 있으면
        // 멈춘 상태이다.
        
        let state = $(this).hasClass('sw-news-bt-active');

        if(state == true) {
            // 현재 멈추고 있으니 플레이 상태로 바꾼다.
            sw_news.autoplay.start();
        }else{
            // 현재 플레이 중이니 멈춤 상태로 바꾼다.
            sw_news.autoplay.stop();
        }
        $(this).toggleClass('sw-news-bt-active');
    });

    let sw_banner = new Swiper('.sw-banner', { 
        loop: true,
        slidesPerView: 7,                             
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed: 500,
        navigation: {
            nextEl: '.banner-prev',
            prevEl: '.banner-next'
        }
    });
};

$(document).ready(function(){

    // 장면을 저장합니다.
    let section =$('.main > section');
    // 각각의 위치를 저장한다.
    let section_pos = [];
    $.each(section, function(index, item){
        // 위치값을 파악한다.
        let temp = $(this).offset().top;
        // 정수로 만든다.
        temp = parseInt(temp);
        // 각각의 값을 하나씩 저장한다.
        section_pos.push(temp);
    });

    // footer 빠진 상태로 저장
    let footer_pos = $('.footer').offset().top;
    footer_pos = parseInt(footer_pos);
    section_pos.push(footer_pos);

    // 화면이 리사이징 될 때
    // section_pos 배열을 업데이트 한다.
    $(window).resize(function(){
        // 장면을 저장합니다.
        let section =$('.main > section');
        // 각각의 위치를 저장한다.
        let section_pos = [];
        $.each(section, function(index, item){
            // 위치값을 파악한다.
            let temp = $(this).offset().top;
            // 정수로 만든다.
            temp = parseInt(temp);
            // 각각의 값을 하나씩 저장한다.
            section_pos[index] = temp;
        });

        // footer 빠진 상태로 저장
        let footer_pos = $('.footer').offset().top;
        footer_pos = parseInt(footer_pos);
        section_pos[section_total-1] = (footer_pos);

        // section_index가 변할 필요가 없다.
        // 휠을 돌린 것은 아니니까
        // 위치만 잡아준다.
        let temp = section_pos[section_index];
        $('html').scrollTop(temp);
    });

    // 현재 보여지는 페이지 번호
    let section_index = 0;

    // 총 이동 가능한 페이지의 개수
    let section_total = section_pos.length;

    // 화면 이동을 할지 말지 결정 여부
    let section_scroll = 0;

    // 화면 이동 속도
    let section_speed = 500;

    // console.log(section_total);

    // 윈도우 스크롤 처리
    $(window).scroll(function(){

    });

    // 마우스 휠 처리
    $(window).bind('mousewheel DOMMouseScroll', function (event){
        let distance = event.originalEvent.wheelDelta;
        if (distance == null) {
            distance = event.originalEvent.detail * -1;
        }
        
        // 연속으로 휠이 들어온 경우 처리
        if(section_scroll == 1){
            return;
        }

        section_scroll = 1;

        if(distance < 0) {
            section_index ++;
            if(section_index >= section_total) {
                section_index = section_total - 1;
            }
        }else{
            section_index --;
            if(section_index < 0){
                section_index = 0;
            }
        }

        sectionFn();
    });

    // 포커스 유지
    let control_menu = $('.control-menu a');
    $.each(control_menu, function(index, item) {
            $(this).click(function(event) { 
                event.preventDefault();
                section_index = index;
                sectionFn();
            });
        });

    function sectionFn(){

        let temp = section_pos[section_index];

        // 모든 포커스 해제
        control_menu.removeClass('control-active');
        control_menu.eq(section_index).addClass('control-active');

        $('html').animate({
            scrollTop: temp,
        }, section_speed, function(){
            // 모션이 완료된 시점
            section_scroll = 0;
            // 클릭이 가능하도록 처리
            bt_bool = false;
        });

    };

    // 최초 한번 실행
    sectionFn();

    
    // 위로가기 아래로가기
    let gotop = $('.gotop');    
    let goup = $('.goup');   
    let godown = $('.godown');
    // 연속 버튼 막기
    let bt_bool = false;
    
    gotop.click(function(event){
        event.preventDefault();
        section_index = 0;
        sectionFn();
    });

    goup.click(function(event){
        event.preventDefault();

        // 움직이고 있는 동안에는 클릭을 막는다.
        if(bt_bool == true){
            return;
        }
        bt_bool == true;

        section_index--;
        if(section_index < 0) {
            section_index = 0;
        }
        sectionFn();
    });

    godown.click(function(event){
        event.preventDefault();

        // 움직이고 있는 동안에는 클릭을 막는다.
        if(bt_bool == true){
            return;
        }
        bt_bool == true;

        section_index++;
        if(section_index >= section_total - 1) {
            section_index = section_total - 2
        }
        sectionFn();
    });

});