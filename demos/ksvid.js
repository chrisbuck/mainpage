var $j = jQuery;


    
var w = $j(window).innerWidth();
var h = $j(window).innerHeight();

var div = $j('#vidDivWrapper');
    
function sizeVid(myW, myH){
    var thisH = myH - 40;
    var thisW = (myH / 9) * 16;
    var myhtml = '<div id="vidDiv" style="background-color: #000000; border: 1px solid #383838; width: ' + thisW + 'px;">';
    myhtml += '<div id="vidInfo" style="border: 1px solid #ff0000; padding-left: 2px; padding-right: 2px;"><span style="color: #ff0000; font-weight: bold;">Notice: </span>';
    myhtml += '<span style="color: #ffffff;">This video is confidential. Please do not distribute to anyone else.</span></div>';
    myhtml += '<video width="' + thisW + 'px" height="' + thisH + 'px" controls="true">';
    myhtml += '<source src="https://www.dropbox.com/s/rvup0myx0pxd6wy/gwizzy-kickstarter-HD-43.mp4?dl=1" type="video/mp4">';
    myhtml += '</video></div>';
 
    div.html(myhtml);
}
    
sizeVid(w, h);

    $j(document).ready(function(){
        $j(window).resize(function(){
            sizeVid($j(window).innerWidth(), $j(window).innerHeight());
        });
    });
    