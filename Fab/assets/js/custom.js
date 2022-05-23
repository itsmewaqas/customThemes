$(document).ready(function () {

    // sidebar menu code start
    $("#menu > li > a").click(function () {
        $('ul.sub-menu').not($(this).siblings()).slideUp();
        $(this).siblings("ul.sub-menu").slideToggle();
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.svg').not(this).removeClass('menuDown').addClass('menuUP');
        $(this).find('.svg').toggleClass('menuDown menuUP');
    });

    // $(function ($) {
    //     let url = window.location.href;
    //     $('#menu li a').each(function () {
    //         if (this.href === url) {
    //             $(this).closest('li').addClass('active');
    //         }
    //     });
    // });

    // sidebar menu code end 

    // box menu start
    $('.boxMenuBtn').on('click', function (e) {
        $('.boxMenuDetails').not($(this).siblings()).hide();
        $boxMen = $(this).closest('div');
        $boxMen.siblings().find('.boxMenuDetails').hide();
        $boxMen.find('.boxMenuDetails').toggle();
        e.stopPropagation();
    });
    $(".boxMenuDetails").click(function (e) {
        e.stopPropagation();
    });
    $("body").on("click", function () {
        $(".boxMenuDetails:visible").hide();
    });
    // box menu end

    //  sidebar collapsed func start
    $("#collapsedSidebar").click(function () {
        if ($(".dashboardSitebar").hasClass("dashboardSitebarCollapsed")) {
            $(".dashboardSitebar").removeClass("dashboardSitebarCollapsed");
            $(".logo").removeClass("logoCollapsed");
            $(".dashboardSitebar ul li a title").removeClass("titleCtrl");
            $(".dashboardSitebar ul li a span").removeClass("titleCtrl");
            $(".lastVisibleUl").show();
            $(".dashboardSitebar ul li ul").removeClass("lastVisibleUl");
            if (window.innerWidth < 767) {
                $(".dashboardSitebar").removeClass("dashboardSitebarCollapsed");
            }
        }
        else {
            $(".dashboardSitebar").addClass("dashboardSitebarCollapsed");
            $(".logo").addClass("logoCollapsed");
            $(".dashboardSitebar ul li a title").addClass("titleCtrl");
            $(".dashboardSitebar ul li a span").addClass("titleCtrl");
            $(".dashboardSitebar ul li ul").find(":visible").addClass("lastVisibleUl").hide();
            if (window.innerWidth < 767) {
                $(".dashboardSitebar").addClass("dashboardSitebarCollapsed");
            }
        }
    });
    // sidebar collapsed func end

    // dounught chart 1 start
    var xValues = [
        "50% LAWNZ residence",
        "40% mimosa @ akoya oxygen",
        "30% coursetia @ akoya oxygen",
        "20% miraclz tower",
        "10% LAWNZ residence "];
    var yValues = [55, 40, 30, 20, 10];
    var barColors = [
        "#5ca0e4",
        "#ef726a",
        "#7dacdb",
        "#ca928e",
        "#9fc4e8"
    ];
    new Chart("chart1", {
        type: "pie",

        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            cutoutPercentage: 60,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: ""
            }
        }
    });
    // dounught chart 1 end


    // dounught chart 2 start
    var xValues = [
        "60% management payment",
        "70% land payment",
        "80% infrastructure Payment",
        "90% Refund payment request",
        "100% marketing/sales payment"];
    var yValues = [60, 70, 80, 90, 100];
    var barColors = [
        "#5ca0e4",
        "#ef726a",
        "#7dacdb",
        "#ca928e",
        "#9fc4e8"
    ];
    new Chart("chart2", {
        type: "pie",

        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            cutoutPercentage: 60,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: ""
            }
        }
    });
    // dounught chart 2 end

});


$(document).ready(function () {
    //datepicker plugin
    $('.datePick').datetimepicker({
        weekStart: 1,
        format: "dd MM yyyy",
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        pickerPosition: "bottom-left"
    });
    //datepicker plugin end
});










