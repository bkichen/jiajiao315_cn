$(function(){
	viewHtml();
});

function viewHtml() {
	var regActive = "position: absolute; width: 85px; border: 1px solid #00b8ee; top: 55px; left: 25px;";
	var logActive = "position: absolute; width: 60px; border: 1px solid #00b8ee; top: 55px; left: 110px;";

	var view = '';
	view += '<div class="modal fade" id="logView" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
	view += '	<div class="modal-dialog" role="document"  data-role="page" style="width: 460px;height: 483px;"">';
	view += '		<div class="modal-content"  data-role="content">';
	view += '			<div class="modal-header" style="padding-left: 30px; padding-right: 30px;">';
	view += '				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
	view += '				<h4 class="modal-title" id="logModalLabel"><a href="index.html#registerForm1" id="register" data-toggle="tab" style="margin-right:1rem;color:#999999;">立即注册</a>';
	view +=	'				<a href="index.html#logForm1" id="login" data-toggle="tab" style="color:#000;">登录</a><span style="'+logActive+'"></span></h4>';
	view += '			</div>';
	view += '			<div class="modal-body tab-content" style="padding-bottom: 30px;padding-left: 30px; padding-right: 30px;">';
	view += '				<form class="tab-pane" id="logForm1">';
	view += '					<div class="form-group">';
	view += '						<input type="email" class="form-control" id="logEmail1" placeholder="请输入邮箱">';
	view += '						<span class="tip logEmailTip1"></span>'
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="password" class="form-control" id="logPassword1" placeholder="请输入密码">';
	view += '						<span class="tip logPwdTip1"></span>'
	view += '					</div>';
	view += '					<div class="checkbox" style="float:right;">';
	view += '						<label><input type="checkbox"> 自动登录</label>';
	view += '						<a href="retrievePassword.html" style="color:#00b8ee; margin-left: 10px;">忘记密码？</a>';
	view += '					</div>';
	view += '					<button type="submit" class="btn btn-warning" style="background-color:#f7b400;width:400px; border-radius:0;border:none;position:relative;font-size: 18px;height: 45px;">登录</button>';
	view += '				</form>';
	view += '				<form class="tab-pane" id="registerForm1">';
	view += '					<div class="form-group">';
	view += '						<input type="email" class="form-control" id="registerEmail1" placeholder="请输入邮箱">';
	view += '						<span class="tip registerEmailTip1"></span>';
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="password" class="form-control" id="registerPassword1" placeholder="请输入6-20位数字、字母组成的密码" maxlength="20">';
	view += '						<span class="tip registerPwdTip1"></span>';
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="text" class="form-control" id="tel1" placeholder="请输入手机号获取上课提醒" maxlength="11">';
	view += '						<span class="tip telTip1"></span>';
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="text" class="form-control" id="RefereeTel1" placeholder="请输入推荐人手机号/没有不填" maxlength="11">';
	view += '						<span class="tip RefereeTelTip1"></span>';
	view += '					</div>';
	view += '					<button type="submit" class="btn btn-warning" style="background-color:#f7b400;width:400px; border-radius:0;border:none; position:relative;font-size: 18px;height: 45px;">注册</button>';
	view += '				</form>';
	view += '			</div>';
	view += '		</div>';
	view += '	</div>';
	view += '</div>';
	view += '<div class="modal fade" id="registerView" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
	view += '	<div class="modal-dialog" role="document"  data-role="page" style="width: 460px; height: 483px;">';
	view += '		<div class="modal-content"  data-role="content">';
	view += '			<div class="modal-header" style="padding-left: 30px; padding-right: 30px;">';
	view += '				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
	view += '				<h4 class="modal-title" id="logModalLabel"><a href="index.html#registerForm2" id="register" data-toggle="tab" style="margin-right:1rem;color:#999;">立即注册</a>';
	view +=	'				<a href="index.html#logForm2" id="login" data-toggle="tab" style="color:#999;">登录</a><span style="'+regActive+'"></span></h4>';
	view += '			</div>';
	view += '			<div class="modal-body tab-content" style="padding-bottom: 30px;padding-left: 30px; padding-right: 30px;">';
	view += '				<form class="tab-pane" id="logForm2">';
	view += '					<div class="form-group">';
	view += '						<input type="email" class="form-control" id="logEmail2" placeholder="请输入邮箱">';
	view += '						<span class="tip logEmailTip2"></span>'
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="password" class="form-control" id="logPassword2" placeholder="请输入密码">';
	view += '						<span class="tip logPwdTip2"></span>'
	view += '					</div>';
	view += '					<div class="checkbox" style="float:right;">';
	view += '						<label><input type="checkbox"> 自动登录</label>';
	view += '						<a href="retrievePassword.html" style="color:#00b8ee; margin-left: 10px;">忘记密码？</a>';
	view += '					</div>';
	view += '					<button type="submit" class="btn btn-warning" style="background-color:#f7b400;width:400px;border-radius:0;border:none;font-size: 18px;height: 45px;">登录</button>';
	view += '				</form>';
	view += '				<form class="tab-pane" id="registerForm2">';
	view += '					<div class="form-group">';
	view += '						<input type="email" class="form-control" id="registerEmail2" placeholder="请输入邮箱">';
	view += '						<span class="tip registerEmailTip2"></span>';
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="password" class="form-control" id="registerPassword2" placeholder="请输入6-20位数字、字母组成的密码" maxlength="20">';
	view += '						<span class="tip registerPwd2"></span>';
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="text" class="form-control" id="tel2" placeholder="请输入手机号获取上课提醒" maxlength="11">';
	view += '						<span class="tip telTip2"></span>';
	view += '					</div>';
	view += '					<div class="form-group">';
	view += '						<input type="text" class="form-control" id="RefereeTel2" placeholder="请输入推荐人手机号/没有不填" maxlength="11">';
	view += '						<span class="tip RefereeTelTip2"></span>';
	view += '					</div>';
	view += '					<button type="submit" class="btn btn-warning" style="background-color:#f7b400;width:400px; border-radius:0;border:none;font-size: 18px;height: 45px;">注册</button>';
	view += '				</form>';
	view += '			</div>';
	view += '		</div>';
	view += '	</div>';
	view += '</div>';

	$('#view').append(view);

	$("#logView .modal-header h4 a").click(function(e) {
		if ($(this).index() == 0) {
			$("#logView .modal-header h4 span").attr("style", regActive);
		} else {
			$("#logView .modal-header h4 span").attr("style", logActive);
		}
	});

	$("#registerView .modal-header h4 a").click(function(e) {
		if ($(this).index() == 0) {
			$("#registerView .modal-header h4 span").attr("style", regActive);
		} else {
			$("#registerView .modal-header h4 span").attr("style", logActive);
		}
	});


	$("#logEmail1").blur(function(){
		if($("#logEmail1").val()==""){
			$(".logEmailTip1").html("用户名不能为空");
		}else{
			$(".logEmailTip1").html("");
		}
	});

	$("#logPassword1").blur(function(){
		if($("#logPassword1").val()==""){
			$(".logPwdTip1").html("密码不能为空");
		}else{
			$(".logPwdTip1").html("");
		}
	});

	$("#logEmail2").blur(function(){
		if($("#logEmail2").val()==""){
			$(".logEmailTip2").html("用户名不能为空");
		}else{
			$(".logEmailTip2").html("");
		}
	});

	$("#logPassword2").blur(function(){
		if($("#logPassword2").val()==""){
			$(".logPwdTip2").html("密码不能为空");
		}else{
			$(".logPwdTip2").html("");
		}
	});

	$("#registerEmail1").blur(function(){
		
		if (!$.trim($("#registerEmail1").val()).match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
			$(".registerEmailTip1").html("邮箱格式不正确");
		}else{
			$(".registerEmailTip1").html("");
		}
	});

	$("#registerPassword1").blur(function(){
		if($("#registerPassword1").val()==""){
			$(".registerPwdTip1").html("密码不能为空");
		}else{
			$(".registerPwdTip1").html("");
		}
	});

	$("#tel1").blur(function(){
		
		if (!$.trim($("#tel1").val()).match(/^(((13[0-9]{1})|14[0-9]|15[0-9]|17[0-9]|18[0-9])+\d{8})$/)) {
			$(".telTip1").html("手机号格式不正确");
        }else{
        	$(".telTip1").html("");
        }
	});

	$("#RefereeTel1").blur(function(){
		if ($.trim($("#RefereeTel1").val()) != "" && !$.trim($("#RefereeTel1").val()).match(/^(((13[0-9]{1})|14[0-9]|15[0-9]|17[0-9]|18[0-9])+\d{8})$/)) {
			$(".RefereeTelTip1").html("手机号格式不正确");
        }else{
        	$(".RefereeTelTip1").html("");
        }
	})


	$("#registerEmail2").blur(function(){
		
		if (!$.trim($("#registerEmail2").val()).match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
			$(".registerEmailTip2").html("邮箱格式不正确");
		}else{
			$(".registerEmailTip2").html("");
		}
	});

	$("#registerPassword2").blur(function(){
		if($("#registerPassword2").val()==""){
			$(".registerPwd2").html("密码不能为空");
		}else{
			$(".registerPwd2").html("");
		}
	});

	$("#tel2").blur(function(){
		
		if (!$.trim($("#tel2").val()).match(/^(((13[0-9]{1})|14[0-9]|15[0-9]|17[0-9]|18[0-9])+\d{8})$/)) {
			$(".telTip2").html("手机号格式不正确");
        }else{
        	$(".telTip2").html("");
        }
	});

	$("#RefereeTel2").blur(function(){
		if ($.trim($("#RefereeTel2").val()) != "" && !$.trim($("#RefereeTel2").val()).match(/^(((13[0-9]{1})|14[0-9]|15[0-9]|17[0-9]|18[0-9])+\d{8})$/)) {
			$(".RefereeTelTip2").html("手机号格式不正确");
        }else{
        	$(".RefereeTelTip2").html("");
        }
	})
	


}