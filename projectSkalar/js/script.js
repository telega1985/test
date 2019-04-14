$(document).ready(function() {
    
    "use strict";
    
    // Select
    
    $(".form-select").on("click", function() {
        $(".form-select--dropdown").toggleClass("form-select--dropdown-open");
        $(this).toggleClass("form-select--open");
    });
    
    $(".form-select--dropdown li").on("click", function() {
        var valueData = $(this).attr("data-value");
        $("#select-type").val(valueData);
        $(".form-select--checked").text(valueData);
    });
    
    // Sing In
    
    $(".navbar-link--popup").on("click", function(e) {
        e.preventDefault();
        $(".navbar-overlay").fadeIn(300);
        $(".navbar-popap").addClass("navbar-popap--open");
    });
    
    $(".navbar-popap--close, .navbar-overlay").on("click", function(e) {
        e.preventDefault();
        $(".navbar-overlay").fadeOut(500);
        $(".navbar-popap").removeClass("navbar-popap--open");
    });
    
    // Menu header-bottom
    
    $(".categories-block").on("click", function() {
        $(this).toggleClass("categories-block--open");
        $(".categories-list").toggleClass("categories-list--open");
    });
    
    // Dropmenu in header-bottom
    
    $(".dropmenu-money").on("click", function() {
        $(this).toggleClass("dropmenu-money--open");
        $(".dropmenu-item--money").toggleClass("dropmenu-item--money-drop");
    });
    
    $(".dropmenu-item--money a").on("click", function() {
        var money = $(this).text();
        $(".dropmenu-item--title-money").text(money);
    });
    
    
    $(".dropmenu-lang").on("click", function() {
        $(this).toggleClass("dropmenu-lang--open");
        $(".dropmenu-item--lang").toggleClass("dropmenu-item--lang-drop");
    });
    
    $(".dropmenu-item--lang a").on("click", function() {
        var lang = $(this).text();
        $(".dropmenu-item--title-lang").text(lang);
    });
    
    $(".dropmenu-help").on("click", function() {
        $(this).toggleClass("dropmenu-help--open");
        $(".dropmenu-item--help").toggleClass("dropmenu-item--help-drop");
    });
    
});