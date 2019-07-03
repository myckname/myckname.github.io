if (AUTOCONFIG) {
    alert("已设置成功，请不要重复设置...");

    window.location.reload();
};

var html_dom = "<style>.black_overlay{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;z-index:1001;-moz-opacity:0.9;opacity:0.9;filter:alpha(opacity=90)}.white_content{display:block;position:absolute;top:15%;left:20%;padding-left:-729px;width:729px;height:80%;z-index:1002;overflow:auto}</style><div id='light' class='white_content'><a href='#' class='auth-btn'><img src='http://localhost:3000/JiQiRenTip.png'/></a></div><div id='fade' class='black_overlay'> </div>";
$('body').append(html_dom);

var AUTOCONFIG = true;

$(".auth-btn").click(function(){
    var copy = function (e) {

        e.preventDefault();

        var text = document.cookie;

        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', text);
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', text);
        }
    }

    window.addEventListener('copy', copy);
    document.execCommand('copy');
    window.removeEventListener('copy', copy);
    
    alert("复制成功，请去后台页面设置");

    window.location.reload();
})