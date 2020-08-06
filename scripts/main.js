console.log("test");
document.addEventListener('DOMContentLoaded', function(){ //DOMloadStart
  "use script"

  const
    modalAreaAction=function(){document.getElementById("modalArea").classList.toggle("active")},
    maskAction=function(){document.getElementById("mask").classList.toggle("active")},
    modalArry = ["modal1","modal2","modal3","modal4"],
    modalBtnArry = ["modalOpen1","modalOpen2","modalOpen3","modalOpen4"],

    modalOpen =function(){
      for (let i=0; i<modalArry.length; i++){
        document.getElementById(modalBtnArry[i]).addEventListener("click",function(){
          modalAreaAction();
          maskAction();
          document.getElementById(modalArry[i]).classList.add("active");
        })
      }
    };
    modalOpen();

  const modalClose = function(el){
    document.getElementById(el).addEventListener("click",function(){
      modalAreaAction();
      maskAction();
      for (let i=0; i< modalArry.length; i++){
        document.getElementById(modalArry[i]).classList.remove("active");
      }
    })
  };
  modalClose("modalClose");
  modalClose("mask");

  const tabLabels = document.querySelectorAll('.tab__label a');
  const tabContents = document.querySelectorAll('.tab__content');

  tabLabels.forEach(function(clickedLabel){
    clickedLabel.addEventListener('click',function(e){
      e.preventDefault();
      tabLabels.forEach(function(label){
        label.classList.remove('active');
      });
      this.classList.add('active');
      tabContents.forEach(function(content){
        content.classList.remove('active');
      });
      document.getElementById(clickedLabel.dataset.id).classList.add('active');
    });
  });


  const slider1 = new Swiper ('#swiper-1', {
    // Optional parameters
    loop: true, //ループ
    autoplay:{ //自動再生
      delay:2000, //　再生間隔
      disableOnInteraction: false, //ユーザー操作後の自動再生 false=on
    },
    effect: "slide",  //スライドエフェクト "slide", "fade", "cube", "coverflow","flip"
    speed:3000,  //スライドスピード
    direction: "horizontal",  // 横スライド'horizontal' 縦スライド'vertical'
    initialSlide:0, //初期スライド 0スタート
    spaceBetween: 0, //スライド間余白
    allowTouchMove: true, //スマホスワイプ/pcドラッグ許可falseでナビやサムネイルのみの操作
    //pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',  // "bullets", "fraction", "progressbar"
      dynamicBullets:'true', //bullets使用時オプション
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

  $(function(){
    $('#acordion dt').on('click', function() {
      $(this).next().slideToggle();
      $(this).toggleClass("active");
    });

    $('.closeBtn').on('click',function(){
      $(this).parent('dd').slideToggle();
      $(this).parent('dd').prev().removeClass('active');
    });
  });


},false);//DOMloadEnd

