function Sign(){	
	if($("#yanzheng").html()>0){
	}else{	
		var ram=parseInt(1000+Math.random()*9000)
		$("#yanzheng").html(ram)	
	}
	$("#yanzheng").click(function(){	
		var ram=parseInt( 1000+Math.random()*9000)
		$("#yanzheng").html(ram)
	})/*随机数字*/
	
	$("#inputUser").keyup(function(){
		var strUser=$("#inputUser").val();
		if(strUser!=""){					
			$.ajax({					
					url:"../pic/zhuceyz.php",
					type:"GET",
					data:{"user":strUser},							
					success:function(response){
						$("#spanUser").removeClass()
						console.log(response)
							if(response==0){
								$("#spanUser").html("允许注册新用户");									
								$("#spanUser").addClass("green1");	
								
							}else{							
								$("#spanUser").html("用户名重复");									
								$("#spanUser").addClass("red1");
							}					  
					}				
			});
		}	
	});		
	$("#inpPass2,#inpPass1").keyup(function(){
		$("#spanPass2").removeClass()
		if($("#inpPass1").val()==$("#inpPass2").val()){
			$("#spanPass2").html("密码一致");	
			
			$("#spanPass2").addClass("green1");
		}else{
			$("#spanPass2").html("密码不一致");
			$("#spanPass2").addClass("red1");
		}
	
		
	})
	$("#sign_left_btn2").click(function(){
		var inpu=$("#inputUser").val();
		var inpa=$("#inpPass1").val();
		var mal=$("#email").val();
		if($(".green1").length==2&&$("#inpPass2").val()!=""&&$("#yanzheng").html()==$("#yanzhengma").val()){				
			$.ajax({
				url:"../pic/zhuce.php",
				type:"GET",
				data:{
					"user":inpu,
					"pass":inpa,
					"email":mal
					},
				success:function(result){
					alert(result);
					location.href="http://127.0.0.1/dchks/dist/shoping.html?"+ "p="+1 + "&num=" + 5;
				}
			})
			
		}else{
			alert("不允许注册，请检查格式");
		}
	});
	
	
	$("#sign_left_btn").click(function(){
		var yh=$("#inpuser1").val();
		var ma=$("#passuser1").val();
		if(yh==""||ma==""){
			alert("请输入正确格式")
		}else{		
			$.ajax({
				type:"get",
				url:"../pic/denglu.php",
				data:{
					"user":yh,
					"pass":ma
				},
				success:function(result){
					if(result>0){
						alert("登录成功")
						location.href="http://127.0.0.1/dchks/dist/shoping.html?"+ "p="+1 + "&num=" + 5;
					}else{
						alert("没有此用户名，或者密码不正确")
					}				
				}
			});
		}
	})
}
module.exports.Sign=Sign();
















