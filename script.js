$(function(){


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
  }, 1200);

  $('.box').toggleClass('active3');
  setInterval(function(){
    $('.box').toggleClass('active3');
  }, 1300);

  $('.box').toggleClass('active4');
  setInterval(function(){
    $('.box').toggleClass('active4');
  }, 1400);

  $('.box').toggleClass('active5');
  setInterval(function(){
    $('.box').toggleClass('active5');
  }, 1500);


 /* ------------------------------------
    トップ画面をウィンドウサイズに合わせて表示
  -------------------------------------- */

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
  $(".contentScroll").click(function(){
    $(".contentScroll, .work, .footer").animate({
      scrollTop: 0
    }, 300);
    return false;
  });



  /*-----------------------
          画像をふわっと表示
    -----------------------*/

  $('#animation').css('visibility','hidden');
  $(window).scroll(function(){
  var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
  $('#animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
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

