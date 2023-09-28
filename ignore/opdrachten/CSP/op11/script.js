$("#btn1").click(function(){
    $("div").fadeOut();
});
$("#btn2").click(function(){
    $("div").fadeIn();
});
$("#btn3").click(function(){
    $("div").css({"background-color": "lightblue", "border-color": "blue", "border": "3px dotted"});
});
$("#btn4").click(function(){
    $("#2").text("Mooie text");
})
$("#btn5").click(function(){
    $("#2").text("test2");
})
$("<br><a>Meer text</a>").appendTo(".1");