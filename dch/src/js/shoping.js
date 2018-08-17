$.ajax({
	type: "get",
	url: "../pic/fanye.php",
	success: function(sse) {
		if(sse == 0) {
			$("#fan1").remove();
			$("#shop_shop").remove();
			$(".fooan").css("display", "none")
			$("#zongjia").css("display", "none")
		} else {
			$.ajax({
				url: "../pic/shopcx.php",
				type: "GET",
				data: {
					"p": "1",
					"num": "5"
				},
				success: function(result) {
					var arr = result;
					var str = JSON.parse(arr);
					var arr1 = [];
					for(var i in str) {
						var id1 = str[i].id1
						console.log(id1)
						var divbox = document.createElement("div");
						tbody1.appendChild(divbox)
						var div1 = document.createElement("div");
						imgss = document.createElement("img")
						div1.appendChild(imgss);
						imgss.src = str[i].imgs1;
						var div2 = document.createElement("div");
						div2.innerHTML = str[i].names1;
						var div3 = document.createElement("div");
						div3.innerHTML = "¥" + str[i].unit1;
						div3.id = Number(str[i].unit1)
						var div4 = document.createElement("div");
						var span1 = document.createElement("span");
						span1.innerHTML = "-"
						div4.appendChild(span1)
						span1.className = "span_class1"
						var inp = document.createElement("input");
						inp.value = "1"
						div4.appendChild(inp)
						inp.className = "inp_class1"
						var span2 = document.createElement("span");
						span2.innerHTML = "+"
						div4.appendChild(span2)
						span2.className = "span_class2"
						var div5 = document.createElement("div");
						var imgxin = document.createElement("img");
						imgxin.src = "../src/images/xin_03.gif"
						imgxin.className = "imgin0"
						div5.appendChild(imgxin);
						var spann = document.createElement("span");
						div5.appendChild(spann);
						spann.innerHTML = "移入收藏夹"
						var imgxin1 = document.createElement("img");
						imgxin1.src = "../src/images/sa_03.gif"
						imgxin1.className = "imgin1"
						div5.appendChild(imgxin1);
						var btnn = document.createElement("button");
						div5.appendChild(btnn);
						btnn.innerHTML = "删除";
						btnn.className = "btnn1";
						divbox.appendChild(div1);
						divbox.appendChild(div2);
						divbox.appendChild(div3);
						divbox.appendChild(div4);
						divbox.appendChild(div5);
					}
					$(".span_class2").click(function() {

						var iv = $(this).parent().prev();

						var ll = $(this).prev()
						var j = Number(ll.val())
						ll.val(j + 1);
						var su = $("#tbody1").children()
						var numb = 0
						for(i = 0; i < su.length; i++) {
							ss = su.eq(i).children().eq(3).children().eq(1).val()
							sh = Number((su.eq(i).children().eq(2).html()).split("¥")[1])
							numb += sh * ss
							console.log(sh)
							console.log(ss)
							console.log(numb)
						}
						$("#zjg").html(numb)
						$("#gjg").html(sse);
					})
					$(".span_class1").click(function() {
						var iv = $(this).parent().prev();
						var ln = $(this).next()
						var j = Number(ln.val())
						if(j == 0) {
							j = 0
						} else {
							ln.val(j - 1)
							var domer = iv.html()
							var domer1 = Number(domer.split("¥")[1])
							var su = $("#tbody1").children()
							var numb = 0
							for(i = 0; i < su.length; i++) {
								ss = su.eq(i).children().eq(3).children().eq(1).val()
								sh = Number((su.eq(i).children().eq(2).html()).split("¥")[1])
								numb += sh * ss
							}
							$("#zjg").html(numb)
							$("#gjg").html(sse);
						}
					})
					$(".btnn1").click(function() {

						if(confirm("您确定删除吗？")) {
							$.ajax({
								url: "../pic/delete.php",
								type: "GET",
								data: {
									"id": id1,
								},
								success: function(result) {
									alert(result)
									location.reload();
								}
							});
						}
					})
					$(".imgin1").click(function() {

						if(confirm("您确定删除吗？")) {
							$.ajax({
								url: "../pic/delete.php",
								type: "GET",
								data: {
									"id": id1,
								},
								success: function(result) {
									alert(result)
									location.reload();
								}
							});
						}
					});
					$.ajax({
						type: "get",
						url: "../pic/fanye.php",
						success: function(result) {

							var max = Math.ceil(result / 5)
							$("#shop_fanspan2").html(max);
							$("#shop_fanspan1").html(p);
							$("#shop_kong").empty()

						}
					});
					//					var domer=div3.innerHTML;
					//					var domer1=Number(domer.split("¥")[1])
					var lm = $(".span_class2").prev();
					var dm = Number(lm.val())
					var su = $("#tbody1").children()
					var numb = 0
					for(i = 0; i < su.length; i++) {
						ss = su.eq(i).children().eq(3).children().eq(1).val()
						sh = Number((su.eq(i).children().eq(2).html()).split("¥")[1])
						numb += ss * sh
					}
					$("#zjg").html(numb);
					$("#gjg").html(sse);

				}
			});

			var test = window.location.search; //获得？后面包括？的值
			var c = test.split("=")[1];
			var p = Number(c.split("&")[0]); //p的值
			$("#on1").click(function() {
				$("#tbody1").empty()
				$.ajax({
					type: "get",
					url: "../pic/fanye.php",
					success: function(result) {

						if(p != 1) {
							p = 1
							shop_Ajax(p)
							$("#shop_fanspan1").html(p);
						} else {
							p = 1
							shop_Ajax(p)
							$("#shop_fanspan1").html(p);
						}

					}
				})
			})
			$("#on2").click(function() {
				$("#tbody1").empty()
				$.ajax({
					type: "get",
					url: "../pic/fanye.php",
					success: function(result) {

						var max = Math.ceil(result / 5)
						if(p != max) {
							p = max
							shop_Ajax(p)
							$("#shop_fanspan1").html(p);
						} else {
							p = max
							shop_Ajax(p)
							$("#shop_fanspan1").html(p);
						}

					}
				})
			})

			$("#sy").click(function() {
				$("#tbody1").empty()
				if(p == 1) {
					p = 1
					shop_Ajax(p)
					$("#shop_fanspan1").html(p);
				} else {
					p -= 1

					shop_Ajax(p)
					//							console.log(typeof(p))
					$("#shop_fanspan1").html(p);
				}
			})

			$("#xy").click(function() {
				$("#tbody1").empty()
				$.ajax({
					type: "get",
					url: "../pic/fanye.php",
					success: function(result) {
						var max = Math.ceil(result / 5)
						if(p == max) {
							p = max
							shop_Ajax(p)
							$("#shop_fanspan1").html(p);

						} else {
							p += 1
							shop_Ajax(p)
							$("#shop_fanspan1").html(p);
						}

					}

				});
			})

			function shop_Ajax(p) {
				$.ajax({
					url: "../pic/shopcx.php",
					type: "GET",
					data: {
						"p": p,
						"num": "5"
					},
					success: function(result) {
						var arr = result;
						var str = JSON.parse(arr);
						console.log(str)
						for(var i in str) {
							var id1 = str[i].id1
							console.log(id1)
							var divbox = document.createElement("div");
							tbody1.appendChild(divbox)
							var div1 = document.createElement("div");
							imgss = document.createElement("img")
							div1.appendChild(imgss);
							imgss.src = str[i].imgs1;
							var div2 = document.createElement("div");
							div2.innerHTML = str[i].names1;
							var div3 = document.createElement("div");
							div3.innerHTML = "¥" + str[i].unit1;
							var div4 = document.createElement("div");
							var span1 = document.createElement("span");
							span1.innerHTML = "-"
							div4.appendChild(span1)
							span1.className = "span_class1"
							var inp = document.createElement("input");
							inp.value = "1"
							div4.appendChild(inp)
							inp.className = "inp_class1"
							var span2 = document.createElement("span");
							span2.innerHTML = "+"
							div4.appendChild(span2)
							span2.className = "span_class2"
							var div5 = document.createElement("div");
							var imgxin = document.createElement("img");
							imgxin.src = "../src/images/xin_03.gif"
							imgxin.className = "imgin0"
							div5.appendChild(imgxin);
							var spann = document.createElement("span");
							div5.appendChild(spann);
							spann.innerHTML = "移入收藏夹"
							var imgxin1 = document.createElement("img");
							imgxin1.src = "../src/images/sa_03.gif"
							imgxin1.className = "imgin1"
							div5.appendChild(imgxin1);
							var btnn = document.createElement("button");
							div5.appendChild(btnn);
							btnn.innerHTML = "删除";
							btnn.className = "btnn1";
							divbox.appendChild(div1);
							divbox.appendChild(div2);
							divbox.appendChild(div3);
							divbox.appendChild(div4);
							divbox.appendChild(div5);
						}
						$(".span_class2").click(function() {

							var j = Number($(".inp_class1").val())
							$(".inp_class1").val(j + 1)
						})
						$(".span_class1").click(function() {

							var j = Number($(".inp_class1").val())
							if(j == 0) {
								j = 0
							} else {
								$(".inp_class1").val(j - 1)
							}
						})
						$(".btnn1").click(function() {

							if(confirm("您确定删除吗？")) {
								$.ajax({
									url: "../pic/delete.php",
									type: "GET",
									data: {
										"id": id1,
									},
									success: function(result) {
										alert(result)
										location.reload();
									}
								});
							}
						})
						$(".imgin1").click(function() {

							if(confirm("您确定删除吗？")) {
								$.ajax({
									url: "../pic/delete.php",
									type: "GET",
									data: {
										"id": id1,
									},
									success: function(result) {
										alert(result)
										location.reload();
									}
								});
							}
						})
						//					var domer=div3.innerHTML;
						//					var domer21=Number(domer.split("¥")[1])
						var lm = $(".span_class2").prev();
						var dm = Number(lm.val())
						var su = $("#tbody1").children()
						var numb = 0
						for(i = 0; i < su.length; i++) {
							ss = su.eq(i).children().eq(3).children().eq(1).val()
							sh = Number((su.eq(i).children().eq(2).html()).split("¥")[1])
							numb += ss * sh
						}
						$("#zjg").html(numb);
						$("#gjg").html(sse);
					}
				});
			}

		}
	}
});
$("#jizu").click(function() {
	location.href = "http://127.0.0.1:8020/erjieduan/dchks/dist/list.html"
})
$("#jiezhang").click(function() {

	alert("共计" + $("#zjg").html() + "元")
})
$(".qink").click(function() {
	if(confirm("您确定删除吗？")) {
		$.ajax({
			url: "../pic/delete1.php",
			type: "GET",
			success: function(result) {
				location.reload();
			}
		});
	}
});


















