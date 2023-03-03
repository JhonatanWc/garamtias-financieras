/*=================================================*/
/*=================================================*/
/*===================== WCKIT =====================*/
/*============ VERSIÓN 1.00 26/01/2023 ============*/
/*=================================================*/
/*=================================================*/

(function( root, $, undefined ) {
	"use strict";

	$(function () {
		$(document).ready(function(){
            var scrolltotop = $("#scrollto__top");
            var header = $("#header");
            $(window).scroll(function(){
                if($(this).scrollTop() > 140){
                    scrolltotop.addClass("active");
                    header.addClass("fixed");
                }else{
                    scrolltotop.removeClass("active");
                    header.removeClass("fixed");
                }
            });
        
            $("#scrollto__top a").on("click", function(e){
                e.preventDefault();
                var target = this.hash;
                var $Target = $(target);
                $("html, body").stop().animate({
                    "scrollTop": $Target.offset().top
                }, 1000, "swing");
            });
        
            $("ul.wcnavaccordion li.nav-childrens > a").on("click touch", function(e){
                e.preventDefault();
                var $this = $(this);
        
                if($this.next().hasClass('active')){
                    $this.removeClass("active");
                    
                    $this.next().removeClass('active');
                    $this.next().slideUp(350);
                }else{
                    $this.parent().parent().find(' > li > a').removeClass('active');
                    $this.toggleClass("active");
        
                    $this.parent().parent().find('li ul.sub-menu').removeClass('active');
                    $this.parent().parent().find('li ul.sub-menu').slideUp(350);
                    $this.next().toggleClass('active');
                    $this.next().slideToggle(350);
                }
            });
        });
        
        $(window).load(function(){
            $('#page__loader').fadeOut(1000, function(){
                $('body').removeClass('loading');
                $('#page-loader').hide();
            });
        });
	});

} ( this, jQuery ));