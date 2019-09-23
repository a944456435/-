$(function(){
	//点击菜单时，出现不同的内容
	$("ul").on("click","li",function(){
		// console.log(this);
		//把url= $(this).attr("url")，忘记li里面还嵌套了a标签
		var url = $(this).find("a").attr("url");
		console.log("000",url);
		$(".content").load(url);

		//把li的全部先样式移除，再把选中的样式加上
		$("ul>li").removeClass("");
	});
	
	//进入页面时，模拟点击第一个导航
		$("ul li:first-child").trigger("click");


	//给输入框获取当前时间
	setInterval(function(){
		var day = new Date();
	var time=day.getMonth()+"月"+day.getDate()+"日";
	var hour=day.getHours()+":"+day.getMinutes()+":"+day.getSeconds();
	$("#seaher").val("欢迎登陆！ "+time+"     "+hour)
	},1000);



})