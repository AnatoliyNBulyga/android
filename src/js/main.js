$(document).ready(function() {
	"use strict";
	
// Text input in form	
	$('.sign-in__input').focus(function(){
	var input = $(this);
	
	input.val('');
	input.data('placeholder', input.attr('placeholder'));
	input.attr('placeholder', 'Filled text input');
 });

 $('.sign-in__input').blur(function(){
 	var input = $(this);

	input.attr('placeholder', input.data('placeholder'));
 });

// begin toggle-menu button 
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-menu").slideToggle();
		return false;
	});

// wow.js
new WOW({
		offset: 100,
		mobile: false
	}).init();
    

});