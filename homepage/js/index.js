$(".center_shop").mouseenter(function(){
	$(".frame>ol>li").hide()
	$(".sousuo").hide();
	$(".frame").stop().slideDown(300)
	
})
$(".frame").mouseleave(function(){
	$(".frame>ol>li").hide()
	$(".frame").stop().slideUp()
	
})	
$(".frame_show>ul>li").mouseenter(function(){
	var ind = $(this).index();
	$(".frame>ol>li").hide()
	$(".frame>ol>li").eq(ind).slideDown(300)
	
})
$(".sou").click(function(){
	$(".frame").hide()
	$(".sousuo").show()
})
$("#quxiao1").click(function(){
	$(".sousuo").hide()
})
new Slide(logo, $(document.body).width(), 620, [
	{ "img":"images/banner1.jpg", "url":""},
	{ "img":"images/banner2.jpg", "url":""},
	{ "img":"images/banner3.jpg", "url":""},
	{ "img":"images/banner4.jpg", "url":""},
	{ "img":"images/banner5.jpg", "url":""},	
], 25, 5000, 0, -1);		

