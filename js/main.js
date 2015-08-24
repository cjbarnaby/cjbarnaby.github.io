$(document).ready(function() {

  skrollr.init();

  // Bones of code to snap to slides. Works, but performance is bad and needs animation/easing.

  // var vH;

  // var getvH = function() {
  //   vH = $(window).height();
  //   return vH;
  // }

  // $(document).scroll(setInterval(function() {

  //   getvH();

  //   var topAbout = vH;
  //   var topSkills = vH * 2;
  //   var topProjects = vH * 3;
  //   var topConnect = vH * 4;
  //   var topGoodbye = vH * 5;

  //   if (($(document).scrollTop() > (0.7 * vH)) && $(document).scrollTop() < (1.20 * vH)) {
  //     $(document).scrollTop(topAbout);
  //   } else if (($(document).scrollTop() > (1.7 * vH)) && $(document).scrollTop() < (2.20 * vH)) {
  //     $(document).scrollTop(topSkills);
  //   } else if (($(document).scrollTop() > (2.7 * vH)) && $(document).scrollTop() < (3.20 * vH)) {
  //     $(document).scrollTop(topProjects);
  //   } else if (($(document).scrollTop() > (3.7 * vH)) && $(document).scrollTop() < (4.20 * vH)) {
  //     $(document).scrollTop(topConnect);
  //   } else if ($(document).scrollTop() > (4.7 * vH)) {
  //     $(document).scrollTop(topGoodbye);
  //   }

  // }, 1000));



  
  // $(document).scroll(function() {
  //     if (($(document).scrollTop() > (0.95 * vH)) && ($(document).scrollTop() < (1 * vH))) {
  //       console.log("Yes");
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