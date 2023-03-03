jQuery(document).ready(function(e){
    jQuery("#nav-responsive-icon a").click(function(e){
        jQuery("#offcanvas").toggleClass("active");
        jQuery("body").toggleClass("loading");
    });

    jQuery("a#nav-responsive-close").click(function(e){
        jQuery("#offcanvas").toggleClass("active");
        jQuery("body").toggleClass("loading");
    });

    jQuery("a#parent__my-account").on("click", function(e){
        jQuery("ul.dropdown__my-account").slideToggle(350);
    });

    jQuery(".column-filter > a.wcmovil").on("click", function(e){
        jQuery(".column-filter > .content_filter").slideToggle(350);
    });

    jQuery("a#collapse__dashboard").on("click", function(e){
        var user_id = e.currentTarget.name;
        var thisbutton = jQuery(this);
        jQuery.ajax({
            type: 'GET',
            url:"/dashboard/menu",
            data:{
                user_id : user_id
                },
            success:function(data){
                thisbutton.toggleClass("active");
                jQuery("sidebar#dashboard").toggleClass("active");
                jQuery("body.dashboard #main__wrapper").toggleClass("active");
            }
        });
    });

    jQuery("a.see_comment").on("click", function(e){
        e.preventDefault();
        var comment_id = e.currentTarget.name;
        var user_name = $(this).attr('user-data-name');
        jQuery.ajax({
            type: 'GET',
            url:"/dashboard/comments",
            data:{
                comment_id : comment_id
                },
            success:function(data){
                Swal.fire({
                    title: user_name+' Dijo',
                    text: data,
                });
            }
        });
    });

    jQuery("#tabs__register-user").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        enableFinishButton: false,
        labels: {
            next: "Continuar",
            previous: "Anterior",
        },
        onInit: function (event, current) {
            $('.actions > ul > li:first-child').attr('style', 'display:none');
        },
        onStepChanged: function (event, current, next) {
            if (current > 0) {
                $('.actions > ul > li:first-child').attr('style', '');
            } else {
                $('.actions > ul > li:first-child').attr('style', 'display:none');
            }
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if(newIndex === 0 && currentIndex === 1){return true;}
            if(newIndex === 1 && currentIndex === 2){return true;}
            if(newIndex === 2 && currentIndex === 3){return true;}

            var form = jQuery("#my-awesome-dropzone").show();

            if(newIndex === 1){
                if(jQuery('#id_marca').val() != "" && jQuery('#model').val() != "" && jQuery('#id_category').val() != "" && jQuery('#year').val() != ""){
                    return true;
                }else{
                    form.validate();
                    return form.valid();
                }
            }else if(newIndex === 2){
                if(jQuery('#city').val() != "" && jQuery('#country').val() != "" && jQuery('#zipcode').val() != "" && jQuery('#map').val() != ""){
                    return true;
                }else{
                    form.validate();
                    return form.valid();
                }
            }
        },
        onFinished: function (event, currentIndex){

        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Este Campo es requerido.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Please enter at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });

    if(jQuery("form.form-register input#concesonaried").is(':checked')){
        jQuery("#form__user-concesonarie").removeClass("wchidden");
    }

    jQuery("form.form-register input#concesonaried").change(function(e){
        if(this.checked){
            jQuery("#form__user-concesonarie").removeClass("wchidden");
        }else{
            jQuery("#form__user-concesonarie").addClass("wchidden");
        }
    });

    if(jQuery("form.form-checkout input#user_info").is(':checked')){
        jQuery("#user__info").removeClass("wchidden");
    }

    jQuery("form.form-checkout input#user_info").change(function(e){
        if(this.checked) {
            jQuery("#user__info").removeClass("wchidden");
        }else{
            jQuery("#user__info").addClass("wchidden");
        }
    });

    jQuery(".reply__comment_action a").on("click", function(e){
        jQuery(this).parent().parent().find("form").slideToggle(350);
    });

    jQuery(".lists-icons form.delete").on("click", function(e){
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro/a de que deseas eliminar?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
                $(this).submit();
            }
        })
    });

    jQuery(".buy-confirm").on("click", function(e){
        e.preventDefault();

        var plan_id = $(this).attr('data-plan');
        var consesonario = $(this).attr('data-consesonario');
        if(consesonario != 1){
            jQuery("#popupConsesonarie").removeClass("wchidden");
            jQuery("#popup_plan_id").val(plan_id);
        }else{
            Swal.fire({
                title: '¿Estás seguro/a de que deseas comprar este plan?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){

                    var url = window.location.origin+'/dashboard/my-buyplanes';
                    window.location.replace(url+'?plan_id='+plan_id);
                }
            })
        }


    });

    jQuery('.logout').on('click', function(e){
        e.preventDefault();
        Swal.fire({
            title: 'Cerrar sesión',
            html: '¿Estás seguro/a de que quieres salir?',
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Cancelar`,
            confirmButtonText: 'Confirmar',
        }).then((result) => {
            if(result.isConfirmed){
                window.location.replace('/logout');
            }
        })
    });

    jQuery('.cancel-plans').on('click', function(e){
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro/a de que quieres salir?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
               console.log("Hola")
            }
        })
    });

    jQuery('.aditional-days').on('click', function (e){
        var id_plan_user = jQuery(this).attr('data-plan');

        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro/a de que quiere adquirir este aumento?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
                var url = window.location.origin+'/aditional-days';
                window.location.replace(url+'?id_plan_user='+id_plan_user);
            }
        })
    });

    jQuery('.wccarousel3').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<span class="wcicon outlined arrow_prev">chevron_left</span>',
        nextArrow: '<span class="wcicon outlined arrow_next">chevron_right</span>',
        rows: 0,
        responsive: [{
            breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
            }, {
                breakpoint: 400,
                    settings: {
                        slidesToShow: 1
                    }
        }]
    });

    jQuery('.wccarousel4').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<span class="wcicon outlined arrow_prev">chevron_left</span>',
        nextArrow: '<span class="wcicon outlined arrow_next">chevron_right</span>',
        rows: 0,
        responsive: [{
            breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
            }, {
                breakpoint: 400,
                    settings: {
                        slidesToShow: 1
                    }
        }]
    });

    tinymce.init({
        selector: '#contents',
        menubar: true,
        plugins: "link image code",
        toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code'
      });

    jQuery('[data-fancybox="gallery-vehicule"]').fancybox({
        buttons: [
            "slideShow",
            "thumbs",
            "zoom",
            "fullScreen",
            "share",
            "close"
        ],
        loop: false,
        protect: true
    });

    jQuery('.off').on('click', function (e){
        e.preventDefault();
        var id_vehiculo = jQuery(this).attr('data-vehicule');
        Swal.fire({
            title: '¿Estás seguro/a de que desea desactivar este vehículo?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
                window.location.replace(window.location.origin+'/dashboard/vehicles-onoff?id='+id_vehiculo);
            }
        })
    });

    jQuery('.on').on('click', function (e){
        e.preventDefault();
        var id_vehiculo = jQuery(this).attr('data-vehicule');
        Swal.fire({
            title: '¿Estás seguro/a de que desea activar este vehículo?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
                window.location.replace(window.location.origin+'/dashboard/vehicles-onoff?id='+id_vehiculo);
            }
        })
    });

    jQuery('.delete').on('click', function (e){
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro/a de que desea eliminar este vehículo?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
                $(this).submit();
            }
        })
    });
    jQuery('.delete_comment').on('click', function (e){
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro/a de que desea eliminar este comentario, no lo volveras a ver?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
                $(this).submit();
            }
        })
    });


    var userLanguage = navigator.language || navigator.userLanguage;
    if(userLanguage == "en") userLanguage = "es";
    jQuery(".calentim").calentim({
        locale: userLanguage,
        format: "YYYY-MM-DD",
        inline: false,
        singleDate: true,
        minDate: moment().subtract(0, "day"),
        showTimePickers: false,
        format: "L",
        calendarCount: 1,
        showHeader: false,
        showFooter: false,
        autoCloseOnSelect: true
    });

    jQuery(".reports-caletim").calentim({
        locale: userLanguage,
        format: "YYYY-MM-DD",
        inline: false,
        singleDate: true,
        showTimePickers: false,
        format: "L",
        calendarCount: 1,
        showHeader: false,
        showFooter: false,
        autoCloseOnSelect: true
    });

    jQuery('.seld').on('change', function(e){
        if(this.checked){
            e.preventDefault();
            Swal.fire({
                title: '¿Estás seguro/a de que este vehículo fue vendido?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){
                    var id_vehiculo = jQuery(this).attr('data-vehicule');
                    window.location.replace(window.location.origin+'/dashboard/seld-vehicule?id_vehicule='+id_vehiculo);

                } else{
                    jQuery(this).prop( "checked", false );
                }
            })
        }
	});

    jQuery("#comments__vehicule").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        enableFinishButton: false,
        enableAllSteps: true,
        titleTemplate: "#title#" ,
        labels: {
            next: "Continuar",
            previous: "Anterior",
        },
        onInit: function (event, current) {
            $('.actions > ul > li:first-child').attr('style', 'display:none');
        },
        onStepChanged: function (event, current, next) {
            if (current > 0) {
                $('.actions > ul > li:first-child').attr('style', '');
            } else {
                $('.actions > ul > li:first-child').attr('style', 'display:none');
            }
        },
    });

    /*jQuery("#my__stadistics").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        enableFinishButton: false,
        enableAllSteps: true,
        titleTemplate: "#title#" ,
        labels: {
            next: "Continuar",
            previous: "Anterior",
        },
        onInit: function (event, current) {
            $('.actions > ul > li:first-child').attr('style', 'display:none');
        },
        onStepChanged: function (event, current, next) {
            if (current > 0) {
                $('.actions > ul > li:first-child').attr('style', '');
            } else {
                $('.actions > ul > li:first-child').attr('style', 'display:none');
            }
        },
    });*/

    jQuery("#price_vehicule").on("change", function(e){
        e.preventDefault();
        var Precio = jQuery(this).val();
        for(i = 0; i < Precio.length; i++){
            Precio = Precio.replace(",", "");
            Precio = Precio.replace(".", "");
            Precio = Precio.replace("$", "");
        }
        var newPrice =numberFormat(Precio);
        jQuery(this).val(newPrice);
    });

    jQuery("#price_vehicule").on("keypress", function(e){
        e.preventDefault();
        var Precio = jQuery(this).val();
        var key = e.key;
        var ASCIICode = (e.which) ? e.which : e.keyCode
        if(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){

        }else{
            var convertprice = Precio+key;
            for(i = 0; i < convertprice.length; i++){
                convertprice = convertprice.replace(",", "");
                convertprice = convertprice.replace(".", "");
                convertprice = convertprice.replace("$", "");
            }
            var newPrice =numberFormat(convertprice);
            jQuery(this).val(newPrice);
        }

    });

    jQuery("#price_vehicule").ready(function(e){
        jQuery("#price_vehicule").trigger("change");
    });

    jQuery('.plan-cacel').on("click",function(){
        e.preventDefault();
        console.log("cancel");
    })

    jQuery("#model").on("change", function(e){
        e.preventDefault();
        var model = jQuery(this).val();
        for(i = 0; i < model.length; i++){
            model = model.replace(".", "");
            model = model.replace(",", "");
        }
        jQuery(this).val(model);
    });

    jQuery('.cancel-vehicle').on('click',function(e){
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro/a de que quieres cancelar la creación de este vehículo?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if(result.isConfirmed){
                var url = window.location.origin+'/dashboard/my-advertisements';
                window.location.replace(url);
            }
        });
    })

    jQuery('.close_error').on('click',function(e){
        e.preventDefault();
        console.log('cerar error');
    })

    jQuery('#show_celphone').on('click', function(e){
        e.preventDefault();
        jQuery('#cellphone_seller').removeClass('wchidden');
        jQuery('#show_celphone').addClass('wchidden');
        let vehicle = $("#vehicule2").val();
        console.log(vehicle);
        jQuery.ajax({
            type: 'GET',
            url:"/data-vehicule-phone",
            data:{
                vehicle: vehicle,
                },
            success:function(data){
                
            }
        });

    })


});

function numberFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function confirmbuy(id_plan_user){
    Swal.fire({
        title: '¿Estás seguro/a de que quiere adquirir este aumento?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if(result.isConfirmed){

            var url = window.location.origin+'/aditional-days';
            window.location.replace(url+'?id_plan_user='+id_plan_user);
        }
    })
}

function cancel_plans(id_plan_user){
    Swal.fire({
        title: '¿Estás seguro/a de que quieres cancelar este plan?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if(result.isConfirmed){
            var url = window.location.origin+'/cancel-plan';
            window.location.replace(url+'?id='+id_plan_user);
        }
    });
}