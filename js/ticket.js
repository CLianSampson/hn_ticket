
var styleBlock = "display: block; ";  //原有的属性还存在
var styleNone =  "display: none; ";
var seatArry = [];
var globalDateArry = [];


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


$(".sumbit").unbind("click").bind("click",function(){
	alert('sumbit');
	
	var inviteCode = $('#inviteCode').val();
	var phoneNum = $('#phoneNum').val();
	var account12306 = $('#12306Account').val();
	var password12306 = $('#12306Password').val();
	var startCity = $('#startCity').val();
	var endCity = $('#endCity').val();
	var passengers = $('#input-passenger').val();
	var trainNums = $('#input-train').val();
	var seats = $('#text-have-choose-seat').val() ;
	var dates = $('#text-have-choose-date').val();
	
	if (inviteCode==null || inviteCode=='') {
		alert('请输入邀请码');
		return;
	}
	
	if (phoneNum==null || phoneNum=='') {
		alert('请输入手机号');
		return;
	}
	
	if (account12306==null || account12306=='') {
		alert('请输入12306帐号');
		return;
	}
	
	if (password12306==null || password12306=='') {
		alert('请输入12306密码');
		return;
	}
	
	if (startCity==null || startCity=='') {
		alert('请输入出发城市');
	}
	
	if (endCity==null || endCity=='') {
		alert('请输入到达城市');
		return;
	}
	
	if (passengers==null || passengers=='') {
		alert('请输入乘车人');
		return;
	}
	
	if (trainNums==null || trainNums=='') {
		alert('请输入车次');
		return;
	}
	
	if (seats==null || seats=='') {
		alert('请选择座位');
		return;
	}
	
	if (dates==null || dates=='') {
		alert('请选择日期');
		return;
	}
	
	alert('sumbit sucess');
	
});





"use strict";

var customBiz = {
	init: function() {
		var self = this;
		// 初始化日历

		var calendar = new Calendar({
			// swiper滑动容器
			container: "#calendar",
			// 上一月节点
			pre: ".pre",
			// 下一月节点
			next: ".next",
			// 回到今天
			backToToday: ".backToday",
			// 业务数据改变
			dataRequest: function(currdate, callback, _this) {
				// 无日程安排
				var data = [{
					"date": "2018-04-18"
				}, {
					"date": "2018-04-17"
				}, {
					"date": "2018-04-16"
				}];
				callback && callback(data);
			},
			// 点击日期事件
			onItemClick: function(item) {
				var defaultDate = item.date;
				// 设置标题
				setTitle(defaultDate);
			},
			// 滑动回调
			swipeCallback: function(item) {
				var defaultDate = item.date;
				// 设置标题
				setTitle(defaultDate);
			},
			// 调试
			isDebug: false
		});
		// 设置标题
		var titleNode = document.querySelector('.mid span');

		function setTitle(date) {
			//以年月显示，changed by chenlian on 2018-07-25
			var strArry = date.split('-');
			var str = strArry[0] + '年' + strArry[1] + '月';
			
			titleNode.innerText = str;
		}
		
		return calendar;

	}
}

// 初始化
var calendar = customBiz.init();


$("#chooseDate").click(function(){
	//清空已选数组
	globalDateArry = [];
	
	var contentDateParent = document.getElementsByClassName("content-calander-parent");
	contentDateParent[0].style.cssText = styleBlock;
	
	var contentDate = document.getElementsByClassName("content-calander");
	contentDate[0].style.cssText = styleBlock;
	
	
	var background = document.getElementById("background");
	console.log(background);
	background.style.cssText = styleBlock;
	
	//重新刷新，修复不显示当前月bug
	calendar.refresh();
	
})

$(".certain").click(function(){
	if (globalDateArry.length == 0) {
		alert('请至少添加一个日期');
		return;
	}
	
	var contentDateParent = document.getElementsByClassName("content-calander-parent");
	contentDateParent[0].style.cssText = styleNone;
	
	var contentDate = document.getElementsByClassName("content-calander");
	contentDate[0].style.cssText = styleNone;
	
	var background = document.getElementById("background");
	background.style.cssText = styleNone;
	
	var str = globalDateArry.join(',');
	$('#text-have-choose-date').html(str);
})