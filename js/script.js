$(function() {


 /*--------------------------------
      ページ読み込み全体をふわっと表示
  --------------------------------*/
$(function() {
  var h = $(window).height();

  $('#loader-after').css('display','none');
  $('#loader-before ,#loader').height(h).css('display','block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-before').delay(1000).fadeOut(1000);
  $('#loader').delay(600).fadeOut(300);
  $('#loader-after').css('display', 'block');
});

//10秒たったら強制的にロード画面を非表示
/*$(function(){
  setTimeout('stopload()',10000);
});*/

function stopload(){
  $('#loader-after').css('display','block');
  $('#loader-before').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

 /*--------------------------------
      ページ読み込み全体をふわっと表示
  --------------------------------*/
/*$('.top').fadeIn(15000);*/


 /*--------------------------------
      ハンバーガーメニュー
  --------------------------------*/
$('.mobile-nav').click(function(){
    $(this).toggleClass('open');
});




 /*----------------------
      トップアニメーション
  ----------------------*/


  $('.box').toggleClass('active');
  setInterval(function(){
    $('.box').toggleClass('active');
  }, 1200);

  $('.box').toggleClass('active2');
  setInterval(function(){
    $('.box').toggleClass('active2');
  }, 1200);

  $('.box').toggleClass('active3');
  setInterval(function(){
    $('.box').toggleClass('active3');
  }, 1200);

  $('.box').toggleClass('active4');
  setInterval(function(){
    $('.box').toggleClass('active4');
  }, 1200);

  $('.box').toggleClass('active5');
  setInterval(function(){
    $('.box').toggleClass('active5');
  }, 1200);

  $('.box').toggleClass('active6');
  setInterval(function(){
    $('.box').toggleClass('active6');
  }, 1200);

  $('.box').toggleClass('active7');
  setInterval(function(){
    $('.box').toggleClass('active7');
  }, 1200);

  $('.box').toggleClass('active8');
  setInterval(function(){
    $('.box').toggleClass('active8');
  }, 1200);

  $('.box').toggleClass('active9');
  setInterval(function(){
    $('.box').toggleClass('active9');
  }, 1200);

  $('.box').toggleClass('active10');
  setInterval(function(){
    $('.box').toggleClass('active10');
  }, 1200);

  $('.box').toggleClass('active11');
  setInterval(function(){
    $('.box').toggleClass('active11');
  }, 1200);

  $('.box').toggleClass('active12');
  setInterval(function(){
    $('.box').toggleClass('active12');
  }, 1200);

  $('.box').toggleClass('active13');
  setInterval(function(){
    $('.box').toggleClass('active13');
  }, 1200);

  $('.box').toggleClass('active14');
  setInterval(function(){
    $('.box').toggleClass('active14');
  }, 1200);

  $('.box').toggleClass('active15');
  setInterval(function(){
    $('.box').toggleClass('active15');
  }, 1200);

  $('.box').toggleClass('active16');
  setInterval(function(){
    $('.box').toggleClass('active16');
  }, 1200);

  $('.box').toggleClass('active17');
  setInterval(function(){
    $('.box').toggleClass('active17');
  }, 1200);

  $('.box').toggleClass('active18');
  setInterval(function(){
    $('.box').toggleClass('active18');
  }, 1200);

  $('.box').toggleClass('active19');
  setInterval(function(){
    $('.box').toggleClass('active19');
  }, 1200);

  $('.box').toggleClass('active20');
  setInterval(function(){
    $('.box').toggleClass('active20');
  }, 1200);

  $('.box').toggleClass('active21');
  setInterval(function(){
    $('.box').toggleClass('active21');
  }, 1200);


  $('.box').toggleClass('active22');
  setInterval(function(){
    $('.box').toggleClass('active22');
  }, 1200);


  $('.box').toggleClass('active23');
  setInterval(function(){
    $('.box').toggleClass('active23');
  }, 1200);


  $('.box').toggleClass('active24');
  setInterval(function(){
    $('.box').toggleClass('active24');
  }, 1200);


  $('.box').toggleClass('active25');
  setInterval(function(){
    $('.box').toggleClass('active25');
  }, 1200);


  $('.box').toggleClass('active26');
  setInterval(function(){
    $('.box').toggleClass('active26');
  }, 1200);


  $('.box').toggleClass('active27');
  setInterval(function(){
    $('.box').toggleClass('active27');
  }, 1200);


  $('.box').toggleClass('active28');
  setInterval(function(){
    $('.box').toggleClass('active28');
  }, 1200);


  $('.box').toggleClass('active29');
  setInterval(function(){
    $('.box').toggleClass('active29');
  }, 1200);


  $('.box').toggleClass('active30');
  setInterval(function(){
    $('.box').toggleClass('active30');
  }, 1200);


  $('.box').toggleClass('active31');
  setInterval(function(){
    $('.box').toggleClass('active31');
  }, 1200);


  $('.box').toggleClass('active32');
  setInterval(function(){
    $('.box').toggleClass('active32');
  }, 1200);

  $('.box').toggleClass('active33');
  setInterval(function(){
    $('.box').toggleClass('active33');
  }, 1200);

  $('.box').toggleClass('active34');
  setInterval(function(){
    $('.box').toggleClass('active34');
  }, 1200);

  $('.box').toggleClass('active35');
  setInterval(function(){
    $('.box').toggleClass('active35');
  }, 1200);

  $('.box').toggleClass('active36');
  setInterval(function(){
    $('.box').toggleClass('active36');
  }, 1200);

  $('.box').toggleClass('active37');
  setInterval(function(){
    $('.box').toggleClass('active37');
  }, 1200);

  $('.box').toggleClass('active38');
  setInterval(function(){
    $('.box').toggleClass('active38');
  }, 1200);

  $('.box').toggleClass('active39');
  setInterval(function(){
    $('.box').toggleClass('active39');
  }, 1200);

  $('.box').toggleClass('active40');
  setInterval(function(){
    $('.box').toggleClass('active40');
  }, 1200);


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



  /*-----------------------
        画像をふわっと表示
    -----------------------*/
/*
  $('img').css('visibility','hidden');
  $(window).scroll(function(){
  var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
  $('img').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow < targetPosition - windowHeight + 0){
   $(this).addClass('fadeInDown');
 }
 });
});
*/


});

