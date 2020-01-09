$(document).ready(function() {
    generateContent();
    // share();
    //gitment();
});

function generateContent() {
    var $mt = $('.toc');
    var toc = $(".post ul#markdown-toc").clone().get(0);
    $mt.each(function(i,o){
        $(o).html(toc);
    });
}