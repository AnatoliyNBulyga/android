$(document).ready(function() {
	"use strict";
	
// Text input in form	
	$('.sign-in__input').focus(function(){
	 $(this).data('placeholder',$(this).attr('placeholder'))
	 $(this).attr('placeholder','Filled text input');
 });
 $('input,textarea').blur(function(){
	 $(this).attr('placeholder',$(this).data('placeholder'));
 });

// begin toggle-menu button 
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-menu").slideToggle();
		return false;
	});

    

});