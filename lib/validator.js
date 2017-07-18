/*
datatype：
*:不为空 任意字符；
*6-16:检测长度是否为6-16，且是任意字符
n：是否是数字类型
n2-12:检测阐长度，且是数字字符
s：字符串类型
s2-12:检测长度，且是字符串类型
p：邮政编码
m：手机号
e：邮箱
u：是否是网址

emessage：错误信息提示

*/
(function($){
	/*$.extend({
		validator:function(){
			alert(0)
		}
	})
	$.fn.test = function(){
		alert(1);
	}*/
	let flag = [];
	$.fn.validator = function(){
		
		const emailExp =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		const telExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		const urlExp = /^[a-zA-z]+:\/\/[^\s]*/;
		const postExp = /[1-9]\d{5}(?!\d)/;
		const numerExp = /^[0-9]*$/;
		const strExp = /^[A-Za-z]+$/;
		let inputs = this.find("input[datatype]");
		alert(inputs.length);
		for(let i = 0;i<inputs.length;i++){
			let value = $(inputs[i]).val();//文本域的值
			let tipmessage = $(inputs[i]).attr("tipmessage") || "无效";
			//alert(tipmessage)
			//alert(value);
			if($(inputs[i]).attr("datatype")){
				let datatype = $(inputs[i]).attr("datatype");
				//email
				if(datatype.indexOf('e')!=-1){
					if(!emailExp.test(value)){//no match
						//alert(0)
						handler('email',inputs[i],tipmessage);
					}
				}
				//手机号
				if(datatype.indexOf('m')!=-1){
					if(!telExp.test(value)){//no match
						handler('tel',inputs[i],tipmessage);
					}
				}

				//url
				if(datatype.indexOf('u')!=-1){
					if(!urlExp.test(value)){//no match
						handler('url',inputs[i],tipmessage);
					}
				}

				//邮政编码
				if(datatype.indexOf('p')!=-1){
					if(!postExp.test(value)){//no match
						handler('post',inputs[i],tipmessage);
					}
				}

				//数字
				if(datatype.indexOf('n')!=-1 && datatype.length==1){
					if(!numerExp.test(value)){//no match
						
						handler('number',inputs[i],tipmessage);
					}
				}

				//字符串
				if(datatype.indexOf('s')!=-1&&datatype.length==1){
					if(!strExp.test(value)){//no match
						handler('string',inputs[i],tipmessage);
					}
				}
					
				//*，不为空
				if(datatype.indexOf('*')!=-1&&datatype.length==1){
					if(value.length <= 0){//no match
						handler('*',inputs[i],tipmessage);
					}

				}

				//检测长度的
				if(datatype.length!=1){
					var min = datatype.slice(1,datatype.indexOf('-'));
					var max = datatype.slice(datatype.indexOf('-')+1);
					//alert(min,max)
					if(datatype.indexOf('n')!=-1){
						if(!numerExp.test(value) || !(value.length >= min && value.length <= max)){//no match
							handler('numberlength',inputs[i],tipmessage);
						}
					}
					if(datatype.indexOf('s')!=-1){
						if(!strExp.test(value) || !(value.length >= min && value.length <= max)){//no match
							handler('strlength',inputs[i],tipmessage);
						}
					}
					if(datatype.indexOf('*')!=-1){
						if(!(value.length >= min && value.length <= max)){//no match
							handler('numberlength',inputs[i],tipmessage);
						}
					}
				}
			}
		}
		if(flag.length==0){
			//通过验证
			this.submit();
		}else{
			//未通过验证
			//alert(1);
			return false;
		}
	}
	function handler(str,e,tip){
		let newelement = $("<p></p>").text(tip).css({'color':'red','margin-top':'10px'});
		$(e).parent().append(newelement);
		flag.push(str);
	}
})(jQuery);





