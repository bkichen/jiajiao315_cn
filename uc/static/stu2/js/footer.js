$(function(){
	footerHtml();
	var secList = '${secList}';
	$("img").each(function (i,e){
		$(e).bind(onload,function (){
		if((e.src).indexOf("tmhk.oss-cn-hongkong.aliyuncs.com")>0){
			if(e.complete && e.width < 17){
				if((e.src).indexOf("https")==0){
					alert(e.src.substr(5));
					e.src = "Http"+e.src.substr(5);	
				}
			}
		}
		});
	});
});

function footerHtml(){
	var html='';
	html += '<div class="container">';
    html += '   <div class="row">';
    html += '       <div class="col-md-7 col-xs-12 col-sm-12">';
    html += '       <p>Copyright © 2016 桥吧教育科技（北京）有限公司. All Rights reserved.京ICP备16013864号</p>';
    html += '</div>';
    html += '       <div class="col-md-5 col-cx-12 col-sm-12">';
    html += '           <ul class="row">';
    html += '               <li class="col-md-3 col-sm-3 col-xs-3"><a href="/uc/a/page/goPage?id=1a81d7131fa649efbd6609014a30e116">帮助中心</a></li>';
    html += '               <li class="col-md-3 col-sm-3 col-xs-3"><a href="/legal.html" target="_blank">法律声明</a></li>';
    html += '               <li class="col-md-3 col-sm-3 col-xs-3"><a href="/agr.html" target="_blank">用户协议</a></li>';
    html += '               <li class="col-md-3 col-sm-3 col-xs-3"><a href="/Aboutus.html" target="_blank">关于我们</a></li>';
    html += '           </ul>';
    html += '       </div>';
    html += '   </div>';
    html += '</div>';
    $('#footer').html(html);
}


//页面跳转
function loadMainFrane(src){
	window.parent.loadMainFrame(src+"?secList="+secList);
}
/*onclick="loadMainFrane('/student/busiStudent/QA')"*/