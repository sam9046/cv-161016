(function ($) {

    "use strict";

    var $contactForm = $("#contact");

    $contactForm.validate();
    
    /* =================================
    ===  CONTACT FORM               ====
    =================================== */
    $contactForm.submit(function (e) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'emailRequest',
            eventAction: 'click'
        });
        e.preventDefault();
        var name = $("#form-name").val();
        var email = $("#form-email").val();
        var subject = $("#form-subject").val();
        var message = $("#form-message").val();

        var contactObj = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        function validEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }

        if (validEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "/email",
                data: JSON.stringify(contactObj),
                contentType: 'application/json',
                success: function () {
                    $('.successContent').fadeIn(1000);
                    $('.errorContent').fadeOut(500);
                    $('.serverErrorContent').fadeOut(500);
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'emailRequest',
                        eventAction: 'success'
                    });
                },
                error: function(data) {
                    $('.serverErrorContent').fadeIn(1000);
                    $('.successContent').fadeOut(500);
                    $('.errorContent').fadeOut(500);
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'emailRequest',
                        eventAction: 'error',
                        eventLabel: data && data.message
                    });
                }
            });
        }
        else {
            $('.errorContent').fadeIn(1000);
            $('.successContent').fadeOut(500);
            $('.serverErrorContent').fadeOut(500);
        }
        return false;
    });

})(jQuery);


