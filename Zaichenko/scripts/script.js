$(function () {

    function ViewActiveMenu() {

        let currentPage = window.location.pathname.split('/').pop();

        $('nav a').each(function() {

            let href = $(this).attr('href');

            if (currentPage === href) {
                $(this).addClass('active');
            }

        })
    }

    ViewActiveMenu();

})