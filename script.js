$(document).ready(function() {
    // Scroll to top button functionality
    var scrollToTopBtn = $('#scrollToTopBtn');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });

    scrollToTopBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Load on scroll animations
    $(window).on('scroll', function() {
        $('section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
                $(this).addClass('fade-in');
            }
        });
    });
});
