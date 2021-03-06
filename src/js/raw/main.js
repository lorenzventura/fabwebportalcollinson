

document.addEventListener("DOMContentLoaded", function(e) {

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  svg4everybody();
  
  

  var rem = function rem()  {
    var html = document.getElementsByTagName('html')[0];
  
    return function () {
        return parseInt(window.getComputedStyle(html)['fontSize']);
    }
  }();    
  

  var $overlay = $('#loyalty-overlay');
  var toggleOverlay = function toggleOverlay() {    
    $overlay.fadeToggle(); 
  }

  $('.p-rewards-points__drop-down, #loyalty-overlay').click(function() {

    $(this).toggleClass('overlay-active');

    
    var loyaltyMenuToggle = function loyaltyMenuToggle()  {
      $('.p-loyalty-nav-mobile').slideToggle({
        duration:400
        ,easing:"swing"
        ,specialEasing:{top:'swing',left:'linear'}
        ,complete:function(){ }
        ,start:function(a){           
          toggleOverlay();
        }
        ,done:function(a){  }
        ,fail:function(error){  }
        ,always:function(a){}
       });
    }();
    
  });



  // iOS switch button toggle
  $(".c-toggle__checkbox").click(function(){
    var $toggleParent = $(this).parent();

    if($(this).is(":checked")){
      $toggleParent.removeClass("is-not-toggled");
      $toggleParent.addClass("is-toggled");

      if ($toggleParent.hasClass("is-toggled")) {
        $toggleParent.find(".c-toggle__icon").css("fill", "#92E842");
      }
    }
    
    else if($(this).is(":not(:checked)")){
      $toggleParent.removeClass("is-toggled");
      $toggleParent.addClass("is-not-toggled");

      if ($toggleParent.hasClass("is-not-toggled")) {
        $toggleParent.find(".c-toggle__icon").css("fill", "#9FA9B8");
      }
    }
  });

  $(".o-btn-prev").click(function () {
    var closestXGrid = $(this).parent().next(".horizontal-scroll");
    var gridItemWidth = $(this).parent().next(".horizontal-scroll").children(".l-card-grid__item").outerWidth(true);
    var leftPos = closestXGrid.scrollLeft();
    closestXGrid.animate({
      scrollLeft: leftPos - gridItemWidth
    }, 100);
  });
  
  $(".o-btn-next").click(function () {
    var closestXGrid = $(this).parent().next(".horizontal-scroll");
    var gridItemWidth = $(this).parent().next(".horizontal-scroll").children(".l-card-grid__item").outerWidth(true);
    var leftPos = closestXGrid.scrollLeft();
    closestXGrid.animate({
      scrollLeft: leftPos + gridItemWidth
    }, 100);
  });

  $(".l-section-module--2col__btn-prev").click(function () {
    var closestXGrid = $(this).parent().parent().next(".l-section-module--2col__content").children(".horizontal-scroll");
    var gridItemWidth = $(this).parent().parent().next(".l-section-module--2col__content").children(".horizontal-scroll").children(".l-section-module--2col__grid-item").outerWidth(true);
    var leftPos = closestXGrid.scrollLeft();
    closestXGrid.animate({
      scrollLeft: leftPos - gridItemWidth
    }, 100);
  });
  
  $(".l-section-module--2col__btn-next").click(function () {
    var closestXGrid = $(this).parent().parent().next(".l-section-module--2col__content").children(".horizontal-scroll");
    var gridItemWidth = $(this).parent().parent().next(".l-section-module--2col__content").children(".horizontal-scroll").children(".l-section-module--2col__grid-item").outerWidth(true);
    var leftPos = closestXGrid.scrollLeft();
    closestXGrid.animate({
      scrollLeft: leftPos + gridItemWidth
    }, 100);
  });


  // $(".l-section-module--2col__btn-prev").click(function () {
  //   var closestXGrid2 = $(".l-section-module--2col__horizontal-scroll");
  //   var gridItemWidth2 = $(".l-section-module--2col__horizontal-scroll").children(".l-section-module--2col__grid-item").outerWidth(true);
  //   var leftPos2 = closestXGrid2.scrollLeft();
  //   closestXGrid2.animate({
  //     scrollLeft: leftPos2 - gridItemWidth2
  //   }, 100);
  // });

  // $(".l-section-module--2col__btn-next").click(function () {
  //   var closestXGrid2 = $(".l-section-module--2col__horizontal-scroll");
  //   var gridItemWidth2 = $(".l-section-module--2col__horizontal-scroll").children(".l-section-module--2col__grid-item").outerWidth(true);
  //   var leftPos2 = closestXGrid2.scrollLeft();
  //   closestXGrid2.animate({
  //     scrollLeft: leftPos2 + gridItemWidth2
  //   }, 100);
  // });

  var mqHandswide = window.matchMedia("(min-width: 43.1875rem)");

  // Terms Pop Up
  $('#terms-and-condition').popup({
    escape: false,
    absolute: true,
    background: true,
    transition: 'all 0.3s',
    pagecontainer: '.p-main-content', 
    scrolllock: true,
    color: 'rgba(12, 35, 64, 0.75)'
  });

  removeTermsPopup();
  
  mqHandswide.addListener(removeTermsPopup)


  function removeTermsPopup(){
    if (mqHandswide.matches) {
      $('#terms-and-condition').popup('hide');
      $('.c-terms--wide').html($('.c-terms').html());
    } else  {
      $('.c-terms--wide').empty();
    } 
  }

  
  
});