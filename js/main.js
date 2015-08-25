$(document).ready(function() {

  skrollr.init();

// Code to snap scroll to slides. 

  var vH;
  var oldTime = performance.now();

  var getvH = function() {
    vH = $(window).height();
  }

  var checkScroll = setInterval(function() {
    var newTime = performance.now();
    var topAbout = vH;
    var topSkills = vH * 2;
    var topProjects = vH * 3;
    var topConnect = vH * 4;
    var topGoodbye = vH * 5;

    if ((newTime - oldTime) > 700) {
      getvH();  //Call function repeatedly to allow for window resize, console open, etc)
      if (($(document).scrollTop() > (0.6 * vH)) && $(document).scrollTop() < (1.2 * vH)) {
        $("html, body").animate({scrollTop:topAbout}, 500, "swing", function() {
          oldTime = performance.now()});
      } else if (($(document).scrollTop() > (1.6 * vH)) && $(document).scrollTop() < (2.2 * vH)) {
        $("html, body").animate({scrollTop:topSkills}, 500, "swing", function() {
          oldTime = performance.now()});
      } else if (($(document).scrollTop() > (2.6 * vH)) && $(document).scrollTop() < (3.2 * vH)) {
        $("html, body").animate({scrollTop:topProjects}, 500, "swing", function() {
          oldTime = performance.now()});
      } else if (($(document).scrollTop() > (3.6 * vH)) && $(document).scrollTop() < (4.2 * vH)) {
        $("html, body").animate({scrollTop:topConnect}, 500, "swing", function() {
          oldTime = performance.now()});
      } else if ($(document).scrollTop() > (4.6 * vH)) {
        $("html, body").animate({scrollTop:topGoodbye}, 500, "swing", function() {
          oldTime = performance.now()});
      }
    }
  }, 300);

// Show/hide projects and skills (hidden on document ready)

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
})