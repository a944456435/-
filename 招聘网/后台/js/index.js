$(function(){
	$("ul#nav").on("click","li",function(event){
		 var url=$(this).attr("url");
		 console.log(url);
		 $(".body_content").load(url);
		 
	})
});