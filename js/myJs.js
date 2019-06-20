$(document).ready(function () {
    $("#myBlog-navbar-sign-submit").click(function () {
        var email = $("#inputEmail-Sign").val();
        var password = $("#inputPassword-Sign").val();//获取邮箱密码
        if (email != null && password != null && email != "" && password != "") {
            $("#signButton").hide();//测试用 只要不为零就可以进入
            $("#sign").modal("hide");
            $("#welcome").text("您好,欢迎来到胡浩的Blog!");
            $("#notsign").hide();
            $("#quicksignin").hide();//隐藏相关登陆提示部件
            return false;//覆盖原始行为
        }
    })
});