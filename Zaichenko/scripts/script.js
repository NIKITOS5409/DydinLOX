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

    function UpdateWorkStatus() {

        let timeNow = new Date().getHours();
        let isOpen = timeNow >= 9 && timeNow <= 20;

        let status = $('.work-status');

        if (isOpen) {
            status.text('Сейчас открыто');
            status.removeClass('close');
            status.addClass('open');
        }
        else {
            status.text('Сейчас закрыто');
            status.removeClass('open');
            status.addClass('close');
        }

    }

    ViewActiveMenu();


    currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'contacts.html') {
        UpdateWorkStatus();
        setInterval(UpdateWorkStatus(), 60000);
    }
    

   
    

})