
function enclosureUpClose(obj){
		$(obj).parents('.enclosureUp').css('display','none');
	}
function enclosure() {
	var html = '';
	parent.$('#enclosureUp').html(html);
	html += '<div class="enclosureUp modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">';
	html += '<div class="modal-dialog modal-lg">';
	html += '<div class="modal-content">';
	html += '<div class="modal-header">';
	html += '<button type="button" class="close" onclick="enclosureUpClose(this)"><span aria-hidden="true">×</span></button>';
	html += '<h4 class="modal-title">温馨提示</h4>';
	html += '</div>';
	html += '<div class="modal-body">';
	html += '<p class="text-center">请上传小于5M，格式为JPE、TXT、PDF的文件</p>';
	html += '<p class="text-center"><button type="button" class="btn btn-primary" onclick="enclosureUpClose(this)" data-dismiss="modal">确认</button></p>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	parent.$('#enclosureUp').html(html);
	parent.$('#enclosureUp>div').css({
		'display':'block',
		'opacity':'1',
		'background-color':'rgba(0,0,0,0.5)',
		'padding-top':'50px'
	});
}
function unOrderClose(obj){
		$(obj).parents('.unOrder').css('display','none');
	}
function unOrder() {
	var html = '';
	parent.$('#unOrder').html(html);
	html += '<div class="unOrder modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">';
	html += '<div class="modal-dialog modal-lg">';
	html += '<div class="modal-content">';
	html += '<div class="modal-header">';
	html += '<button type="button" class="close" data-dismiss="modal" onclick="unOrderClose(this)"><span aria-hidden="true">×</span></button>';
	html += '<h4 class="modal-title">温馨提示</h4>';
	html += '</div>';
	html += '<div class="modal-body">';
	html += '<p class="text-center">您距离上课时间不到48小时，取消预约需缴纳5元变更费，确定取消吗？</p>';
	html += '<p class="text-center">';
	html += '<button type="button" class="btn btn-primary btn-yellow" onclick="unOrderClose(this)">取消预约</button>';
	html += '<button type="button" class="btn btn-primary btn-gray" onclick="unOrderClose(this)" style="margin-left:15px;">不取消预约</button>';
	html += '</p>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	parent.$('#unOrder').html(html);
	parent.$('#unOrder>div').css({
		'display':'block',
		'opacity':'1',
		'background-color':'rgba(0,0,0,0.5)',
		'padding-top':'50px'
	});
}
function orderPopClose(obj){
		$(obj).parents('.orderMask').css('display','none');
	}
function orderPop(){
	var html = '';
	parent.$('#order').html(html);
	html += '<div class="orderMask modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">';
	html += '<div class="modal-dialog modal-lg" style="width: 400px;">';
	html += '<div class="modal-content">';
	html += '<div class="modal-header">';
	html += '<button type="button" class="close" onclick="orderPopClose(this)"><span aria-hidden="true">×</span></button>';
	html += '<h4 class="modal-title">成功提示</h4>';
	html += '</div>';
	html += '<div class="modal-body">';
	html += '<p class="text-center">恭喜您已经成功预约以下课程，您可以返回学员首页查看.</p>';
	html += '<div class="media">';
	html += '<div class="media-left">';
	html += '	<a href="#">';
	html += '	<img class="media-object" src="img/img-men112.png" alt="">';
	html += '	</a><span class="text-center">Brain</span>';
	html += '</div>';
	html += '<div class="media-body">';
	html += '	<dl class="dl-horizontal">';
	html += '		<dt>日期：</dt>';
	html += '		<dd>12月13日&nbsp;&nbsp;今天</dd>';
	html += '		<dt>时间：</dt>';
	html += '		<dd>20:00-20:55</dd>';
	html += '		<dt>课程：</dt>';
	html += '		<dd>升学顾问</dd>';
	html += '		<dt>方式：</dt>';
	html += '		<dd>Skype</dd>';
	html += '		<dd style="margin-left: 40px; color: #000;">Brain-IQbar</dd>';
	html += '	</dl>';
	html += '</div>';
	html += '<span class="sepline"></span></div>';
	html += '<p class="text-center">';
	html += '<button type="button" class="btn btn-primary btn-yellow" onclick="orderPopClose(this)">继续预约</button>';
	html += '<a href="javascript:toPage(0);" class="btn btn-primary btn-gray" style="margin-left:15px;">返回首页</a>';
	html += '</p>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	parent.$('#order').html(html);
	parent.$('#order>div').css({
		'display':'block',
		'opacity':'1',
		'background-color':'rgba(0,0,0,0.5)',
		'padding-top':'50px'
	});
	parent.$('#order>div>div').css('top','50px')
}
function payPopClose(obj){
		$(obj).parents('.payPop').css('display','none');
	}
function payPopSuccessClose(obj){
		$(obj).parents('.payPop').css('display','none');
		toPage(5);
	}
function payPop(){
	var html ="";
	parent.$('#payPop').html(html);
	html += '<div class="payPop modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
	html += '	<div class="modal-dialog" role="document" style="width: 500px;">';
	html += '		<div class="modal-content">';
	html += '			<div class="modal-header">';
	html += '				<button type="button" class="close" onclick="payPopClose(this)"><span aria-hidden="true">&times;</span></button>';
	html += '				<h4 class="modal-title" id="myModalLabel">支付结果确认</h4>';
	html += '			</div>';
	html += '			<div class="modal-body" id="modal-body">';
	html += '				<p>请您到新打开的网银页面上进行支付，支付完成前请不要关闭该窗口。</p>';
	html += '				<div style="text-align:center">';
	html += '					<button type="button" class="btn btn-warning" style="background-color:#f7b400;" onclick="payPopSuccessClose(this)">我已完成支付</button>';
	html += '					<button type="button" class="btn btn-danger" onclick="payPopClose(this)">支付遇到问题</button>';
	html += '				</div>';
	html += '			</div>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	parent.$('#payPop').html(html);
	parent.$('#payPop>div').css({
		'display':'block',
		'opacity':'1',
		'background-color':'rgba(0,0,0,0.5)',
		'padding-top':'50px'
	});
}

function aliPayPopClose(obj){
		$(obj).parents('.aliPayPop').css('display','none');
	}
function aliPayPop(){
	var html ="";
	parent.$('#aliPayPop').html(html);
	html += '<div class="modal fade aliPayPop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
	html += '	<div class="modal-dialog" role="document">';
	html += '		<div class="modal-content">';
	html += '			<div class="modal-header">';
	html += '				<button type="button" class="close" onclick="aliPayPopClose(this)"><span aria-hidden="true">&times;</span></button>';
	html += '				<h4 class="modal-title" id="pay-tittle">支付</h4>';
	html += '			</div>';
	html += '			<div class="modal-body">';
	html += '				<form class="form-horizontal">';
	html += '					<div class="form-group">';
	html += '						<label for="name2" class="col-sm-3 control-label">姓名：</label>';
	html += '						<p class="col-sm-9" id="name2">张三丰</p>';
	html += '					</div>';
	html += '					<div class="form-group">';
	html += '						<label for="payId" class="col-sm-3 control-label">支付宝账号：</label>';
	html += '						<p class="col-sm-9" id="payId">6000 **** **** ****123</p>';
	html += '					</div>';
	html += '					<div class="form-group">';
	html += '						<label for="inputCode" class="col-sm-3 control-label">验证码：</label>';
	html += '						<div class="col-sm-9">';
	html += '							<div class="input-group">';
	html += '								<input type="text" class="form-control" id="inputCode" placeholder="请输入验证码">';
	html += '								<span class="input-group-btn">';
	html += '									<button class="btn btn-default" type="button" style="background-color:#e8e8e8;">获取验证码</button>';
	html += '								</span>';
	html += '							</div>';
	html += '							<span class="tip" style="color:red;">请输入正确的验证码</span>';
	html += '						</div>';
	html += '					</div>';
	html += '					<div class="form-group" style="margin-top:40px;">';
	html += '						<div class="verify col-sm-offset-5 col-sm-7">';
	html += '							<button type="submit" class="btn btn-yellow" style="width:110px;padding:5px 0;" onclick="aliPayPopClose(this)">确认</button>';
	html += '						</div>';
	html += '					</div>';
	html += '				</form>';
	html += '			</div>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	parent.$('#aliPayPop').html(html);
	parent.$('#aliPayPop>div').css({
		'display':'block',
		'opacity':'1',
		'background-color':'rgba(0,0,0,0.5)',
		'padding-top':'50px'
	});
}

function changeTelPopClose(obj){
		$(obj).parents('.changeTelPop').css('display','none');
	}
function changeTelPop(){
	var html ="";
	parent.$('#changeTelPop').html(html);
	html += '<div class="modal fade changeTelPop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
	html += '	<div class="modal-dialog" role="document">';
	html += '		<div class="modal-content">';
	html += '			<div class="modal-header">';
	html += '				<button type="button" class="close" onclick="changeTelPopClose(this)"><span aria-hidden="true">&times;</span></button>';
	html += '				<h4 class="modal-title" id="change-tittle">修改绑定手机</h4>';
	html += '			</div>';
	html += '			<div class="modal-body">';
	html += '				<form class="form-horizontal">';
	html += '					<div class="form-group">';
	html += '						<label for="inputNewTel" class="col-sm-3 control-label">手机号：</label>';
	html += '						<div class="col-sm-9">';
	html += '							<input type="email" class="form-control" id="inputNewTel" placeholder="请输入手机号" style="width:92%;">';
	html += '						</div>';
	html += '					</div>';
	html += '					<div class="form-group">';
	html += '						<label for="inputCode" class="col-sm-3 control-label">验证码：</label>';
	html += '						<div class="col-sm-9">';
	html += '							<div class="input-group">';
	html += '								<input type="text" class="form-control" id="putCode" placeholder="请输入验证码">';
	html += '								<span class="input-group-btn">';
	html += '									<button class="btn btn-default" type="button" style="background-color:#e8e8e8;">获取验证码</button>';
	html += '								</span>';
	html += '							</div>';
	html += '							<span class="tip" style="color:red;">请输入正确的验证码</span>';
	html += '						</div>';
	html += '					</div>';
	html += '					<div class="form-group" style="margin-top:40px;">';
	html += '						<div class="verify col-sm-offset-5 col-sm-7">';
	html += '							<button type="submit" class="btn btn-yellow" style="width:110px;padding:5px 0;" onclick="changeTelPopClose(this)">确认</button>';
	html += '						</div>';
	html += '					</div>';
	html += '				</form>';
	html += '			</div>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	parent.$('#changeTelPop').html(html);
	parent.$('#changeTelPop>div').css({
		'display':'block',
		'opacity':'1',
		'background-color':'rgba(0,0,0,0.5)',
		'padding-top':'50px'
	});

}

function depositPopClose(obj){
		$(obj).parents('.depositPop').css('display','none');
	}
function depositPop(){
	var html ="";
	parent.$('#deposit').html(html);
	html += '<div class="modal fade depositPop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
	html += '	<div class="modal-dialog" role="document">';
	html += '		 <div class="modal-content">';
	html += '			<div class="modal-header">';
	html += '				<button type="button" class="close" onclick="depositPopClose(this)"><span aria-hidden="true">&times;</span></button>';
	html += '				<h4 class="modal-title">提现</h4>';
	html += '			</div>';
	html += '			<div class="modal-body">';
	html += '				<form class="form-horizontal">';
	html += '					<div class="form-group">';
	html += '						<label for="inputDepositMoney" class="col-sm-3 control-label">提现金额：</label>';
	html += '						<div class="col-sm-9">';
	html += '							<input type="text" class="form-control" id="inputDepositMoney" placeholder="请输入提现金额">';
	html += '							<span class="tip" style="color:red;">请输入小于奖励余额的纯数字</span>';
	html += '						</div>';
	html += '					</div>';
	html += '					<div class="form-group" style="margin-top:40px;">';
	html += '						<div class="verify col-sm-offset-5 col-sm-7">';
	html += '							<button type="submit" class="btn btn-yellow" style="width:100px; height:40px;" onclick="depositPopClose(this)">确认</button>';
	html += '						</div>';
	html += '					</div>';
	html += '				</form>';
	html += '			</div>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	parent.$('#depositPop').html(html);
	parent.$('#depositPop>div').css({
		'display':'block',
		'opacity':'1',
		'background-color':'rgba(0,0,0,0.5)',
		'padding-top':'50px'
	});

}