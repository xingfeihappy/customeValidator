# customeValidator
利用jquery实现的小插件--用于验证表单


html中需要一个form ，多个input，如：
<input type="text" datatype="n3-9" tipmessage="无效的邮箱地址"  value="444o4" />

 	$(":submit").click(function(e){
 		e.preventDefault();//阻止默认事件
 		$("#demo").validator();//调用插件
 	})


校验规则
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
