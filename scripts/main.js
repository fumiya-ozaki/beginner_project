document.addEventListener('DOMContentLoaded', function(){ //DOMloadStart

  //【第１回】javascriptを使ってクリックで切り替えられるタブを作成しよう 
    //使用するHTML要素をjavascriptの変数に格納する
    const tabLabels = document.querySelectorAll('.tab__label a'); //クラス.tab__label内のaタグを定数tabLabelsへ格納
    const tabContents = document.querySelectorAll('.tab__content'); //クラス.tab__contentを定数tabContentsへ格納
  
    tabLabels.forEach(function(clickedLabel){  //forEachを使用してラベルにループ処理をかける
      clickedLabel.addEventListener('click',function(e){ //クリックした要素にクリックイベントを設定する
        e.preventDefault(); //aタグのデフォルトイベントのキャンセル
        tabLabels.forEach(function(label){ //変数tabLabelsにループ処理をかける
          label.classList.remove('active'); //クリックされた要素以外のactiveクラスを外す
        });
        this.classList.add('active'); //クリックされた要素にactiveクラスをつける
        tabContents.forEach(function(content){ //変数tabContentsにループ処理をかける
          content.classList.remove('active'); //クリックされた要素以外の中身のactiveクラスを外す
        });
        document.getElementById(clickedLabel.dataset.id).classList.add('active'); //クリックされた要素に対応する中身にactiveクラスをつける
      });
    });
  

  //【第２回】javascriptを使ってクリックで表示されるモーダルを作成しよう
  //モーダル動作用の関数作成とHTML要素を定数に格納する
  const
    modalAreaAction=function(){document.getElementById("modalArea").classList.toggle("active")},//ID modalAreaにacriveクラスをつけ外しする処理を関数化
    maskAction=function(){document.getElementById("mask").classList.toggle("active")},//ID maskにacriveクラスをつけ外しする処理を関数化
    modalBtnArry = ["modalOpen1","modalOpen2","modalOpen3","modalOpen4"],//IDがmodalOpen1〜modalOpen4のボタンを配列に格納し定数に格納
    modalArry = ["modal1","modal2","modal3","modal4"]//IDがmodal1〜modal4の中身を配列に格納し定数に格納

  //モーダルを表示する関数を作成
  const modalOpen =function(){
    for (let i=0; i<modalArry.length; i++){
      document.getElementById(modalBtnArry[i]).addEventListener("click",function(){//配列modalBtnArryのi番目の要素にクリックイベントを登録
        modalAreaAction();//modalAreaAction関数の呼び出し
        maskAction();//maskAction関数の呼び出し
        document.getElementById(modalArry[i]).classList.add("active");//配列modalArryのi番目の要素にactiveクラスをつける
      })
    }
  };
  modalOpen();//modalOpen関数の実行

  //モーダルを非表示にする関数を作成
  const modalClose = function(el){
    document.getElementById(el).addEventListener("click",function(){ //引数を使ってクリックされた要素のクリックイベントを登録
      modalAreaAction();//modalAreaAction関数の呼び出し
      maskAction();//maskAction関数の呼び出し
      for (let i=0; i< modalArry.length; i++){
        document.getElementById(modalArry[i]).classList.remove("active");//modalArryの配列全体からactiveクラスを外す
      }
    })
  };
  modalClose("modalClose");//modalClose関数を引数にmodalCloseクラスを指定して実行
  modalClose("mask");//modalClose関数を引数にmaskクラスを指定して実行



  //【第3回】jQueryを使ってクリックで開閉するアコーディオンを作成しよう 
  $(function(){
    $('#acordion dt').on('click', function() {//ID acordionないdt要素にクリックイベントを登録
      $(this).next().slideToggle(); //クリックされた要素をスライドさせる
      $(this).toggleClass("active"); //クリックされた要素のactiveクラスをつけ外しする
    });

    $('.closeBtn').on('click',function(){//クラスcloseBtn要素にクリックイベントを登録
      $(this).parent('dd').slideToggle();//クリックされた要素の親要素のddをスライドさせる
      $(this).parent('dd').prev().removeClass('active');//兄弟にある１つ前の要素のactiveクラスを外す
    });
  });

  //【第４回】jQueryライブラリ「swiper」を使用してスライダーを作成しよう
  const slider1 = new Swiper ('#swiper-1', {
    loop: true, //ループするかどうか
    autoplay:{ //自動再生設定
      delay:2000, //再生間隔2秒
      disableOnInteraction: false, //ユーザー操作後の自動再生 false=on
    },
    effect: "slide",  //スライドエフェクト "slide", "fade", "cube", "coverflow","flip"４種から設定可能
    speed:3000,  //スライドスピード3秒
    direction: "horizontal",  // 横スライド'horizontal' 縦スライド'vertical'
    initialSlide:0, //初期スライド 0（1枚目）スタート
    spaceBetween: 0, //スライド間余白なし
    allowTouchMove: true, //スマホスワイプ/pcドラッグ許可falseでナビやサムネイルのみの操作

    pagination: {//ページネーション（スライダー左右の矢印）
      el: '.swiper-pagination',
      type: 'bullets',  // "bullets", "fraction", "progressbar"
      dynamicBullets:'true', //bullets使用時オプション
    },

    navigation: {//ナビゲーション（スライダー下部の○部分）
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  




},false);//DOMloadEnd

