
var id = location.search.substring(1);//获取链接？后面的数字
console.log(id)
img1.src=db[(id-1)].img
p_name.innerHTML=db[(id-1)].title
center_span1.innerHTML=db[(id-1)].bianma
center_span2.innerHTML="¥"+db[(id-1)].price
img2.src=img1.src;//img2的路径等于img1的路径
img2.style.width="736px";//给img2一个宽度和高度是img1的二倍
img2.style.height="660px";



xiao.onmousemove=function(e){//鼠标在装正常图片上的盒子移动上时，执行以下函数
	var e = e||event;
//	//小盒子在small上的x轴坐标，鼠标在屏幕上的位置减去外面盒子距离最左端电脑屏幕的位置减去小盒子一半的宽度是小盒子在small上的坐标
	var x=e.pageX-xqbox.offsetLeft-glass.offsetWidth
//	//同上
	var y=e.pageY-xqbox.offsetTop-glass.offsetHeight*3+glass.offsetHeight/2
//	
	if(x<0)x=0;//如果x轴坐标小于0即脱离盒子的最左侧（超出盒子最左侧）x距离为0
	if(y<0)y=0;//同上
//	//装正常图片盒子的宽度-小盒子的宽度等于X轴的最大距离
	var maxX=xiao.offsetWidth-glass.offsetWidth;
//	//同上
	var maxY=xiao.offsetHeight-glass.offsetHeight;
	if(x>maxX)x=maxX;//如果x轴坐标大于最大 X轴距离，即脱离盒子的最右侧（超出盒子最右侧）x距离为最大值
	if(y>maxY)y=maxY;//同上
//	//小盒子的定位   小盒子X轴距离
	glass.style.left=x+"px";
	//小盒子Y轴距离
	glass.style.top=y+"px";
//	//大图片的定位
	img2.style.left=-2*x+"px";//二倍X轴距离
	img2.style.top=-2*y+"px";//二倍Y轴距离
}

//透明  淡入淡出形式将盒子显示和隐藏
$("#xiao").mouseenter(function(){//鼠标放在small盒子上时，显示小盒子以及最大盒子，将透明度以过度的形式呈现出来
	event.stopPropagation()
	$("#glass").fadeIn();
	$("#fangda").fadeIn();
	
})

$("#xiao").mouseleave(function(){//鼠标放在small盒子上时，显示小盒子以及最大盒子，将透明度以过度的形式呈现出来
	event.stopPropagation()
	$("#glass").fadeOut();
	$("#fangda").fadeOut();
})
$("#fangda").mouseenter(function(){//鼠标放在small盒子上时，显示小盒子以及最大盒子，将透明度以过度的形式呈现出来
	event.stopPropagation()
	$("#glass").hide();
	$("#fangda").hide();
})
bottom_inp.onclick=function(){			
	get("../pic/shopzc.php?imgs="+img1.src+"&names="+p_name.innerHTML+"&unit="+db[(id-1)].price,function(result){
		alert(result);
	})
};


















