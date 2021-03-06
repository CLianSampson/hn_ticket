/**
 * 作者： 孙尊路
 * 创建时间： 2017/06/16 13:27:09
 * 版本： [1.0, 2017/6/16]
 * 描述：  日历组件示例
 */

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

	}
}

// 初始化
customBiz.init();


$(".certain").click(function(){
	if (globalDateArry.length == 0) {
		alert('请至少添加一个日期');
		return;
	}
	
	//先清空当前页面
	$("html").html("");
//	$("html").html(htmlStr);

	console.log(htmlStr);

	$("html").append(htmlStr);
	
	var str = globalDateArry.join(',');
	$('#text-have-choose-date').html(str);
	
//	$.ajax({
//		type:"get",
//		url:"./ticket.html",
//		async:true,
//		success: function(data){
//			$("html").append($(data));	
//			
//			var str = globalDateArry.join(',');
//			$('#text-have-choose-date').html(str);
//		}
//	});
	
	
})
