var $ = jQuery;
var rightBar = $('#rightBar');
var rbWidth = rightBar.width();
var winWidth = $(window).innerWidth();
var whRatio = 1440 / 839;
var availWide; // = $('#maindiv').width() - 25;
var gSlides = $('#gslides');
function findHeight(aWide){
    var heightVal = (aWide * 839) / 1440;
    return heightVal;
}
var myW = (winWidth * 0.76) - 25;
var myH = findHeight(myW);

var slideStr = '<iframe src="https://docs.google.com/presentation/d/1eMg9b-bM3VtpwCJTWfgvy_MdcMJIq1HMA-SygamRxCI/embed?start=true&loop=true&delayms=5000" frameborder="0" width="' + myW + '" height="' + myH + '" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';

gSlides.html(slideStr);

$(window).resize(function(){
    availWide = ($(window).innerWidth() * 0.76) - 25;
    myW = availWide;
    myH = findHeight(availWide);
    slideStr = '<iframe src="https://docs.google.com/presentation/d/1eMg9b-bM3VtpwCJTWfgvy_MdcMJIq1HMA-SygamRxCI/embed?start=true&loop=true&delayms=5000" frameborder="0" width="' + myW + '" height="' + myH + '" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
    gSlides.html(slideStr);
});