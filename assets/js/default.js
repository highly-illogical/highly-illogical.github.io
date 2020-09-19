$(document).ready(function(){
    $("#link-archive").click(function(){
        $("#archive").toggle();
    });

    $(".y").click(function(){
        var year = "."+$(this).attr("data-year");
        $(year+".m").toggle();
    });

    $(".month").click(function(){
        var year = "."+$(this).attr("data-year");
        var month = "."+$(this).attr("data-month");
        $(year+month).toggle();
    });
});