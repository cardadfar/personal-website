




var file = "";
var scroll = 0;

//---  GLOBAL  ------------------------  TOP NAV BAR  ------------------------------


$("#home-icon").click(function() {
    window.location.href = "index";
});

$("#skills-icon").click(function() {
    window.location.href = "skills";
});

$("#projects-icon").click(function() {
    window.location.href = "projects";
});

$("#experience-icon").click(function() {
    window.location.href = "experience";
});

$("#contact-icon").click(function() {
    window.location.href = "contact";
});


//----------------------------------------------------------------------------------

//---  GLOBAL  -----------------------  BOTTOM NAV BAR  ----------------------------


$("#linkedin-icon").click(function() {
    window.location.href = "https://www.linkedin.com/in/oscar-dadfar-3699b15b/";
});

$("#vimeo-icon").click(function() {
    window.location.href = "https://www.vimeo.com/cardadfar";
});

$("#processing-icon").click(function() {
    window.location.href = "https://www.openprocessing.org/user/103089";
});

$("#git-icon").click(function() {
    window.location.href = "https://github.com/cardadfar";
});


//----------------------------------------------------------------------------------

//---  GLOBAL  -----------------------  LINE ANIMATION  ----------------------------


$(document).ready(function() {
    $(".rectangle01").addClass("rectangle-animate01");
    setTimeout(function() {
        $(".rectangle01").addClass("rectangle-animate021");
    }, 500);
    $(".rectangle02").addClass("rectangle-animate01");
    setTimeout(function() {
        $(".rectangle02").addClass("rectangle-animate022"); 
    }, 500);
    setTimeout(function() {
        $(".center").addClass("center-fadeIn");
    }, 1000);

    //bug();
});

function bug() {
    var docWidth = document.documentElement.offsetWidth;
    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
        }
      }
    );
    bug();
}


//----------------------------------------------------------------------------------

//---  INDEX  -----------------------  INDEX COMPONENTS  ---------------------------


$(".icon").hover(function() {
    $(".circle-dashed").css({"width": "226px", "height": "226px"});
    $(".circle-dashed").css({"left": "calc(50% - 113px)", "top": "35px"});
    $(".circle-dashed").css("animation", "rotate 5s linear infinite");


    $("#circle-dashed2").css({"width": "240px", "height": "240px"});
    $("#circle-dashed2").css({"left": "calc(50% - 120px)", "top": "29px"});

    $(".rect-double").css("animation", "moveMask 2s cubic-bezier(.94,0,.09,1) infinite");
    }, function () {
    $(".circle-dashed").css({"width": "", "height": ""});
    $(".circle-dashed").css({"left": "", "top": ""});
    $(".circle-dashed").css("animation", "");

    $(".rect-double").css({"width": "", "height": ""});
    $(".rect-double").css({"left": "", "top": ""});
    $(".rect-double").css("animation", "");
});

$(".resume-button-hover").hover(function() {
    $(this).addClass("resume-button-on");
    }, function() {
    $(this).removeClass("resume-button-on");
});

$(".resume-button-hover").click(function() {
    window.location.href = "https://drive.google.com/file/d/1dPZD_ZV52Vh8O7ii9_Y-EqXdiiAaVzDR/view?usp=sharing";
});


//----------------------------------------------------------------------------------


//-----------------------------------  BOTTOM NAV BAR ICON JUMP   -----------------------------------


$("#linkedin-icon").hover(function() { bottomIconJump("#linkedin-icon-jump") ;})

$("#vimeo-icon").hover(function() { bottomIconJump("#vimeo-icon-jump") ;})

$("#processing-icon").hover(function() { bottomIconJump("#processing-icon-jump") ;})

$("#git-icon").hover(function() { bottomIconJump("#git-icon-jump") ;})

function bottomIconJump(str) {
    if(!($(str).hasClass("bottom-icon-jump-anim")) && ($(window).width() > 650)) {
        $(str).addClass("bottom-icon-jump-anim");
        setTimeout(function() {
            $(str).removeClass("bottom-icon-jump-anim"); 
        }, 2000);
    }
}


//---------------------------------------------------------------------------------------------------


$(".icon").hover(function() {
    $(this).attr("src","assets/icon.png");
    }, function() {
    $(this).attr("src","assets/grey-icon.png");
});


$(".active-cover").hover(function() {

    $(this).children(".cover-image").addClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "scale(1)", "margin-left" : "6%"});
    $(this).children(".cover-image").css({"animation": "0.5s mask", "animation-timing-function" : "cubic-bezier(0,.26,.61,1)"});


    }, function() {


    $(this).children(".cover-image").removeClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "", "margin-left" : "8%"});
    $(this).children(".cover-image").css({"animation": "", "animation-timing-function" : ""});
});

$(".active-cover-right").hover(function() {

    $(this).children(".cover-image-right").addClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "scale(1)", "margin-left" : "6%"});
    $(this).children(".cover-image-right").css({"animation": "0.5s mask", "animation-timing-function" : "cubic-bezier(0,.26,.61,1)"});


    }, function() {


    $(this).children(".cover-image-right").removeClass("video-screen-on");
    //$(".video-skills").children().css({"transform": "", "margin-left" : "8%"});
    $(this).children(".cover-image-right").css({"animation": "", "animation-timing-function" : ""});
});

$("#how-far-weve-come").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/267934726");
    file = "how-far-weve-come";
    loadFrame();
});

$("#la-da-dee").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/268613841");
    file = "la-da-dee";
    loadFrame();
});

$("#build-our-machine").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/269202925");
    file = "build-our-machine";
    loadFrame();
});

$("#hibikase").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/268214437");
    file = "hibikase";
    loadFrame();
});

$("#idance").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/257607289");
    file = "idance";
    loadFrame();
});

$("#number-one").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/269206599");
    file = "number-one";
    loadFrame();
});

$("#break-free").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/253337182");
    file = "break-free";
    loadFrame();
});

$("#peace-sign").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/250210552");
    file = "peace-sign";
    loadFrame();
});

$("#null-space").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249094937");
    file = "null-space";
    loadFrame();
});

$("#infinite").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249187332");
    file = "infinite";
    loadFrame();
});

$("#plastic-promises").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249258739");
    file = "plastic-promises";
    loadFrame();
});

$("#stitches").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/249324773");
    file = "stitches";
    loadFrame();
});

$("#rondo").click(function() {
    $("iframe").attr("src","https://player.vimeo.com/video/250281441");
    file = "rondo";
    loadFrame();
});

function loadFrame() {
    scroll = $(window).scrollTop();
    $(".video-player").addClass("video-player-on");
    $(".video-bg").addClass("video-player-on");
    $(".dark-frame").addClass("dark-frame-on");
    $(".all").css("position", "fixed");
    $(".all").css("overflow-y", "hidden");
    $(".vid").css("overflow-y", "auto");
    loadData();
    setTimeout(function() {
        $(".video-bg").addClass("video-bg-error");
    }, 2000);
}

function loadData() {

    $.getJSON( "assets/project-descriptions/" + file +".json", function( data ) {

    $(".video-bg").append("<div id='margin-top'></div>");
    $(".video-bg").append("<p style='text-align: center; color: #b2b2b2;' id='text-bounce'>v</p>");
    bounceText();
    $(".video-bg").append("<p style='text-align: center; color: #b2b2b2;'>scroll down for more info</p>");

      $.each( data, function( key, val ) {

        if (key.charAt(0) == 't') {   //title
            $(".video-bg").append("<p class='hi' id='start-text'>" + val + "</p>");
            var anim_change1 = "<animate fill='freeze' id='animation-to-check1' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
            var anim_change2 = "<animate fill='freeze' id='animation-to-check2' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
            var anim_change3 = "<animate fill='freeze' id='animation-to-check3' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,10, 20,0' />";
            var anim_origin1 = "<animate fill='freeze' id='animation-to-origin1' begin='indefinite' attributeName='points' dur='500ms' to='0,0 10,0 20,0' />";
            var anim_origin2 = "<animate fill='freeze' id='animation-to-origin2' begin='indefinite' attributeName='points' dur='500ms' to='0,5 10,5 20,5' />";
            var anim_origin3 = "<animate fill='freeze' id='animation-to-origin3' begin='indefinite' attributeName='points' dur='500ms' to='0,10 10,10 20,10' />";
            $(".video-bg").append("<svg class='trigger' onclick='trigger()' width='20' height='10' style='margin-left:10%; padding: 15px'> <polygon points='0,0 10,0 20,0' style='stroke:white;stroke-width:0.75;'>" + anim_change1 + anim_origin1 + "</polygon> <polygon points='0,5 10,5 20,5' style='stroke:white;stroke-width:0.75;'>" + anim_change2 + anim_origin2 + "</polygon> <polygon points='0,10 10,10 20,10' style='stroke:white;stroke-width:1;'>" + anim_change3 + anim_origin3 + "</polygon> </svg>");
        }

        else if (key.charAt(0) == 's')   //subtitle
            $(".video-bg").append("<p class='subtitle'>" + val + "</p>");

        else if (key.charAt(0) == 'd')   //subtitle
            $(".video-bg").append("<p class='description'>" + val + "</p>");

        else if (key.charAt(0) == 'i')   //image
            $(".video-bg").append("<img src='assets/project-descriptions/images/" + val + "'>");

        else if (key.charAt(0) == 'l')   //list element
            $(".video-bg").append("<li>" + val + "</li>");

        else if (key.charAt(0) == 'a') {  //link element
            $(".video-bg").append("<a href='" + val + "'>" + val + "</a>");
            $(".video-bg").append("<div class='line'></div>");
        }

        else if (key.charAt(0) == 'c')  //link element
            $(".video-bg").append("<div id='codeBit'><code>" + val + "</code></div>");

        else if (key.charAt(0) == 'p')   //text
            $(".video-bg").append("<p class='indent'>" + val + "</p>");

        else if (key.charAt(0) == 'w') {   //intro data
            $(".video-bg").append("<div class='drop-shadow'></div>");
            $(".video-bg").append("<div class='collapse-menu'></div>");
            $(".video-bg").append("<div style='margin-top: 10px'></div>");
            for(var i = 0; i < val.length; i++) {
                $.each( val[i], function( k_key, k_val ) {
                    if(k_key == 'music-icon.png')
                        $(".collapse-menu").append("<div class='more-info'><img src='assets/project-descriptions/images/" + k_key + "'><a href='" + k_val[0] + "'>" + k_val[1] + "</a></div>");
                    else
                        $(".collapse-menu").append("<div class='more-info'><img src='assets/project-descriptions/images/" + k_key + "'><p>" + k_val + "</p></div>");
                });
            }
        }

        });

    $(".video-bg").append("<div style='height: 25px'></div>");

    });
}

var triggerCount = 0;

function trigger() {
    triggerCount++;
    $("trigger").css("max-height", "300px");
    if(triggerCount % 2 == 1) {
        document.getElementById("animation-to-check1").beginElement();
        document.getElementById("animation-to-check2").beginElement();
        document.getElementById("animation-to-check3").beginElement();
        $(".collapse-menu").css("max-height", "300px");
        $(".drop-shadow").css("opacity", "0.65");
    }
    else
    {
        document.getElementById("animation-to-origin1").beginElement();
        document.getElementById("animation-to-origin2").beginElement();
        document.getElementById("animation-to-origin3").beginElement();
        $(".collapse-menu").css("max-height", "");
        $(".drop-shadow").css("opacity", "");
    }
}


function bounceText() {
    $("#text-bounce").css("transform", "translate(0,15px)");
    setTimeout(function() {
        $("#text-bounce").css("transform", "translate(0,25px)");
    }, 1000);
    setTimeout(function() {
        bounceText();
    }, 2000);
}

$("#gan-theft-auto").click(function() {
    window.location.href = "https://drive.google.com/file/d/1jlcmtAxiU-ts4C86HRvTA_b7mhQ_92yf/view";
});

$("#ar-typography").click(function() {
    window.location.href = "https://github.com/cardadfar/AR-Typography";
});

$("#web-dev").click(function() {
    window.location.href = "https://cardadfar.github.io/Web-Dev-Weekend-Website/index.html";
});

$("#worm-park").click(function() {
    window.location.href = "https://www.openprocessing.org/sketch/505150";
});

$("#sound-map").click(function() {
    window.location.href = "https://www.openprocessing.org/sketch/500725";
});

$("#my-minor-melody").click(function() {
    window.location.href = "https://www.openprocessing.org/sketch/478222";
});

$(".dark-frame").click(function() {
    $(".video-player").addClass("transparent-blur");
    $(".video-bg").addClass("transparent-blur");
    $(".dark-frame").removeClass("dark-frame-on");
    $(".all").css("position", "");
    $(".all").css("overflow-y", "");
    triggerCount = 0;

    setTimeout(function() {
        $("html, body").animate({ scrollTop: (scroll.toString()) + "px" }, 1000);
    }, 300);

    setTimeout(function() {
        $(".video-player").removeClass("video-player-on");
        $(".video-bg").removeClass("video-player-on");
        $(".video-player").removeClass("transparent-blur");
        $(".video-bg").removeClass("transparent-blur");
        $(".video-bg").removeClass("video-bg-error");
        $("iframe").attr("src","");
        var myNode = document.getElementsByClassName("video-bg");
        myNode.innerHTML = '';
        $('.video-bg').empty();
    }, 500);
});




$("#C-F17-01").click(function() {
    window.location.href = "http://www.cs.cmu.edu/~15122/";
});

$("#C-F17-02").click(function() {
    window.location.href = "http://math.cmu.edu/~cnewstea/teaching/21-127-S17/notes.pdf";
});

$("#C-F17-03").click(function() {
    window.location.href = "https://www.cmu.edu/dietrich/english/first_year/index.html";
});

$("#C-F17-04").click(function() {
    window.location.href = "https://www.cmucoursefind.xyz/courses/60-101/";
});

$("#C-F17-05").click(function() {
    window.location.href = "http://cmuems.com/2017/60210c/";
});

$("#C-S18-01").click(function() {
    window.location.href = "http://www.cs.cmu.edu/~15122/";
});

$("#C-S18-02").click(function() {
    window.location.href = "https://sites.google.com/site/artml2018/";
});

$("#C-S18-03").click(function() {
    window.location.href = "http://cmuems.com/2018/60212s/";
});

$("#C-S18-04").click(function() {
    window.location.href = "https://www.cmucoursefind.xyz/courses/60-110";
});

$("#C-S18-05").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/collegeoffinearts/schoolofart/courses/courses.pdf";
});

$("#C-S18-06").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/dietrichcollegeofhumanitiesandsocialsciences/departmentofmodernlanguages/courses/";
});


$("#F18-01").click(function() {
    window.location.href = "https://www.cmucoursefind.xyz/courses/17-428/f18";
});

$("#F18-02").click(function() {
    window.location.href = "https://www.cmu.edu/mits/files/syllabi/core%20courses/05-834%20MachineLearningInPractice%20Syllabus%20SP2015.pdf";
});

$("#F18-03").click(function() {
    window.location.href = "http://www.cs.cmu.edu/~charlie/courses/17-214/2018-spring/";
});

$("#F18-04").click(function() {
    window.location.href = "https://www.math.cmu.edu/undergraduate/crs/36217.htm";
});

$("#F18-05").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/";
});

$("#F18-05").click(function() {
    window.location.href = "http://coursecatalog.web.cmu.edu/melloncollegeofscience/departmentofphysics/courses/";
});


function openTab(tabName, tab) {

    var i, tabcontent, tablinks;

    tablinks = document.getElementsByClassName("tab-year");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.background = null;
        }

    document.getElementById(tab).style.background = "#34383d";

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}


function flicker(tab) {

    var delay = 600;
    var elem = '#C-' + tab + ':hover';

    document.getElementById(tab).style.color = "grey";

    setTimeout(function() {
        document.getElementById(tab).style.color = "white";
    }, delay);

    setTimeout(function() {
        if ($(elem).length != 0) {flicker(tab)};
    }, 2*delay);

}