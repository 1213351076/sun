function Index(){
	var startMove = (elem, json, cb)=>{	
		// 每次开启运动时，先把上一个定时器关闭掉
		clearInterval(elem.timer);
		elem.timer = setInterval(()=>{
			var flag = true; // 假设所有属性，都达到了目标值
			for( var attr in json ){	
				// 获取目标值（终点）
				var target = json[attr];
				// 获取当前值（每一次运行时的起点）
				var v = getComputedStyle(elem)[attr];
				if(attr == "opacity"){  // 0-1    target=100时，完全显示；target=0时透明；
					v = Math.round(v*100);
				}else{
					v = parseInt(v);
				}
				//console.log(v);
				// 求这一次运行时的步长：差值/2
				var step = (target-v)/6;
				if( step<0 ){
					step = Math.floor(step);
				}else{
					step = Math.ceil(step);
				}
				//console.log(step);
				// 更新
				if(attr == "opacity"){
					elem.style[attr] = (v+step)/100;
				}else{
					elem.style[attr] = v+step+"px";
				}
				// 判断是否更新到了目标值
				if( v != target ){
					// 众多的属性中，至少有1个属性没有到达目标值
					flag = false;
				}
			}
			// 判断是否所有属性均到了目标值
			if( flag ){
				clearInterval(elem.timer);
				// 回调函数
				if( cb ){
					cb();
				}
			}
		}, 30);	
	}	
	$(".porducts_in>li").mouseenter(function(){
		var ind = $(this).index();
		$(".porducts_in>li").eq(ind).css("box-shadow","0 0 5px #a3a3a3")
		$(".two").eq(ind).hide();
		$(".one").eq(ind).slideDown(200)
	})
	$(".porducts_in>li").mouseleave(function(){
		var ind = $(this).index();
		$(".porducts_in>li").eq(ind).css("box-shadow","none")
		$(".one").stop().hide()
		$(".two").slideDown(200)	
	})
	$(".Promtionwhite").mouseenter(function(){
		$(".Promtion_gulid>div").hide();
		$(".Promtion_gulid_one").slideDown(200)
	})
	$(".Promtionwhite1").mouseenter(function(){	
		$(".Promtion_gulid>div").hide();
		$(".Promtion_gulid_two").slideDown(200)
	})
	$(".Promtionwhite2").mouseenter(function(){	
		$(".Promtion_gulid>div").hide();
		$(".Promtion_gulid_scree").slideDown(200)
	})
	$(".Promtionwhite3").mouseenter(function(){	
		$(".Promtion_gulid>div").hide();
		$(".Promtion_gulid_four").slideDown(200)
	
	})
	$(".onsale1").click(function(){
		$(".Promtion_gulid>div").hide();
	})
	
	
	
	
class Slide{
	constructor(el, width, height, data, btnSize=25, ms=2000, ind=0, direction=1){
		this.el = el;
		this.width = width;
		this.height = height;
		this.data = data;
		this.len = data.length;
		this.btnSize = btnSize;	// 按钮大小
		this.ms = ms;	// 间隔毫秒
		this.now = ind;	// 下标
		this.direction = direction;	// 方向
		this.init();
		this.tab();
	}
	init(){
		this.createHtml();
		this.auto();
	}
	createHtml(){
		var that = this;
		// 轮播图的舞台样式
		this.el.style.width = this.width+"px";
		this.el.style.height = this.height+"px";
		this.el.classList.add("Slide");
		// 轮播图结构
		var len = this.len;
		var data = this.data;
		var temp = document.createDocumentFragment();
		// 显示图片
		var ul = document.createElement("ul");
		temp.appendChild(ul);	
		ul.style.width = this.width*(this.len+1)+"px";
		ul.style.height = this.height+"px";
		this.ul = ul;
		for( var i=0; i<len; i++ ){
			var obj = data[i];
			var li = document.createElement("li");
			ul.appendChild(li);
			var a = document.createElement("a");
			li.appendChild(a);
			a.href = obj.url;
			a.target = "_blank";
//			a.title = obj.title;
			var img = document.createElement("img");
			a.appendChild(img);
			img.src = obj.img;
			img.style.width = this.width+"px";
			img.style.height = this.height+"px";
			img.style.border = "0px";
		}
		// 克隆
		var li = ul.firstElementChild.cloneNode(true);
		ul.appendChild(li);
		// 显示按钮
		this.spans = [];
		var ol = document.createElement("ol");
		temp.appendChild(ol);
		for( let i=0; i<len; i++ ){
			var obj = data[i];
			var li = document.createElement("li");
			ol.appendChild(li);
			var span = document.createElement("span");
			li.appendChild(span);
			span.style.width = span.style.height = this.btnSize+"px";
			span.onclick = function(){
				that.now = i;
				that.tab();
			}
			this.spans.push(span);
		}
		// 左键头  
		var p1 = document.createElement("p");
		temp.appendChild(p1);
		p1.style.background = "url(../src/images/to_froward.png) no-repeat";
		this.p1 = p1;
		p1.onclick = function(){
			that.direction = -1;
			that.now--;
			that.tab();
		}
		// 右键头
		var p2 = document.createElement("p");
		temp.appendChild(p2);
		//p2.innerHTML = "&gt;";
		p2.style.background = "url(../src/images/to_next.png) no-repeat";
		this.p2 = p2;
		p2.onclick = function(){
			that.direction = 1;
			that.now++;
			that.tab();
		}
		// 
		var h =50 //this.btnSize*1.5
		p1.style.width=p1.style.height=p2.style.width=p2.style.height=h+"px";
		p1.style.top=p2.style.top=(this.height-h)/2+"px";
		p1.style.lineHeight=p2.style.lineHeight=h+"px";
		p1.style.left="50px";
		p2.style.right="50px";
		
		// 把虚拟节点添加到真实dom中
		this.el.appendChild(temp);
	}
	
	tab(){
		var that = this;
		var len = this.len;
		if( this.now == len ){
			startMove(this.ul, {left:-this.width*this.now}, function(){
				that.ul.style.left = "0px";
			});
			this.now = 0;
		}else if( this.now == -1 ){// 从第一张图片向最后一张图片切换
			// 先瞬间定位到克隆的那张图片上
			this.ul.style.left = -this.width*this.len+"px";
			this.now = this.len-1;
			startMove(this.ul, {left:-this.width*this.now});
		}else{
			startMove(this.ul, {left:-this.width*this.now});
		}
		// 按钮样式
//		var spans = this.spans;
//		for( var i=0; i<len; i++ ){
//			spans[i].className = "";
//		}
//		spans[this.now].className = "selected";
	}
	
	next(){
		this.now+=this.direction;
		this.tab();
	}	
	auto(){
		this.out();		
		this.el.onmouseover = this.over.bind(this);
		this.el.onmouseout = this.out.bind(this);
	}	
	over(){
		// 停止定时器
		clearInterval(this.timer);
		// 显示左右按钮
		startMove(this.p1, {opacity:100});
		startMove(this.p2, {opacity:100});
	}
	out(){
		this.timer = setInterval(this.next.bind(this), this.ms);
		// 隐藏左右按钮
		startMove(this.p1, {opacity:0});
		startMove(this.p2, {opacity:0});
	}
}	
	new Slide(logo, $(document.body).width(), 440, [
		{ "img":"../src/images/banner1.jpg", "url":""},
		{ "img":"../src/images/banner2.jpg", "url":""},
		{ "img":"../src/images/banner3.jpg", "url":""},
		{ "img":"../src/images/banner4.jpg", "url":""},
		{ "img":"../src/images/banner5.jpg", "url":""},	
	], 25, 10000, 0, -1);	
	
}
module.exports.Index=Index();













