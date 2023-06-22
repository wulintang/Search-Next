// JavaScript Document

(function ($){
	var action = false,addState = false;
	var account = [
		{type:"Email",title:"邮箱",tip:"",text:true,text_placeholder:"邮箱..."},
		{type:"Phone",title:"电话",tip:"",text:true,text_placeholder:"电话号码..."},
		{type:"Skype",title:"Skype",tip:"",text:true,text_placeholder:"Skype账号..."},
		{type:"WhatsApp",title:"WhatsApp",tip:true,text:true,text_placeholder:"WhatsApp账号..."},
		{type:"Viber",title:"Viber",tip:"",text:true,text_placeholder:"Viber号码..."},
		{type:"QQ",title:"QQ",tip:"",text:true,text_placeholder:"QQ账号..."},
		{type:"Message",title:"商城留言板",tip:"",text:false,url:"/pages/contactus"},
		{type:"QRcode",title:"二维码",tip:"",tip_placeholder:"图片地址...",text:false},
		{type:"Address",title:"地址",tip:"Contact Us",text:false},
		{type:"Top",title:"返回顶部",tip:"Back top",text:false},
	];
	var initialize = {
		theme: "panel_theme_round_solid",
		state: true,
		moveState: true,
		size: "auto",
		position: "right-center",
		tip:{"background-color":"#000","color":"#fff"},
		account: [
			{type:"Email",tip:"",text:"",url: ""},
			{type:"Phone",tip:"",text:"",url: ""},
			{type:"Skype",tip:"",text:"",url: ""},
			{type:"WhatsApp",tip:"",text:"",url: ""},
			{type:"Viber",tip:"",text:"",url: ""},
			{type:"QRcode",tip:"https://img.wulintang.cn/upfile/2022/09/1663305978617.jpg"},
			{type:"Top",tip:"Back top"}
		]
	};
	var getUrl = function(type,text){
		switch(type){
			case "Email":
				text = "mailto:" + text;
				break;
			case "Phone":
				text = "tel:" + text;
				break;
			case "Skype":
				text = "skype:" + text + "?chat";
				break;
			case "WhatsApp":
				text = "https://api.whatsapp.com/send?phone=" + text;
				break;
			case "Viber":
				text = "viber://tel:" + text;
				break;
			case "Message":
				text = "/pages/contactus";
				break;
			case "QQ":
				text = "http://wpa.qq.com/msgrd?v=3&uin=" + text + "&site=qq&menu=yes";
				break;
			default:
				text = null;
		}
		return text;
	}
	var getTitle = function(type){
		$.each(account,function(index,obj){
			if(obj.type == type){
				type = obj.title;
				return false;
			}
		})
		return type;
	}
	var getText = function(type){
		var text = false;
		$.each(account,function(index,obj){
			if(obj.type == type){
				text = obj.text;
				return false;
			}
		})
		return text;
	}
	var getPlaceholder = function(type,module){
		var text = "-";
		$.each(account,function(index,obj){
			if(obj.type == type){
				switch(module){
					case "tip":
						text = obj["tip_placeholder"] || text;
						break;
					default:
						text = obj["text_placeholder"] || text;
				}
				return false;
			}
		})
		return text;
	}
	var editBasic = function(name,obj){
		if(typeof obj == 'string'){
			if(obj == "false"){ obj = false; }else if(obj == "true"){ obj = true;};
			initialize[name] = obj;
		}else{
			for(var key in obj){
				initialize[name][key] = obj[key];
			}
		}
		$("body").floating(initialize);
	}
	var editAccount = function(){
		var obj = [];
		$("#panel_account tbody tr").each(function(index, element) {
			var tr = {},
				type = $(this).attr("data-type"),
				text = $(this).find(".data-text").val() || null,
				tip =  $(this).find(".data-tip").val() || null;
			tr["type"] = type;
			tr["tip"] = tip;
			tr["text"] = text;
			tr["url"] = getUrl(type,text);
			obj.push(tr);
		});
		initialize.account = obj;
		$("body").floating(initialize);
		action = false,addState = false;
	}
	var addTr = function(obj){
		var html = "";
		html += '<tr data-type="' + obj.type + '">';
		html += '<td><span class="iconfont icon_drag"></span></td>';
		html += '<td>' + getTitle(obj.type) + '</td>';
		if(getText(obj.type)){
			html += '<td><input class="form-control input-sm data-text" value="" placeholder="' + getPlaceholder(obj.type,"text") + '" type="text"></td>';
		}else{
			html += '<td>-</td>';
		}
		html += '<td><input class="form-control input-sm data-tip" value="' + obj.tip + '" placeholder="' + getPlaceholder(obj.type,"tip") + '" type="text"></td>';
		html += '<td><button type="button" class="btn btn-default btn-sm btn-destroy"><span class="glyphicon glyphicon-trash"></span></button></td>';
		html += '</tr>';
		html = $(html);
		html.data(obj);
		html.find(".btn-destroy").click(function(){
			methods.destroy.apply(this);
		})
		html.find("input").blur(function(){
			if(action) {editAccount();}
		}).bind('keypress',function(event){  
			if(event.keyCode == "13" && action){editAccount();}  
		}).bind('input propertychange',function(){
			action = true;
		});
		$("#panel_account").addClass("success_list").find("tbody").append(html);
		if(addState){ editAccount();}
	}
	var methods = {
		init: function (method) {
			/*下拉选择*/
			$(".widget-select").each(function(index, element) {
				var obj = initialize[$(this).data("type")];
				if(obj == true){
					obj = "true";
				}else if(obj == false){
					obj = "false"
				}
				$(this).val(obj);
				//$(this).find("option[value=" + obj + "]").attr("selected",true);
			});
			var method_select = $(".widget-select").selectpicker();
			method_select.on('changed.bs.select', function (event) {
				editBasic($(this).data("type"),$(this).val());
			});
			/*颜色选择器*/
			$(".widget-color input").each(function(index, element) {
				$(this).val(initialize[$(this).data("type")][$(this).data("name")]);
			});
			var method_color = $(".widget-color").colorpicker({container:true});
			method_color.on('hidePicker', function (event) {
				var $obj = $(this).find("input"),color = {};
				color[$obj.data("name")] = $obj.val();
				editBasic($obj.data("type"),color);
			});
			/*开关按钮*/
			//$(".widget-checkbox").bootstrapSwitch();
			
			/*添加组件*/
			$(".panel_account_btn li").click(function(){
				methods.add($(this).data("type"));
			});
			/*生成列表*/
			$.each(initialize.account,function(index,obj){
				addTr(obj);
			});
			/*拖动排序*/
			$("#panel_account tbody").dragsort({dragSelector:"tr",placeHolderTemplate:"<tr class='dragsortTr'><td></td><td></td><td></td><td></td><td></td></tr>",scrollContainer:".section",dragEnd:editAccount});
			/*调用悬浮插件*/
			$("body").floating(initialize);
		},
		destroy: function () {
			if($(this).closest("tr").siblings("tr").length == 0){
				$("#panel_account").removeClass("success_list")
			}
			$(this).closest("tr").remove();
			editAccount();
		},
		add: function (type) {
			if(typeof type == 'string'){
				$.each(account,function(index,obj){
					if(obj.type == type){
						addState = true;
						addTr(obj);
					}
				})
			}
		},
		get: function () {
			return initialize;
		}
	};
	$.fn.floatmodel = function (method) {
		if (methods[method]) {
			return methods[method].apply(this,Array.prototype.slice.call(arguments, 1));
		}else if (typeof method === 'object' || !method) {
			initialize =  $.extend(initialize,method);
			return methods.init.apply(this);
		}
	};
})(jQuery);