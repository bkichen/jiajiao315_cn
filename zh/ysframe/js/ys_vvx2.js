var autologinusername = getCookieValue("autologinusername");
var autologinpassword = getCookieValue("autologinpassword");
$(window).load(function() {
    $('.navbar-toggle').on('click tap', function() {
        $(this).toggleClass('animated');
    });
});


/*top二维码弹出特效*/
$(document).ready(function() {
    $('#wb').hover(function() {
        $(".ewm").slideDown();
        $("#wb a").css("background-color", "#535ca8");
        $("#wb a i").css("background", "url(images/top_wx2.png)");
    })
    $("#wb").mouseleave(function() {
        $(".ewm").slideUp();
        $("#wb a").css("background-color", "transparent");
        $("#wb a i").css("background", "url(images/top_wx.png)");

    });
    /*登录弹出框*/
    $('#signopen').click(function() {
    	if(autologinusername !='' && autologinpassword !=''){
			$("#username1").val(autologinusername);
	        $("#password1").val(autologinpassword);
	        $("#loginForm1").submit();
    	}else{
    		$(".ys_sign").fadeIn();
    	}
    })
    $('#signopen1').click(function() {
        $(".ys_sign").fadeIn();
    })

    $("#gbsignopen").click(function() {
        $(".ys_sign").fadeOut();
    });
    /*关闭视频*/
    $("#close").click(function() {
        location.reload();
    });
    /*关闭密码弹出*/
    $('.Close').click(function() {
        $(".zhbj").fadeOut();
    })
})

function goTop() {
    $('html,body').animate({ 'scrollTop': 0 }, 800);
}
/*导航滑动特效
$(function() {
    nav();
});

function nav() {
    var $liCur = $(".nav-box ul li.active"),
        curP = $liCur.position().left,
        curW = $liCur.outerWidth(true),
        $slider = $(".nav-line"),
        $targetEle = $(".nav-box ul li a"),
        $navBox = $(".nav-box");
    $slider.stop(true, true).animate({
        "left": curP,
        "width": curW
    });
    $targetEle.mouseenter(function() {
        var $_parent = $(this).parent(),
            _width = $_parent.outerWidth(true),
            posL = $_parent.position().left;
        $slider.stop(true, true).animate({
            "left": posL,
            "width": _width
        }, "fast");
    });
    $navBox.mouseleave(function(cur, wid) {
        cur = curP;
        wid = curW;
        $slider.stop(true, true).animate({
            "left": cur,
            "width": wid
        }, "fast");
    });
};
*/

// 登录按钮缓存

$(function() {
    $('#myButton').on('click', function() {
        var $btn = $(this).button('loading');
        // business logic...
        //$btn.button('reset')
    })
});

// 注册按钮缓存

$(function() {
    $('#myButton1').on('click', function() {
        var $btn = $(this).button('loading');
        // business logic...
        //$btn.button('reset')
    })
});

// 修改密码

$(function() {
    $('#myButton2').on('click', function() {
        var $btn = $(this).button('loading');
        // business logic...
        //$btn.button('reset')
    })
});

// 登陆验证
$(document).ready(function() {
    $('.defaultForm').bootstrapValidator({
        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Name: {
                message: '用户名是必填，并且不能是空的',
                validators: {
                    notEmpty: {
                        message: '请输入正确的邮箱或手机号'
                    },
                    regexp: {
                        regexp: /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,
                        message: '请输入正确的邮箱或手机号'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '请输入6-16位数字、字母组成的密码'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '请输入6-16位数字、字母组成的密码'
                    },
                    regexp: {
                       regexp: /^[a-zA-Z0-9_\.]+$/,
                       message: '请输入6-16位数字、字母组成的密码'
                   }
                }
            }
        }
    }).on('error.field.bv', function(e, data) {
		$("#myButton").dequeue();
		$("#myButton").button('reset');
	}).on('success.form.bv',function(e) {
				e.preventDefault();
				/*
				 * var password = $("#password2").val();
				 * var username = $("#username").val();
				 */
				var password = $(this).find('input[id=password]').val();
				var username = $(this).find('input[id=Name]').val();
				var ischeck = $("#autoLogin").is(':checked');// 是否选中自动登录
				// 判断用户名密码
				// \//www.iqbar.net/uc
				$.ajax({
							type : "post",
							url : "//www.iqbar.net/uc/a/student/busiStudent/checkUser?jsoncallback=?",// 获取产品信息列表
							dataType : "jsonp",
							data : {
								password : password,
								username : username
							},
							success : function(data) {
								if (data.flag == 1) {
									if (ischeck == true|| ischeck == 'checked') {
										addCookie("autologinusername",data.username,10, "/");
										addCookie("autologinpassword",password,10, "/");
										isLogin = true;
									}
									$("#username1").val(data.username);
							        $("#password1").val(password);
							        $("#loginForm1").submit();
								} else if (data.flag == 2) {
									alert("用户被冻结");
									$("#myButton").dequeue();
									$("#myButton").button('reset');
								} else {
									alert("用户名密码错误");
									$("#myButton").dequeue();
									$("#myButton").button('reset');
								}
								
							}
						});
			});
    // Validate the form manually
    $('.validateBtn').click(function() {
        $('.defaultForm').bootstrapValidator('validate');
    });
});

// 注册验证
$(document).ready(function() {
    $('.defaultForm1').bootstrapValidator({
         live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                message: '邮箱是必填，并且不能是空的',
                validators: {
                    emailAddress: {
                        message: '请输入正确的邮箱'
                    },
                    regexp: {
                       regexp: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                       message: '请输入正确的邮箱'
                   }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '请输入6-16位数字、字母组成的密码'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '请输入6-16位数字、字母组成的密码'
                    },
                     regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: '请输入6-16位数字、字母组成的密码'
                     }
                }
            },
            phone: {
                message: '手机号是必填，并且不能是空的',
                validators: {
                    notEmpty: {
                        message: '请输入手机号'
                    },
                    regexp: {
                       regexp: /^1[0-9]{10}$/,
                        message: '请输入正确的手机号'
                   }
                }
            },
            tphone: {
                message: '手机号是必填，并且不能是空的',
                validators: {
                    regexp: {
                        regexp: /^1[0-9]{10}$/,
                        message: '请输入正确的推荐人手机号'
                    }
                }
            }
        }
    }).on('error.field.bv', function(e, data) {
    	$("#myButton1").dequeue();
		$("#myButton1").button('reset');
    }).on('success.form.bv',function(e){
    	e.preventDefault();
    	var email = $("#email").val();
		var telephone = $("#phone").val();
		var password = $("#passwordForReg").val();
		var telephone1 = $("#phoneForReferrer").val();
    	$.ajax({
			type:"post",
			url:"//www.iqbar.net/uc/a/student/busiStudent/checkEmailAndTele?jsoncallback=?",//获取产品信息列表
			dataType:"jsonp",
			data:{
				email:email,
				telephone:telephone,
				password:password,
				telephone1:telephone1
			},
			success : function(data) {
				if(data.flag == 1){
					alert("该邮箱已经被注册！");
				}else if(data.flag==2){
					alert("该手机号已经被注册！");
				}else if(data.flag==3){
					alert("注册成功，页面即将跳转!");
					//setTimeout("window.location.href='//www.iqbar.net/uc/stu_pro/a/login'",3000);
					$("#username1").val(email);
					$("#password1").val(password);
					$("#loginForm1").submit();
				}
				$("#myButton1").dequeue();
				$("#myButton1").button('reset');
			}
    });
    });
    // Validate the form manually
    $('.validateBtn1').click(function() {
        $('.defaultForm1').bootstrapValidator('validate');
    });
});


// 密码验证
$(document).ready(function() {
    $('.defaultForm2').bootstrapValidator({
         live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            phone: {
                message: '手机号是必填，并且不能是空的',
                validators: {
                    notEmpty: {
                        message: '请输入注册手机号'
                    },
                    regexp: {
                    	regexp: /^1[0-9]{10}$/,
                        message: '请输入正确的注册手机号'
                     }//,
                    // remote: {
                    //     url: 'remote.php',
                    //     message: '请输入注册手机号'
                    // }
                }
            },
            yzm: {
                message: '验证码',
                validators: {
                    notEmpty: {
                        message: '请输入验证码'
                    },
                     regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: '请输入正确的验证码'
                     }//,
                    // remote: {
                    //     url: 'remote.php',
                    //     message: '验证码错误'
                    // }

                }
            },
            txyzm: {
                message: '图形验证码',
                validators: {
                    notEmpty: {
                        message: '请输入图形验证码'
                    },
                     regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: '请输入正确的图形验证码'
                     }//,
                    // remote: {
                    //     url: 'remote.php',
                    //     message: '图片验证码错误'
                    // }
                }
            },
            password: {
                message: '新密码',
                validators: {
                    notEmpty: {
                        message: '请输入6-16位的数字、字母组成的密码'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '请输入6-16位数字、字母组成的密码'
                    },
                    identical: { //相同
                        field: 'passwordx', //需要进行比较的input name值
                        message: '两次密码不一致'
                    },
                    regexp: {
                       regexp: /^[a-zA-Z0-9_\.]+$/,
                       message: '请输入6-16位数字、字母组成的密码'
                   }

                }
            },
            passwordx: {
                message: '再次输入新密码',
                validators: {
                    notEmpty: {
                        message: '请再次输入密码'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '请输入6-16位数字、字母组成的密码'
                    },
                    identical: { //相同
                        field: 'password',
                        message: '请与新密码保持一致'
                    },
                    regexp: { //匹配规则
                      regexp: /^[a-zA-Z0-9_\.]+$/,
                       message: '请输入6-16位数字、字母组成的密码'
                   }

                }
            }
        }
    });
    // Validate the form manually
    $('.validateBtn2').click(function() {
        $('.defaultForm2').bootstrapValidator('validate');
    });
});

$(function() {
    //轮番  支持触屏
    if (!IsPC()) {
        $("#ys_carousel>.carousel-inner").swipe({

            swipeLeft: function() {
                $("#ys_carousel").carousel('next');
            },
            swipeRight: function() {
                $("#ys_carousel").carousel('prev');
            },
            //click: function () {
            //    var dateurl = $("#ys_carousel>.carousel-inner>.active>img").attr("date1-url");
            //   if (dateurl != "");
            //    window.location.href = dateurl;
            // }
        });

        $(".ys_carousel-control.left").swipe({
            click: function() {
                $("#ys_carousel").carousel('prev');
            }
        });

        $(".ys_carousel-control.right").swipe({
            click: function() {
                $("#ys_carousel").carousel('next');
            }
        });
    } else {
        //$("#ys_carousel>.carousel-inner").hover(function () {
        //    $(this).css("cursor", "pointer");
        // });

        //$("#ys_carousel>.carousel-inner").click(function () {
        //  var dateurl = $("#ys_carousel>.carousel-inner>.active>img").attr("date1-url");
        //  if (dateurl != "");
        // window.location.href = dateurl;
        //});

        $(".ys_carousel-control.left").hover(function() {
            $(this).css("cursor", "pointer");
        });

        $(".ys_carousel-control.left").click(function() {
            $("#ys_carousel").carousel('prev');
        });

        $(".ys_carousel-control.right").hover(function() {
            $(this).css("cursor", "pointer");
        });

        $(".ys_carousel-control.right").click(function() {
            $("#ys_carousel").carousel('next');
        });
    }

    $('#ys_carousel').carousel({
        interval: 10000
    })

    //     //轮番 pc 支持触屏
    //     if (!IsPC()) {
    //         $("#ys_carousel>.carousel-inner").swipe({

    //             swipeLeft: function() {
    //                 $("#ys_carousel").carousel('next');
    //             },
    //             swipeRight: function() {
    //                 $("#ys_carousel").carousel('prev');
    //             },
    //             //click: function () {
    //             //    var dateurl = $("#ys_carousel>.carousel-inner>.active>img").attr("date1-url");
    //             //   if (dateurl != "");
    //             //    window.location.href = dateurl;
    //             // }
    //         });

    //         $(".ys_carousel-control.left").swipe({
    //             click: function() {
    //                 $("#ys_carousel").carousel('prev');
    //             }
    //         });

    //         $(".ys_carousel-control.right").swipe({
    //             click: function() {
    //                 $("#ys_carousel").carousel('next');
    //             }
    //         });
    //     } else {
    //         //$("#ys_carousel>.carousel-inner").hover(function () {
    //         //    $(this).css("cursor", "pointer");
    //         // });

    //         //$("#ys_carousel>.carousel-inner").click(function () {
    //         //  var dateurl = $("#ys_carousel>.carousel-inner>.active>img").attr("date1-url");
    //         //  if (dateurl != "");
    //         // window.location.href = dateurl;
    //         //});

    //         $(".ys_carousel-control.left").hover(function() {
    //             $(this).css("cursor", "pointer");
    //         });

    //         $(".ys_carousel-control.left").click(function() {
    //             $("#ys_carousel").carousel('prev');
    //         });

    //         $(".ys_carousel-control.right").hover(function() {
    //             $(this).css("cursor", "pointer");
    //         });

    //         $(".ys_carousel-control.right").click(function() {
    //             $("#ys_carousel").carousel('next');
    //         });
    //     }

    //     $('#ys_carousel').carousel({
    //         interval: 5000
    //     })

});


function addCookie(name,value,days,path){   /**添加设置cookie**/  
    var name = escape(name);  
    var value = escape(value);  
    var expires = new Date();  
    expires.setTime(expires.getTime() + days * 3600000 * 24);  
    //path=/，表示cookie能在整个网站下使用，path=/temp，表示cookie只能在temp目录下使用  
    path = path == "" ? "" : ";path=" + path;  
    //GMT(Greenwich Mean Time)是格林尼治平时，现在的标准时间，协调世界时是UTC  
    //参数days只能是数字型  
    var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();  
    document.cookie = name + "=" + value + _expires + path;  
}  
function getCookieValue(name) {
	/** 获取cookie的值，根据cookie的键获取值* */
	// 用处理字符串的方式查找到key对应value
	var name = escape(name);
	// 读cookie属性，这将返回文档的所有cookie
	var allcookies = document.cookie;
	// 查找名为name的cookie的开始位置
	name += "=";
	var pos = allcookies.indexOf(name);
	// 如果找到了具有该名字的cookie，那么提取并使用它的值
	if (pos != -1) { // 如果pos值为-1则说明搜索"version="失败
		var start = pos + name.length; // cookie值开始的位置
		var end = allcookies.indexOf(";", start); // 从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
		if (end == -1)
			end = allcookies.length; // 如果end值为-1说明cookie列表里只有一个cookie
		var value = allcookies.substring(start, end); // 提取cookie的值
		return (value); // 对它解码
	} else { // 搜索失败，返回空字符串
		return "";
	}
}



//判读是否是PC
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
