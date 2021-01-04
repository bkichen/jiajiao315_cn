$(function() {
	headerHtml();
	$('#logForm1').removeClass('active');
	$('#registerForm1').removeClass('active');
	$('#logForm2').removeClass('active');
	$('#registerForm2').removeClass('active');
	//currentPage();
})
var args = document.getElementById('testScript').getAttribute('data');
function loadSecMenu(id){
	location.href = args.substr(0,args.lastIndexOf('/')) +'/a/page/goPage?id='+id;
}

function loadSecMenuParm(id,obj){
	location.href = args.substr(0,args.lastIndexOf('/')) +'/a/page/goPage?id='+id+'&parm='+obj;
}

function headerHtml(user,menuList,secList) {
	var html = '';
	var banner = '';
	html += '<div class="topbar">';
	html += '	<div class="container">';
	html += '		<div class="pull-left">';
	if(typeof(user) != 'undefined' && user != null){
		html += '			<a class="userName inline-block">hi,'+user+'</a>';
		html += '			<a class="signOut inline-block" onclick="logout()" style="cursor:pointer">退出</a>';
	}else{
		html += '			<a class="login inline-block" data-toggle="modal" data-target="#logView" style="cursor:pointer;">登录</a>';
		html += '			<a class="register inline-block" data-toggle="modal" data-target="#registerView" style="cursor:pointer;">注册</a>';
	}
	html += '		</div>';
	html += '		<div>';
	html += '			<ul class="inline-block unstyled pull-right">';
	html += '				<li class="pull-left"><a href="/index.html" target="_blank">官网首页</a></li>';
	html += '				<li class="pull-left"><a href="/international/international.html" target="_blank">国际课程</a></li>';
	/*html += '				<li class="course pull-left"><a href="http://iqbar.net/zh/freec.html" target="_blank">免费试听</a></li>';*/
	html += '				<li class="callus pull-left">';
	html += '					<a href="javascript:void(0);"><span><img src="'+args+'/stu/img/icon-phone.png" alt="在线咨询"></span>400-001-7878</a>';
	html += '				</li>';
	html += '			</ul>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	html += '<nav class="navbar navbar-default u-navbar" role="navigation">';
	html += '	<div class="container">';
	html += '		<div class="navbar-header">';
	html += '			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">';
	html += '				<span class="sr-only">Toggle navigation</span>';
	html += '				<span class="icon-bar"></span>';
	html += '				<span class="icon-bar"></span>';
	html += '				<span class="icon-bar"></span>';
	html += '			</button>';
	html += '			<a class="navbar-brand brand-white scrolled" id="brand" href="javascript:void(0);"></a>';
	html += '		</div>';
	html += '		<div class="navbar-collapse collapse">';
	html += '			<ul class="nav navbar-nav">';
	
	for(var m in menuList){  
		var cla = "";
		if(menuList[m].name == '首页'){
			cla = "homePage";
		}
		if(menuList[m].name == '个人中心'){
			cla = "personalCenter";
		}
		html += '<li><a id="nav_'+menuList[m].id+'" class="'+cla+'"  href="javascript:void(0)" onclick="loadSecMenu(\''+menuList[m].id+'\')">'+menuList[m].name+'</a></li>';
	}  
	html += '			</ul>';
	html += '		</div>';
	html += '	</div>';
	html += '	<span class="spinner sk-rotating-plane u-loading"></span>';
	html += '</nav>';
	html += '<div class="banner container-fluid" onclick="window.open(\'/most-popular-buddies.html\',target=\'_blank\')" style="cursor:pointer;">';
	html += '<img src="//iqweb.iqbar.net/file/mostpopular/202003/1583398106Spkc.png" width="100%" alt="banner"/>';
	html += '</div>';
	$('#header').html(html);
}

function current(str) {
	$(str).addClass('current');
	$(str).parent().siblings().children().removeClass('current');
}

function cutLog() {
	var activeClass1 = $('#logView #logForm1').attr('class');
	if( activeClass1.indexOf('active') == -1){
		$('#registerForm1').removeClass('active');
		$('#logForm1').addClass('active');
	}
	
}

function cutRegister() {
	var activeClass2 = $('#registerView #registerForm2').attr('class');
	if( activeClass2.indexOf('active') == -1){
		$('#logForm2').removeClass('active');
}		$('#registerForm2').addClass('active');
	}
