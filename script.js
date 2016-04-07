$(function(){


 /*--------------------------------
      ページ読み込み全体をふわっと表示
  --------------------------------*/
$('.top').fadeIn(5000);



 /*----------------------
      トップアニメーション
  ----------------------*/


  $('.box').toggleClass('active');
  setInterval(function(){
    $('.box').toggleClass('active');
  }, 1000);

  $('.box').toggleClass('active2');
  setInterval(function(){
    $('.box').toggleClass('active2');
  }, 1000);

  $('.box').toggleClass('active3');
  setInterval(function(){
    $('.box').toggleClass('active3');
  }, 1000);

  $('.box').toggleClass('active4');
  setInterval(function(){
    $('.box').toggleClass('active4');
  }, 1000);

  $('.box').toggleClass('active5');
  setInterval(function(){
    $('.box').toggleClass('active5');
  }, 1000);

  $('.box').toggleClass('active6');
  setInterval(function(){
    $('.box').toggleClass('active6');
  }, 1000);

  $('.box').toggleClass('active7');
  setInterval(function(){
    $('.box').toggleClass('active7');
  }, 1000);

  $('.box').toggleClass('active8');
  setInterval(function(){
    $('.box').toggleClass('active8');
  }, 1000);

  $('.box').toggleClass('active9');
  setInterval(function(){
    $('.box').toggleClass('active9');
  }, 1000);

  $('.box').toggleClass('active10');
  setInterval(function(){
    $('.box').toggleClass('active10');
  }, 1000);

  $('.box').toggleClass('active11');
  setInterval(function(){
    $('.box').toggleClass('active11');
  }, 1000);

  $('.box').toggleClass('active12');
  setInterval(function(){
    $('.box').toggleClass('active12');
  }, 1000);

  $('.box').toggleClass('active13');
  setInterval(function(){
    $('.box').toggleClass('active13');
  }, 1000);

  $('.box').toggleClass('active14');
  setInterval(function(){
    $('.box').toggleClass('active14');
  }, 1000);

  $('.box').toggleClass('active15');
  setInterval(function(){
    $('.box').toggleClass('active15');
  }, 1000);

  $('.box').toggleClass('active16');
  setInterval(function(){
    $('.box').toggleClass('active16');
  }, 1000);

  $('.box').toggleClass('active17');
  setInterval(function(){
    $('.box').toggleClass('active17');
  }, 1000);

  $('.box').toggleClass('active18');
  setInterval(function(){
    $('.box').toggleClass('active18');
  }, 1000);

  $('.box').toggleClass('active19');
  setInterval(function(){
    $('.box').toggleClass('active19');
  }, 1000);

  $('.box').toggleClass('active20');
  setInterval(function(){
    $('.box').toggleClass('active20');
  }, 1000);

  $('.box').toggleClass('active21');
  setInterval(function(){
    $('.box').toggleClass('active21');
  }, 1000);


  $('.box').toggleClass('active22');
  setInterval(function(){
    $('.box').toggleClass('active22');
  }, 1000);


  $('.box').toggleClass('active23');
  setInterval(function(){
    $('.box').toggleClass('active23');
  }, 1000);


  $('.box').toggleClass('active24');
  setInterval(function(){
    $('.box').toggleClass('active24');
  }, 1000);


  $('.box').toggleClass('active25');
  setInterval(function(){
    $('.box').toggleClass('active25');
  }, 1000);


  $('.box').toggleClass('active26');
  setInterval(function(){
    $('.box').toggleClass('active26');
  }, 1000);


  $('.box').toggleClass('active27');
  setInterval(function(){
    $('.box').toggleClass('active27');
  }, 1000);


  $('.box').toggleClass('active28');
  setInterval(function(){
    $('.box').toggleClass('active28');
  }, 1000);


  $('.box').toggleClass('active29');
  setInterval(function(){
    $('.box').toggleClass('active29');
  }, 1000);


  $('.box').toggleClass('active30');
  setInterval(function(){
    $('.box').toggleClass('active30');
  }, 1000);


  $('.box').toggleClass('active31');
  setInterval(function(){
    $('.box').toggleClass('active31');
  }, 1000);


  $('.box').toggleClass('active32');
  setInterval(function(){
    $('.box').toggleClass('active32');
  }, 1000);

  $('.box').toggleClass('active33');
  setInterval(function(){
    $('.box').toggleClass('active33');
  }, 1000);

  $('.box').toggleClass('active34');
  setInterval(function(){
    $('.box').toggleClass('active34');
  }, 1000);

  $('.box').toggleClass('active35');
  setInterval(function(){
    $('.box').toggleClass('active35');
  }, 1000);

  $('.box').toggleClass('active36');
  setInterval(function(){
    $('.box').toggleClass('active36');
  }, 1000);

  $('.box').toggleClass('active37');
  setInterval(function(){
    $('.box').toggleClass('active37');
  }, 1000);

  $('.box').toggleClass('active38');
  setInterval(function(){
    $('.box').toggleClass('active38');
  }, 1000);

  $('.box').toggleClass('active39');
  setInterval(function(){
    $('.box').toggleClass('active39');
  }, 1000);

  $('.box').toggleClass('active40');
  setInterval(function(){
    $('.box').toggleClass('active40');
  }, 1000);


 /*------------------------------------
    トップ画面をウィンドウサイズに合わせて表示
  --------------------------------------*/

  $(window).load(function(){
    var window_h = $(window).outerHeight();
    $('.window_fixed').css('height', window_h+'px');
    $(window).resize(function(){
      window_h = $(window).outerHeight();
      $('.window_fixed').css('height', window_h+'px');
    });
  });


  /*------------------------------------
  top下のcontentScrollを押すと、
  トップに飛び上がる（今のところ飛び上がらない）
  --------------------------------------*/
  $('.contentScroll').click(function(){
    $('.contentScroll, .work, .footer').animate({
      scrollTop: 1000
    }, 300);
    return false;
  });



  /*-----------------------
        画像をふわっと表示
    -----------------------*/

  $('img').css('visibility','hidden');
  $(window).scroll(function(){
  var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
  $('img').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 200){
   $(this).addClass('fadeInDown');
 }
 });
});



  /*---------------------------
      トップへスクロールするボタン
    --------------------------*/

  var topBtn = $('#pagetop');

  //スクロールした場合
  $('window').scroll(function(){
    //スクロール位置が100を超えた時
    if ($(this).scrollTop() > 200){
      //「ページトップへ」をフェードイン
      topBtn.fadeIn();
    }
    //スクロール位置が100未満の場合
    else{
      //「ページトップへ」をフェードアウト
      topBtn.fadeOut();
    }
  });

  //「ページトップへ」をクリックした場合
  topBtn.click(function(){
    //ページトップへスクロール
    $('html,body').animate({
      scrollTop:0
    }, 300);
    return false;
  });

});

