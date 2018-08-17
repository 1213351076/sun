function Public(){
	$(".center_shop").mouseenter(function(){
		$(".frame>ol>li").hide()
		$(".sousuo").hide();
		$(".frame").stop().slideDown(300)
		
	})
	$(".frame").mouseleave(function(){
		$(".sou").show()
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
	$(".shop_p").click(function(){
		location.href="http://127.0.0.1/dchks/dist/shoping.html?"+ "p="+1 + "&num=" + 5;
	})
	
	$(window).scroll(function(){
	
		if($(document).scrollTop()>50){
			$(".listt").css({"position":"fixed","background":"skyblue"})
			$(".sousuo").css({"top":100})
			$(".frame").css({"top":100})
		}else{
			$(".listt").css({"position":"static","background":"#ffffff"})
			$(".sousuo").css({"top":150})
			$(".frame").css({"top":150})
		}
	})
	class Search{
		constructor(sousuo_inp1, ul1){
			this.inp = sousuo_inp1;
			this.ul = ul1;
			this.search_icon=search_icon;
			this.ind = -1;	// 没有选中任何项
			this.init();
		}
		init(){
			this.inp_keyup();
			this.click_img();
		}
		click_img(){
			this.search_icon.onclick=()=>{
				window.open("https://www.baidu.com/s?wd="+this.inp.value);
			}
		}
		inp_keyup(){
			this.inp.onkeyup = e=>{
				switch(e.keyCode){
					case 38: // 上
						this.ind--;
						this.changeCss();
						break;
					case 40:	 // 下
						this.ind++;
						this.changeCss();
						break;
						
					case 13: // 回车
						this.gotoUrl();
						
						break;
					default:
						this.ind = -1;
						this.getData();
				}			
			}
		}
		gotoUrl(){
			
			window.open("https://www.baidu.com/s?wd="+this.inp.value);
		}
		changeCss(){
			
			// 所有的li的样式清空
			var lis = Array.from(this.ul.children);
			lis.forEach(li=>{
				li.className = "";
			});
			// 下标越界时
			if( this.ind<0 ){
				this.ind = lis.length-1;
			}
			if( this.ind>lis.length-1 ){
				this.ind = 0;
			}
			// 下标对应的li的样式设置为selected
			lis[this.ind].className = "selected";
			// 把li的内容放入input中
			this.inp.value = lis[this.ind].innerText;
		}
		getData(){
			var wd = this.inp.value;	
			var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=s.callback&wd="+wd;		
			this.jsonp(url);
		}
		jsonp(url){
			var script = document.createElement("script");
			document.getElementsByTagName("head")[0].appendChild(script);
			script.src = url;
		}
		callback(result){
			var that = this;
			that.ul.innerHTML = "";
			result.s.forEach((v, ind)=>{
				var li = document.createElement("li");
				li.innerHTML = v;
				that.ul.appendChild(li);
			});
		}
	}
	
	var s = new Search(sousuo_inp1, ul1,search_icon);
};

module.exports.Public=Public();




















