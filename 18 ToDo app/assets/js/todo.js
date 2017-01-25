
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(eve){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	eve.stopPropagation();
});

$("input[type='text']").on("keypress",function(eve){
	if(eve.which === 13){
		var todoText=$(this).val();
		var html="<li><span class=\"fa fa-trash\"></span> "+todoText+"</li>";
		$("ul").append(html);
		$(this).val("");
	}
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
})