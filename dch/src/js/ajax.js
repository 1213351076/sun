function get(url, fn){
	// 建立核心对象
	var xhr = new XMLHttpRequest();
	
	// 建立连接
	xhr.open("GET", url, true); // true异步    false同步
	
	// 发起请求
	xhr.send();
	
	// 接收响应
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if( fn ){
				fn(xhr.responseText);
			}
		}
	}	
}




function post(url, data, fn){
	// 建立核心对象
	var xhr = new XMLHttpRequest();
	
	// 建立连接
	xhr.open("POST", url, true); // true异步    false同步
	
	// post发送数据时，必须设置请求头
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	// 发起请求
	xhr.send(data);
	
	// 接收响应
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(fn){
				fn(xhr.responseText);
			}
		}
	}	
}
