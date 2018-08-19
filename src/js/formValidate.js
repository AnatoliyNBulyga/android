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

				$('#form')
				.on('submit', function(event) {

					formValidate._validateForm(event);

				}).on('submit', formValidate._sendEmail);


			},

			// Приватные  методы
			_validateForm: function(event) {

				event.preventDefault();

				var form = $('#form');
						input = form.find('input'),
						value = input.val().trim(),
						valid = true;
						

					// $.each(function(index, val) {



					// });

				// Проверка на валидный email
				if (input.attr('type').toLowerCase() === 'email') {

					if (value !== '') {

						var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

						if (pattern.test(value)) {
							input.removeClass('input--invalid');
							form.trigger("reset");

						} else {

							input.addClass('input--invalid');
							form.trigger("reset");
							input.attr('placeholder', 'Not valid info');
						
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