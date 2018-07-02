$(function () {
    //    获取待分组人员按钮，为其添加绑定事件
        $(".not-group-user").each(function (n) {//n为按钮的序号
            $(this).click(function () {
                $(this).toggleClass("btn-primary");
                //获取包括自身在内的html内容
                var addThis = $(this).prop("outerHTML");
                var word = $(this).text();
                word = $.trim(word);
                var has = false;
                //已选中区域的
                $("#selected-group-area button").each(function(){
                    //如果选中区域已经有了该元素，则删除
                    if($(this).text() == word){
                        has=true;
                        $(this).remove();}
                });
                //如果没有则添加
                if(!has){
                    $("#selected-group-area").append(addThis);
                }
                // //获取父元素的id
                // var isTrue = $(this).parent().attr("id") == "not-group-area";
    
            })
        });
        //    获取已选择区域的人员按钮，为其添加绑定事件
        $("#selected-group-area").delegate("button","click",function () {
            $(this).remove();
            var name = $(this).text();
            $(".not-group-user").each(function () {
                if($.trim($(this).text()) == name){
                    $(this).removeClass("btn-primary");
                }
            })
        });
    //    全选
        $("#checkAll").click(function () {
            //先清空所有样式
            $("#selected-group-area").children("button").remove();
            $(".not-group-user").each(function () {
                    $(this).addClass("btn-primary");
                    var addAllThis = $(this).prop("outerHTML");
                    $("#selected-group-area").append(addAllThis);
            })
        });
    //    清空
        $("#emptyAll").click(function () {
            $("#selected-group-area").children("button").remove();
            $(".not-group-user").each(function () {
                $(this).removeClass("btn-primary");
            })
        });
    })