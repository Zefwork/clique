$(function(){$(".burger-trigger, .nav-burger").click(function(){$(".nav-burger").toggleClass("nav-burger__on"),$(".header").toggleClass("overlay")}),$('a[href^="#"]').click(function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top},1500),!1}),$(document).click(function(e){$(e.target).closest(".burger-trigger").length||($(".nav-burger").removeClass("nav-burger__on"),$(".header").removeClass("overlay"),$(".burger-menu").removeClass("active"),e.stopPropagation())})}),$(document).ready(function(){$(".burger-menu").click(function(){$(".burger-menu").toggleClass("active")})}),$(document).ready(function(){$("body").sectionScroll()}),$(document).ready(function(){$(".slider").slick({infinite:!0,speed:500,fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:2e3,prevArrow:'<div class="slider-arrow"><i class="prev-arrow fa fa-angle-left"></i></div>',nextArrow:'<div class="slider-arrow"><i class="next-arrow fa fa-angle-right"></i></div>'})}),$(window).scroll(function(){$(".fadein").each(function(){var e=$(this).offset().top,r=$(window).scrollTop();e<r+500&&$(this).addClass("fadeInRight")})});