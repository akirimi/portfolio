$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.toggle_btn').on('click', function() {
      if ($('header').hasClass('open')) {
        $('header').removeClass('open');
      } else {
        $('header').addClass('open');
      }
    });
  
    // メニューが表示されている時に画面をクリックした場合
    $('mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('header').removeClass('open');
    });
  });

    /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function() {
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  