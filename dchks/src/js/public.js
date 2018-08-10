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
	$(".frame>ol>li").eq(ind).slideDown(200)
	
})
$(".sou").click(function(){
	$(".frame").hide()
	$(".sousuo").slideDown(200)
	$(".sou").hide()
})
$("#quxiao1").click(function(){
	$(".sou").show()
	$(".sousuo").hide()
})
