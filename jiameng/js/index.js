var domain = 'https://crm.iqbar.net/'
    //var domain = 'http://192.168.6.164:8080/'

$("#distpicker").distpicker({
    autoSelect: false
});
$("#distpicker1").distpicker({
    autoSelect: false
});
var data1 = {},
    data2 = {},
    data3 = {};

//姓名校验
function checkName(type) {
    var value = $('.form' + type + ' .form-name').val()
    if (type == '1') {
        data1.name = value
    } else if (type == '2') {
        data2.name = value
    } else {
        data3.name = value
    }
    if (value == '') {
        $('.form' + type + ' .nameTip').html('姓名不能为空')
    } else {
        $('.form' + type + ' .nameTip').html('')
    }
}
//手机号校验
function phoneCheck(type) {
    var value = $('.form' + type + ' .form-phone').val()
    if (type == '1') {
        data1.mobile = value
    } else if (type == '2') {
        data2.mobile = value
    } else {
        data3.mobile = value
    }
    if (value == '') {
        $('.form' + type + ' .phoneTip').html('手机号不能为空')
    } else {
        const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        if (!reg.test(value)) {
            $('.form' + type + ' .phoneTip').html('请输入正确的手机号')
        } else {
            $('.form' + type + ' .phoneTip').html('')
        }
    }
}
//切换省份
function changeProvince(type) {
    var value = $('.form' + type + ' .province').find("option:selected").text();
    if (value != '选择省份') {
        if (type == '1') {
            data1.province = value
        } else if (type == '2') {
            data2.province = value
        } else {
            data3.province = value
        }
        $('.form' + type + ' .cityTip').html('')
    } else {
        if (type == '1') {
            data1.province = ''
        } else if (type == '2') {
            data2.province = ''
        } else {
            data3.province = ''
        }
        // $('.form' + type + ' .cityTip').html('请选择省份')
    }
}
//切换城市
function changeCity(type) {
    var value = $('.form' + type + ' .city').find("option:selected").text();
    if (value != '选择城市') {
        if (type == '1') {
            data1.city = value
        } else if (type == '2') {
            data2.city = value
        } else {
            data3.city = value
        }
        $('.form' + type + ' .cityTip').html('')
    } else {
        if (type == '1') {
            data1.city = ''
        } else if (type == '2') {
            data2.city = ''
        } else {
            data3.city = ''
        }
        //$('.form' + type + ' .cityTip').html('请选择城市')
    }
}
//提交
function sub(type, source) {
    checkName(type)
    phoneCheck(type)
    changeProvince(type)
    changeCity(type)
    var nameTip = $('.form' + type + ' .nameTip').html();
    var phoneTip = $('.form' + type + ' .phoneTip').html();
    var cityTip = $('.form' + type + ' .cityTip').html()
        // if (!nameTip && !phoneTip && !cityTip) {
    if (!nameTip && !phoneTip) {
        var myData = {}
        if (type == 1) {
            myData = {
                ...data1,
                remarks: $('.form1 .form-textarea').val(),
                source: source,
            }
        } else if (type == 2) {
            myData = {
                ...data2,
                remarks: $('.form2 .form-textarea').val(),
                source: source
            }
        } else {
            myData = {
                ...data3,
                source: source
            }
        }
        //console.log(myData)
        $.ajax({
            url: domain + 'a/crm/crmdistributoruser/save',
            type: "get",
            data: myData,
            crossDomain: true,
            success: function(res) {
                if (res == 1) {
                    alert('提交成功')
                    $('.form' + type + ' .form-name').val('');
                    $('.form' + type + ' .form-phone').val('');
                    if (type != 3) {
                        $('.form' + type + ' .form-textarea').val('');
                        // $('.form' + type + ' .province').find("option:selected").attr("selected", false);
                        // $('.form' + type + ' .city').find("option:selected").attr("selected", false);
                    }

                } else {
                    alert('手机号已存在')
                }
            }
        });
    } else {
        if (type == 3) {
            if (nameTip) {
                alert(nameTip)
            } else if (phoneTip) {
                alert(phoneTip)
            }
        }
    }

}
//关闭底部浮层
function closeFix() {
    $('.fix').hide()
}

function getUrlParam(name, urlStr) {
    var url = urlStr.split('?')[1]; //获取url中"?"符后的字串   
    var theRequest = new Object();
    if (url) {
        var str = url;
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            //就是这句的问题
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            //之前用了unescape()
            //才会出现乱码  
        }
    }
    return theRequest[name];
}
var referrer = document.referrer;
if (referrer) {
    var serachWord = getUrlParam('wd', referrer) || getUrlParam('oq', referrer);
    console.log(serachWord)
}