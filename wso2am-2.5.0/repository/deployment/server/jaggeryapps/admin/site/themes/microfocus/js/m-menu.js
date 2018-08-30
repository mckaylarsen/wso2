//JavaScript Document

jQuery( document ).ready(function(){

    var menuT = 85;

    jQuery( window ).load(function() {
        jQuery('.glass-div').css({'position':'absolute','top': menuT + 'px'});
        jQuery('.menu-nav,#user-menu').hide();
        jQuery('.glass-div').hide();
// jQuery('td#region1 ul.sub').hide();
    });

    jQuery('.menu-panel-buttons').click(function() {
        var pos = jQuery(this).offset();
        var menuH = jQuery(this).height();
        jQuery('.menu-nav').css({'position':'absolute','left':pos.left,'top':pos.top + menuH + 'px'});
        jQuery('.menu-nav').show();
        jQuery('.glass-div').show();
    });

    jQuery('.glass-div').click(function() {
        jQuery('.menu-nav, #user-menu, .glass-div').hide();
        jQuery('.menu-panel-buttons').removeClass('selected');
    });

    jQuery('#logged-user').click(function() {
        jQuery('.menu-nav').hide();
        jQuery('.menu-panel-buttons').removeClass('selected');
        jQuery('#user-menu, .glass-div').show();
    });

});