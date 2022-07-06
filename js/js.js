(function ($) {

    function behaviors() {

        $('[data-menu-popup]')
            .once()
            .on('openMenu', function () {
                $(this).addClass('open');
                $('html, body').addClass('menu-open');
            })
            .on('closeMenu', function () {
                $(this).removeClass('open');
                $('html, body').removeClass('menu-open');
            })
            .on('toggleMenu', function () {
                $(this).toggleClass('open');
                $('html, body').toggleClass('menu-open');
            });


        $('[data-menu-popup-toggle-link]')
            .once()
            .click(function () {
                $('[data-menu-popup]').trigger('toggleMenu');
                $('[data-services-dropdown]').trigger('closeDropdown');

                return false;
            });


        $('.slider-block .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                dots: true,
                nav: true,
                autoplay: true,
                autoplayHoverPause: true,
                loop: true
            });


        $('.photo-before-after-block .owl-carousel')
            .once()
            .on('initSlider', function () {
                var $this = $(this);
                var wrapper = $this.closest('[data-photo-before-after-slider]');

                if (!wrapper.is(':visible')) return;

                $this
                    .once('init-slider')
                    .owlCarousel({
                        items: 1,
                        dots: true,
                        nav: false,
                        loop: false,
                        onInitialized: function (event) {
                            var wrapper = $(event.currentTarget).closest('[data-photo-before-after-slider]');

                            wrapper.find('[data-photo-before-after-slider-index]').html(1);
                            wrapper.find('[data-photo-before-after-slider-total]').html(event.item.count);
                        },
                        onChanged: function (event) {
                            var wrapper = $(event.currentTarget).closest('[data-photo-before-after-slider]');

                            wrapper.find('[data-photo-before-after-slider-index]').html(event.item.index + 1);
                            wrapper.find('[data-photo-before-after-slider-total]').html(event.item.count);
                        }
                    });
            })
            .trigger('initSlider');


        $('[data-photo-before-after-slider-prev]')
            .once()
            .click(function () {
                var wrapper = $(this).closest('[data-photo-before-after-slider]');

                wrapper.find('.owl-carousel').trigger('prev.owl.carousel');

                return false;
            });


        $('[data-photo-before-after-slider-next]')
            .once()
            .click(function () {
                var wrapper = $(this).closest('[data-photo-before-after-slider]');

                wrapper.find('.owl-carousel').trigger('next.owl.carousel');

                return false;
            });


        $('[data-photo-before-after-link]')
            .once()
            .click(function () {
                var $this = $(this);
                var wrapper = $this.closest('.items');
                var id = $this.attr('data-photo-before-after-link');

                wrapper.find('a').removeClass('active');
                $this.addClass('active');

                $('[data-photo-before-after-slider]').removeClass('active');

                var sliderWrapper = $('[data-photo-before-after-slider="' + id + '"]');

                sliderWrapper.addClass('active');

                sliderWrapper.find('.owl-carousel').trigger('initSlider');

                return false;
            });


        $('[data-modal]')
            .once()
            .on('modalOpen', function () {
                $(this).addClass('open');
                $('html, body').addClass('modal-open');
            })
            .on('modalClose', function () {
                $(this).removeClass('open');
                $('html, body').removeClass('modal-open');
            });


        $('[data-modal-link]')
            .once('modal')
            .click(function () {
                var id = $(this).attr('data-modal-link');
                var modal = $('[data-modal="' + id + '"]');

                if (modal.length) modal.trigger('modalOpen');

                return false;
            });


        $('[data-modal] .modal-overlay, [data-modal-close]')
            .once()
            .click(function () {
                $(this)
                    .closest('[data-modal]')
                    .trigger('modalClose');
            });


        $('input[data-mobile-date]')
            .once()
            .focus(function () {
                if (isMobile) {
                    var $this = $(this);

                    var dateInput = $this
                        .closest('.form-group')
                        .find('input[type=date]');

                    $this.prop('disabled', true);

                    dateInput
                        .prop('disabled', false)
                        .trigger('click')
                        .focus();
                }
            });


        $('.order-form input[name="date"]')
            .once(function () {
                if (isDesktop || isTablet) {
                    $(this).datepicker();
                }
            });


        $('select')
            .once()
            .selectize();


        $('.doctors-list.owl-carousel')
            .once()
            .owlCarousel({
                responsive: {
                    0: {
                        items: 1,
                        dots: true,
                        nav: false,
                        loop: false,
                        margin: 30
                    },
                    780: {
                        dots: true,
                        nav: false,
                        loop: false,
                        margin: 30
                    },
                    1420: {
                        items: 4,
                        dots: true,
                        nav: false,
                        loop: false,
                        margin: 30
                    }
                }
            });


        $('[data-services-dropdown-link]')
            .once()
            .click(function () {
                let code = $(this).attr('data-services-dropdown-link');

                $('[data-services-dropdown]')
                    .not('[data-services-dropdown="' + code + '"]')
                    .removeClass('active');

                $('[data-services-dropdown-link]')
                    .not(this)
                    .removeClass('active');

                $('[data-services-dropdown="' + code + '"]').trigger('toggleDropdown');

                return false;
            });


        $('[data-services-dropdown]')
            .once()
            .on('toggleDropdown', function () {
                let $this = $(this);

                let code = $this.attr('data-services-dropdown');

                $this.toggleClass('active');

                $('[data-services-dropdown-link="' + code + '"]').toggleClass('active');
            })
            .on('hideDropdown', function () {
                let $this = $(this);

                let code = $this.attr('data-services-dropdown');

                $this.removeClass('active');

                $('[data-services-dropdown-link="' + code + '"]').removeClass('active');
            });


        $('[data-menu-popup-services-link]')
            .once()
            .click(function () {
                $('[data-menu-popup-sercices]').trigger('toggleDropdown');

                return false;
            });


        $('[data-menu-popup-sercices]')
            .once()
            .on('toggleDropdown', function () {
                $(this).toggleClass('active');
                $('[data-menu-popup-services-link]').toggleClass('active');
            });


        $('.photo-slider-block .owl-carousel')
            .once()
            .owlCarousel({
                items: 2,
                margin: 30,
                nav: true,
                dots: true
            });


        $('.certificates-slider-block .owl-carousel')
            .once()
            .owlCarousel({
                responsive: {
                    0: {
                        items: 2,
                        slideBy: 4,
                        margin: 30,
                        nav: false,
                        dots: true,
                        onInitialized: function (event) {
                            var wrapper = $(this.$element).closest('[data-certificates-slider-block]');

                            wrapper.find('[data-certificates-slider-index]').html(1);
                            wrapper.find('[data-certificates-slider-total]').html(Math.ceil(event.item.count / 2));
                        },
                        onChanged: function (event) {
                            var wrapper = $(this.$element).closest('[data-certificates-slider-block]');

                            wrapper.find('[data-certificates-slider-index]').html(Math.ceil((event.item.index + 2) / 2));
                            wrapper.find('[data-certificates-slider-total]').html(Math.ceil(event.item.count / 2));
                        }
                    },
                    780: {
                        items: 4,
                        slideBy: 4,
                        margin: 30,
                        nav: false,
                        dots: false,
                        onInitialized: function (event) {
                            var wrapper = $(this.$element).closest('[data-certificates-slider-block]');

                            wrapper.find('[data-certificates-slider-index]').html(1);
                            wrapper.find('[data-certificates-slider-total]').html(Math.ceil(event.item.count / 4));
                        },
                        onChanged: function (event) {
                            var wrapper = $(this.$element).closest('[data-certificates-slider-block]');

                            wrapper.find('[data-certificates-slider-index]').html(Math.ceil((event.item.index + 4) / 4));
                            wrapper.find('[data-certificates-slider-total]').html(Math.ceil(event.item.count / 4));
                        }
                    }
                }
            });


        $('[data-certificates-slider-prev]')
            .once()
            .click(function () {
                $(this)
                    .closest('[data-certificates-slider-block]')
                    .find('[data-certificates-slider]')
                    .trigger('prev.owl.carousel');

                return false;
            });


        $('[data-certificates-slider-next]')
            .once()
            .click(function () {
                $(this)
                    .closest('[data-certificates-slider-block]')
                    .find('[data-certificates-slider]')
                    .trigger('next.owl.carousel');

                return false;
            });


        $('.doctors-2-block')
            .once()
            .on('checkSlider', function () {
                if (isMobile) {
                    $(this).trigger('initSlider');
                } else {
                    $(this).trigger('destroySlider');
                }
            })
            .on('initSlider', function () {
                var $this = $(this);

                if ($this.hasClass('owl-carousel')) return;

                $this.addClass('owl-carousel');

                $this.owlCarousel({
                    items: 1,
                    dots: true,
                    nav: false
                });
            })
            .on('destroySlider', function () {
                var $this = $(this);

                if (!$this.hasClass('owl-carousel')) return;

                if (typeof $this.data('owl.carousel') != 'undefined') {
                    $this.owlCarousel('destroy');
                }

                $this.removeClass('owl-carousel');
            })
            .each(function () {
                $(this).trigger('checkSlider');
            });


        $('a.colorbox')
            .once('colorbox')
            .colorbox({
                maxWidth: '100%',
                maxHeight: '100%'
            });


    }


    function ymapsReady() {
        var map = new ymaps.Map('map', {
            center: [55.798647, 37.718974],
            zoom: 14,
            controls: ['zoomControl']
        });

        var placemark = new ymaps.Placemark(map.getCenter(), {
            balloonContent: 'Москва, ул.Большая Черкизовская д.5'
        });

        map.geoObjects.add(placemark);
    }


    $(document).ready(function () {
        calcVars();
        behaviors();

        ymaps.ready(function () {
            ymapsReady();
        });
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });


    $(document).resize(function () {
        calcVars();
        $('.doctors-2-block').trigger('checkSlider');
    });


    $(document).click(function (event) {
        var dropdown = '[data-services-dropdown]';
        var dropdownLink = '[data-services-dropdown-link]';

        if (!$(event.target).closest(dropdown).length && !$(event.target).closest(dropdownLink).length) {
            if ($(dropdown).is(":visible")) {
                $(dropdown).trigger('hideDropdown');
            }
        }
    });

})(jQuery);