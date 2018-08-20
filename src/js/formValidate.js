$(document).ready(function() {

	(function() {

		var formValidate = {

			isValid: true,

			init: function() {
				// Вызов внутренних  функци	й
				this._setUpListeners();
			},

			// Фунция прослушивания событий
			_setUpListeners: function() {

				$('.form')
				.on('submit', formValidate._validateForm)
				.on('submit', formValidate._sendEmail);
	
			},

			// Приватные  методы
			_validateForm: function(event) {

				event.preventDefault();

				var 
						forms = $(this),
						input = forms.find('input'),
						value = input.val().trim(),
						placeholder = input.attr('placeholder'),
						placeholderInvalid = 'Not valid info',
						valid = true;


				// Проверка на валидный email
				if (input.attr('type').toLowerCase() === 'email') {

					if (value !== '') {

						var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

						if (pattern.test(value)) {

							input.attr('placeholder', placeholder);
							input.removeClass('input--invalid');
							forms[0].reset();
							


						} else {

							input.addClass('input--invalid');

							input.val(placeholderInvalid);

							valid = false;

						}

					}

				}

				formValidate.isValid = valid;		

			},

			_sendEmail: function() {

				if (formValidate.isValid === true) {

					alert('Sending form!');

				} else {
					console.log('Validation Faled !');
				}

			}

		}

		formValidate.init();

	}());	



});