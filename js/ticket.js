
var styleBlock = "display: block; ";  //原有的属性还存在
var styleNone =  "display: none; ";
var seatArry = [];


$("#chooseDate").click(function(){
	//先清空当前页面
	$("html").html("");
	
	$.ajax({
		type:"get",
		url:"./MobileCalendar-master/chooseDate.html",
		async:true,
		success: function(data){
			$("html").append($(data));	
		}
	});
})


//选择乘车人
$("#button-add-passenger").unbind("click").bind("click",function(){
	var chooseSeat = document.getElementById("button-add-passenger");
	var passengerName = $("#input-passenger").val();
	if (passengerName==null || passengerName=="") {
		alert("乘车人不能为空")
		return;
	}
	
	var orginalName = $("#text-have-choose-passenger").html();
	var name ;
	if (orginalName!=null && orginalName!="" && orginalName!="无") {
		name = orginalName + "," + passengerName;
	}
	
	if (name!=null && name!="") {
		$("#text-have-choose-passenger").html(name)
	}else{
		$("#text-have-choose-passenger").html(passengerName)
	}
	
	//清空已输入内容
	$("#input-passenger").val("");
	
});


//选择车次
$("#button-add-train").unbind("click").bind("click",function(){
	var passengerName = $("#input-train").val();
	if (passengerName==null || passengerName=="") {
		alert("车次不能为空")
		return;
	}
	
	var orginalName = $("#text-have-choose-train").html();
	var name ;
	if (orginalName!=null && orginalName!="" && orginalName!="无") {
		name = orginalName + "," + passengerName;
	}
	
	if (name!=null && name!="") {
		$("#text-have-choose-train").html(name)
	}else{
		$("#text-have-choose-train").html(passengerName)
	}
	
	//清空已输入内容
	$("#input-train").val("");
	
});


//选择座位
$("#chooseSeat").unbind("click").bind("click",function(){
	//先清空已选择的座位
	seatArry = [];
	
	var chooseSeat = document.getElementById("content-list-seat");
	chooseSeat.style.cssText = styleBlock;
	
	var background = document.getElementById("background");
	console.log(background)
	background.style.cssText = styleBlock;
});

//选择座位取消按钮
$("#button-cancle").unbind("click").bind("click",function(){
	var chooseSeat = document.getElementById("content-list-seat");
	chooseSeat.style.cssText = styleNone;
	
	var background = document.getElementById("background");
	background.style.cssText = styleNone;
});

//选择座位确定按钮
$("#button-certain").unbind("click").bind("click",function(){
	var chooseSeat = document.getElementById("content-list-seat");
	chooseSeat.style.cssText = styleNone;
	
	var background = document.getElementById("background");
	background.style.cssText = styleNone;
	
	//不能用 seatArry==[]
	if (seatArry.length==0) {
		//为空则不进行任何操作
	}else{
		var seatStr = seatArry.join(",");
		$("#text-have-choose-seat").html(seatStr)	
	}
	
	window.clearHaveSeatIcon();
	
});

//清空已选图标
function clearHaveSeatIcon(){
	var srcZero = $("#item-image-zero")[0].src ;
	var srcOne = $("#item-image-one")[0].src ;
	var srcTwo = $("#item-image-two")[0].src ;
	var srcSoft = $("#item-image-soft")[0].src ;
	var srcHand = $("#item-image-hand")[0].src ;
	
	var arryZero = srcZero.split("/");
	if (arryZero[arryZero.length-1]=="choosered.png") {
		$("#item-image-zero").attr("src","img/choosegray.png");
	}
	
	var arryOne = srcOne.split("/");
	if (arryOne[arryOne.length-1]=="choosered.png") {
		$("#item-image-one").attr("src","img/choosegray.png");
	}
	
	var arryTwo = srcTwo.split("/");
	if (arryTwo[arryTwo.length-1]=="choosered.png") {
		$("#item-image-two").attr("src","img/choosegray.png");
	}

	var arrySoft = srcSoft.split("/");
	if (arrySoft[arrySoft.length-1]=="choosered.png") {
		$("#item-image-soft").attr("src","img/choosegray.png");
	}
	
	var arryHand = srcHand.split("/");
	if (arryHand[arryHand.length-1]=="choosered.png") {
		$("#item-image-hand").attr("src","img/choosegray.png");
	}

}

//特等座
$("#item-add-zero").unbind("click").bind("click",function(){
	
	var src = $("#item-image-zero")[0].src ;
	var arry = src.split("/");
	if (arry[arry.length-1]=="choosered.png") {
		$("#item-image-zero").attr("src","img/choosegray.png");
		seatArry.pop("特等座")
	}else{
		$("#item-image-zero").attr("src","img/choosered.png");
		seatArry.push("特等座");
	}
});

//一等座
$("#item-add-one").unbind("click").bind("click",function(){

	var src = $("#item-image-one")[0].src ;
	var arry = src.split("/");
	if (arry[arry.length-1]=="choosered.png"){
		$("#item-image-one").attr("src","img/choosegray.png");
		seatArry.pop("一等座")
	}else{
		$("#item-image-one").attr("src","img/choosered.png");
		seatArry.push("一等座");
	}
});

//二等座
$("#item-add-two").unbind("click").bind("click",function(){
	
	var src = $("#item-image-two")[0].src ;
	var arry = src.split("/");
	if (arry[arry.length-1]=="choosered.png") {
		$("#item-image-two").attr("src","img/choosegray.png");
		seatArry.pop("二等座")
	}else{
		$("#item-image-two").attr("src","img/choosered.png");
		seatArry.push("二等座");
	}
});

//软卧
$("#item-add-soft").unbind("click").bind("click",function(){
	
	var src = $("#item-image-soft")[0].src ;
	var arry = src.split("/");
	if (arry[arry.length-1]=="choosered.png") {
		$("#item-image-soft").attr("src","img/choosegray.png");
		seatArry.pop("软卧")
	}else{
		$("#item-image-soft").attr("src","img/choosered.png");
		seatArry.push("软卧");
	}
});

//硬卧
$("#item-add-hand").unbind("click").bind("click",function(){

	var src = $("#item-image-hand")[0].src ;
	var arry = src.split("/");
	if (arry[arry.length-1]=="choosered.png"){
		$("#item-image-hand").attr("src","img/choosegray.png");
		seatArry.pop("硬卧")
	}else{
		$("#item-image-hand").attr("src","img/choosered.png");
		seatArry.push("硬卧");
	}
});