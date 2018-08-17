$(".imgList1").click(function(){
	var ind = $(this).parent().index();	
	$(".imgList1").not(":eq("+ind+")").show()
	$(".imgList2").not(":eq("+ind+")").hide();
	$("#list1_left>ul>li").not(":eq("+ind+")").animate({"height":35});
	$("#list1_left>ul>li").eq(ind).animate({"height":"150px"});
	$(".imgList1").eq(ind).hide();
	$(".imgList2").eq(ind).show()
	
})
$(".imgList2").click(function(){
	var ind = $(this).parent().index();	
	$("#list1_left>ul>li").eq(ind).animate({"height":"35px"});
	$(".imgList2").eq(ind).hide();
	$(".imgList1").eq(ind).show();	
})

var body=document.body;
var i=0
db.forEach(obj=>{	
	var li=document.createElement("li");
	box.appendChild(li);
	var img=document.createElement("img");
	img.src=obj.img;
	img.onclick=function(){			
		location.href="http://127.0.0.1/dchks/dist/details.html?"+obj.id
	};
	li.appendChild(img);
	var p1=document.createElement("p")
	li.appendChild(p1)
	p1.innerHTML="¥"+obj.title;	
	var p2=document.createElement("p")
	li.appendChild(p2)
	p2.innerHTML="¥"+obj.price;

})
$("#list1_right>ul>li").mouseenter(function(){
	$(this).css({"border":"10px solid silver","width":"303px","height":"330px","border-radius":"20px"})
	
	
})
$("#list1_right>ul>li").mouseleave(function(){
	$(this).css({"border":"none","width":"323px","height":"350px"})
	
})

var i=0
var num=Math.ceil($("#box").height()/1400);
$(".fanye_span1").html(i+1)
$("#xia").click(function(){		
	i+=1
	hi=i*1400
	$("#box").css("top",-hi)
	if(i>=num){
		i=num-1
		$("#box").css("top",-(hi-1400))
		alert("已经是最后一页")
	}
	$(".fanye_span1").html(i+1)
})
$("#shang").click(function(){	
	if(i==0){
		$("#box").css("top",0)
		alert("上面没有了")
	}else{
		i-=1
		hi=i*1400
		$("#box").css("top",-hi)
	}
	$(".fanye_span1").html(i+1)
})
$("#shou").click(function(){
	i=0
	$("#box").css("top",0)
	$(".fanye_span1").html(1)
})
$("#wei").click(function(){
	i=num-1
	nm=num*1400
	$("#box").css("top",-(nm-1400))
	$(".fanye_span1").html(num)
})
$(".fanye_span2").html(num)
















