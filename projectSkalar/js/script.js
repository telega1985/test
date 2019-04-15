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
    
    $(".dropmenu-item").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("dropmenu-item--open");
        $(this).children(".dropmenu-item--list").toggleClass("dropmenu-item--list-drop");
    });
    
    $(".dropmenu-item--list-link").on("click", function(e) {
        e.preventDefault();
        var valText = $(this).text();
        $(this).parent(".dropmenu-item--list-open").parent(".dropmenu-item--list").siblings(".dropmenu-item--title").text(valText);
    });
    
    // input type="range"
    
    $("#slider").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            $("#minCost").val($("#slider").slider("values",0));
		    $("#maxCost").val($("#slider").slider("values",1));
        },
        slide: function(event, ui) {
            $("#minCost").val($("#slider").slider("values",0));
		    $("#maxCost").val($("#slider").slider("values",1));
        }
    });
    
    // Привязываем ползунки к инпутам
    
    $("#minCost").change(function() {
        var value1 = $("#minCost").val();
        var value2 = $("#maxCost").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);	
    });

	
    $("#maxCost").change(function() {
        var value1 = $("#minCost").val();
        var value2 = $("#maxCost").val();

        if (value2 > 1000) { value2 = 1000; $("#maxCost").val(1000)}

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });
    
    // Добавляем чекбоксы по клику
    
    $(".filter-subitem--show").on("click", function() {
        $(this).siblings(".filter-subitem--hide").toggleClass("filter-subitem--hide-open");
        $(this).remove();
    });
    
    // Menu accordion
    
    $(".filter-title").on("click", function() {
        $(this).toggleClass("filter-title--open").next(".filter-subitem").slideToggle(200);
    });
    
    // List-Cascade
    
    $(".view-img--cascade").on("click", function() {
        $(this).addClass("view-img--cascade-active");
        $(".view-img--list").removeClass("view-img--list-active");
    });
    
    $(".view-img--list").on("click", function() {
        $(this).addClass("view-img--list-active");
        $(".view-img--cascade").removeClass("view-img--cascade-active");
    });
    
    // Footer dropdown
    
    $(".footer-menu--item").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("footer-menu--item-open").children(".footer-menu--dropdown").toggleClass("footer-menu--dropdown-open");
    });
    
    // responsive header-menu
    
    $(".resp-menu--button").on("click", function() {
        $(this).toggleClass("categories-block--open");
        $(".menu").slideToggle(100);
    });
    
    // responsive left-menu
    
    $(".aside--button").on("click", function() {
        $(this).toggleClass("categories-block--open");
        $(".filter").toggleClass("filter-open");
    });
    
});






























