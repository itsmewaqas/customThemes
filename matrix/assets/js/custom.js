$(document).ready(function () {

    // sidebar menu code start
    $("#menu > li > a").click(function () {
        $('ul.sub-menu').not($(this).siblings()).slideUp();
        $(this).siblings("ul.sub-menu").slideToggle();
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.svg').not(this).removeClass('menuDown').addClass('menuUP');
        $(this).find('.svg').toggleClass('menuDown menuUP');
    });
    // sidebar menu code end 

    //  sidebar collapsed func start
    $("#collapsedSidebar").click(function () {
        if ($(".dashboardSitebar").hasClass("dashboardSitebarCollapsed")) {
            $(".dashboardSitebar").removeClass("dashboardSitebarCollapsed");
            $(".logo").removeClass("logoCollapsed");
            $(".dashboardSitebar ul li a title").removeClass("titleCtrl");
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
            $(".dashboardSitebar ul li ul").find(":visible").addClass("lastVisibleUl").hide();
            if (window.innerWidth < 767) {
                $(".dashboardSitebar").addClass("dashboardSitebarCollapsed");
            }
        }
    });
    // sidebar collapsed func end

    new Chart(document.getElementById("barChart1"), {
        type: 'bar',
        data: {
            labels: ["Emmar", "DMF", "Almak", "GFH", "Emmar Dav", "Dubai"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#06406F", "#06406F", "#06406F", "#06406F", "#06406F", "#06406F"],
                    data: [3478, 5267, 7304, 7864, 4233, 6522]
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.4
                }]
            }
        }
    });

    new Chart(document.getElementById("barChart2"), {
        type: 'bar',
        data: {
            labels: ["Emmar", "DMF", "Almak", "GFH", "Emmar Dav", "Dubai"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#06406F", "#06406F", "#06406F", "#06406F", "#06406F", "#06406F"],
                    data: [9523, 6500, 5300, 2600, 7410, 3520]
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: false,
                text: ''
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.4
                }]
            }
        }
    });

    new Chart(document.getElementById("pieChart"), {
        type: 'pie',
        data: {
            labels: ["Prop Book", "Wealth Management "],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#06406F", "#F07F37"],
                data: [700, 300]
            }]
        },
        options: {
            title: {
                display: false,
                text: ''
            },
            legend: {
                position: 'bottom'
            },
        }
    });

});












