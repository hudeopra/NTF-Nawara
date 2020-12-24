jQuery(document).ready(function($) {
    // active menu item
    $('li.current-menu-item a').addClass('active');
    $('li.current-menu-parent a').addClass('active');
	if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  		$("body").addClass("mac");
	}
    // slider 
   
    $('.billboard-single-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 300,
    });

    //serivce
    $('.category-header').on('click', function() {
        var currentTab = $(this).attr('data-tab-header');
        $('.category-header, .category-content').removeClass('is-active');
        $(this).addClass('is-active');
        $('.category-content[data-tab=' + currentTab + ']').addClass('is-active');
    })

    //get quote form

    //next
    $('button[data-step="#mt-step-2"], button[data-step="#mt-step-3"]').on('click', function(e) {
        e.preventDefault();
        var currentStep = $(this).attr('data-step');
        $(this).parents('.mt-quote__content').removeClass('is_active');
        $(currentStep).addClass('is_active');
    });
    //prev
    $('.mt-prev_step').on('click', function(e) {
        e.preventDefault();
        var currentStep = $(this).attr('data-step');
        $(this).parents('.mt-quote__content').removeClass('is_active');
        $(currentStep).addClass('is_active');
    });

    //ship option
    $('.air_freight input').on('change', function() {
        $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        $('.air_freight').next('.mt-quote__form--input').toggleClass('d-none');
        $('input[name="volumn-kg"]').on('keyup', function() {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        })
        $('input[name="volumn-kg"]').on('blur', function() {
            if ($(this).val() != '') {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
            } else {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
            }
        })
    });
    
    $('.ocean_freight_fcl input').on('change', function() {
        $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        $('.ocean_freight_fcl').next('.mt-quote__form--input').toggleClass('d-none');
        $('input[name="volumn-cbm"]').on('keyup', function() {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        })
        $('input[name="volumn-cbm"]').on('blur', function() {
            if ($(this).val() != '') {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
            } else {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
            }
        })
    });
	$('.ocean_freight_lcl input').on('change', function() {
        $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        $('.ocean_freight_lcl').next('.mt-quote__form--input').toggleClass('d-none');
        $('input[name="volumn-teus"]').on('keyup', function() {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        })
        $('input[name="volumn-teus"]').on('blur', function() {
            if ($(this).val() != '') {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
            } else {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
            }
        })
    });
    $('.custom_clearance input').on('change', function() {
        $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        $('.custom_clearance').next('.mt-quote__form--input').toggleClass('d-none');
        $('input[name="volumn-no-containers-1"]').on('keyup', function() {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        })
        $('input[name="volumn-no-containers-1"]').on('blur', function() {
            if ($(this).val() != '') {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
            } else {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
            }
        })
    });
    $('.transportation input').on('change', function() {
        $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        $('.transportation').next('.mt-quote__form--input').toggleClass('d-none');
        $('input[name="volumn-no-containers-2"]').on('keyup', function() {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        })
        $('input[name="volumn-no-containers-2"]').on('blur', function() {
            if ($(this).val() != '') {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
            } else {
                var elemParent = $(this).parents('.mt-quote__content');
                elemParent.addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
            }
        })
    });

    // 	$('input[name="quote_option_1"]').on('change', function() {
    // 		alert()
    // 		if($(this).val() != '') {
    // 		   $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
    // 		}else{
    // 			$(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
    // 		}
    // 	})
    // volumn
//     $('input[name="volumn"]').on('keyup', function() {
//         $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
//     })
//     $('input[name="volumn"]').on('blur', function() {
//         if ($(this).val() != '') {
//             $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
//         } else {
//             $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
//         }
//     })

    $('select[name="import-export"]').on('change', function() {
        if ($(this).val() != '') {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        } else {
            $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        }
    })

    // personal details
    $('input[name="first-name"], input[name="last-name"], input[name="phone-no"], input[name="email-178"]').on('keyup', function() {
        $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
    })
    $('input[name="first-name"], input[name="last-name"], input[name="phone-no"], input[name="email-178"]').on('blur', function() {
        if ($(this).val() != '') {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        } else {
            $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        }
    })

    // company details
    $('input[name="company-name"], input[name="commodity"], input[name="origin"], input[name="destination"]').on('keyup', function() {
        $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
    })
    $('input[name="company-name"], input[name="commodity"], input[name="origin"], input[name="destination"]').on('blur', function() {
        if ($(this).val() != '') {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.mt-next_step').prop('disabled', false);
        } else {
            $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        }
    })

    $('textarea[name="message-96"]').on('keyup', function() {
        $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.wpcf7-submit').prop('disabled', false);
    })
    $('textarea[name="message-96"]').on('blur', function() {
        if ($(this).val() != '') {
            $(this).parents('.mt-quote__content').removeClass('is-invalid').find('.wpcf7-submit').prop('disabled', false);
        } else {
            $(this).parents('.mt-quote__content').addClass('is-invalid').find('.wpcf7-submit').prop('disabled', true);
        }
    })

    $('button[data-step="#mt-step-4"]').on('click', function(e) {
        var firstName = $('input[name="first-name"]').val();
        var lastName = $('input[name="last-name"]').val();
        var myPhone = $('input[name="phone-no"]').val();
        var myEmail = $('input[name="email-178"]').val();
        if (firstName == '' || lastName == '' || myPhone == '' || myEmail == '') {
            $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        } else {
            e.preventDefault();
            $(this).parents('.mt-quote__content').removeClass('is_active');
            $('#mt-step-4').addClass('is_active');
        }
    })


    $('button[data-step="#mt-step-5"]').on('click', function(e) {
        var companyName = $('input[name="company-name"]').val();
        var commodity = $('input[name="commodity"]').val();
        var origin = $('input[name="origin"]').val();
        var destination = $('input[name="destination"]').val();
        if (companyName == '' || commodity == '' || origin == '' || destination == '') {
            $(this).parents('.mt-quote__content').addClass('is-invalid').find('.mt-next_step').prop('disabled', true);
        } else {
            e.preventDefault();
            var currentStep = $(this).attr('data-step');
            $(this).parents('.mt-quote__content').removeClass('is_active');
            $('#mt-step-5').addClass('is_active');
        }
    })

//     $('#mt-step-5 input[type="submit"]').prop('disabled', true);

    $('#mt-step-5 input[type="submit"]').click(function() {
        $(this).parents('.mt-quote__content').removeClass('is_active');
    })

    // hamburger menu
    $(document).on('click', '.ham-input', function() {
        $('body').toggleClass('menu-open');
        $('.mt-header__menu--list').toggleClass('active');
    });

    //submenu mobile menu
    $('.mt-header__menu--list .menu-item-has-children > a').each(function() {
        $(this).after("<span class='mt-sub_toggle'><i class='mt-icon icon-arrow_right'></i></span>");
    });
    $(document).on('click', 'span.mt-sub_toggle', function() {
        $(this).next('ul.sub-menu').slideToggle();
    });
    // scroll to google map on contact
    $(document).on('click', '.btn-map a', function() {
        var gMap = $(this).data('map');
        if (gMap) {
            $('.mt-google-map iframe').attr('src', gMap);
            var header = $('.mt-header').height();
            $('html, body').animate({
                scrollTop: $(".mt-google-map").offset().top - header
            }, 2000);
        }
    })
    // filter on news and insights
    $('.mt-news__filters').on('click', 'a.mt-btn', function() {
        var filterValue = $(this).attr('data-filter');
        $('.mt-news_result').isotope({
            filter: filterValue,
            layoutMode: 'fitRows',
            itemSelector: '.mt-news__item'
        });
    });
    // change is-checked class on buttons
    $('.mt-news__filters').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a.mt-btn', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // console.log(header)
        if (scroll > 0) {
            $("body").addClass('mt-header_fixed');
        } else {
            $("body").removeClass('mt-header_fixed');
        }
    });

    //counter animation
    if ($('#counter').length == 1) {
        var a = 0;
        $(window).scroll(function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 6000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
                });
                a = 1;
            }
        });
    }

    // open forn after load
    $(window).load(function() {
        if ($('body').hasClass('home')) {
            $('#getaquote').addClass('mt-open');
        }
    });
    $(document).on('click', '.mt-btn.mt-btn--header', function() {
        $('#getaquote').addClass('mt-open');
    });
    $(document).on('click', '.mt-quote-close', function() {
        var elem = $('.mt-quote__form-step-wrapper .mt-quote__content');
        $(".mt-quote__form form").trigger("reset");
        $('#mt-step-1 .mt-quote__form--input').addClass('d-none');
        elem.addClass('is-invalid');
        elem.removeClass('is_active');
        $('#mt-step-1').addClass('is_active');
        $('.wpcf7-response-output').hide();
        //close form
        $('#getaquote').removeClass('mt-open');
    });
    $(document).on('click', '.mt-quote-overlay', function() {
        var elem = $('.mt-quote__form-step-wrapper .mt-quote__content');
        $(".mt-quote__form form").trigger("reset");
        $('#mt-step-1 .mt-quote__form--input').addClass('d-none');
        elem.addClass('is-invalid');
        elem.removeClass('is_active');
        $('#mt-step-1').addClass('is_active');
        $('.wpcf7-response-output').hide();
        //close form
        $('#getaquote').removeClass('mt-open');
    });

    new WOW().init();
});