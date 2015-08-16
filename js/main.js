$(document).ready(function() {

  skrollr.init();

  // Bones of code to snap to slides.

  // var vH;

  // var getVH = function() {
  //   vH = $(window).height();
  //   return vH;
  // }

  // var topAbout = vH;
  // var topSkills = vH * 2;
  // var topProjects = vH * 3;
  // var topConnect = vH * 4;
  // var topGoodbye = vH * 5;

  
  // $(document).scroll(function() {
  //     if (($(document).scrollTop() > (0.95 * vH)) && ($(document).scrollTop() < (1 * vH))) {
  //       $(document).scrollTop(2* vH);
  //     }
  // });


  $(".lieTracker").hide();
  $(".gas").hide();
  $(".tic").hide();
  $(".inResidents").hide();

  $(".webDevelopment").hide();
  $(".productManagement").hide();
  $(".design").hide();


  $(".projectLie").on("click", function() {
    $(this).siblings().css({"background-color": ""});
    $(this).css({"background-color": "rgba(0, 0, 0, 0.1)"})
    $(".projectGroup").fadeOut(200, function() {
    });
    $(".lieTracker").delay(200).fadeIn(200,function() {
    });
  })

  $(".projectGas").on("click", function() {
    $(this).siblings().css({"background-color": ""});
    $(this).css({"background-color": "rgba(0, 0, 0, 0.1)"})
    $(".projectGroup").fadeOut(200, function() {
    });
    $(".gas").delay(200).fadeIn(200,function() {
    });
  })

  $(".projectTic").on("click", function() {
    $(this).siblings().css({"background-color": ""});
    $(this).css({"background-color": "rgba(0, 0, 0, 0.1)"})
    $(".projectGroup").fadeOut(200, function() {
    });
    $(".tic").delay(200).fadeIn(200,function() {
    });
  })

  $(".projectIn").on("click", function() {
    $(this).siblings().css({"background-color": ""});
    $(this).css({"background-color": "rgba(0, 0, 0, 0.1)"})
    $(".projectGroup").fadeOut(200, function() {
    });
    $(".inResidents").delay(200).fadeIn(200,function() {
    });
  })

  $(".skillsDev").on("click", function() {
    $(this).siblings().css({"background-color": ""});
    $(this).css({"background-color": "rgba(0, 0, 0, 0.1)"})
    $(".skillsGroup").fadeOut(200, function() {
    });
    $(".webDevelopment").delay(200).fadeIn(200,function() {
    });
  })

  $(".skillsProd").on("click", function() {
    $(this).siblings().css({"background-color": ""});
    $(this).css({"background-color": "rgba(0, 0, 0, 0.1)"})
    $(".skillsGroup").fadeOut(200, function() {
    });
    $(".productManagement").delay(200).fadeIn(200,function() {
    });
  })

  $(".skillsDesign").on("click", function() {
    $(this).siblings().css({"background-color": ""});
    $(this).css({"background-color": "rgba(0, 0, 0, 0.1)"})
    $(".skillsGroup").fadeOut(200, function() {
    });
    $(".design").delay(200).fadeIn(200,function() {
    });
  })


  // $(window).resize(function() {
  //   getVH();
  // });
  // getVH();

})