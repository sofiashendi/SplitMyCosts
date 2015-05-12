var SMC = {};
var BASE_URL = '/';

SMC.init = function(){
	$('html').removeClass('no-js');
	
	SMC.$container = $('#container');
	SMC.$content = $('#content');
	SMC.$people = $('#people');
	SMC.$people_list = SMC.$people.find('#people_list');
	SMC.$choose_person = $('#choose_person');
	SMC.$costs = $('#costs');
	SMC.$costs_list = SMC.$costs.find('#costs_list');
	SMC.$calculator = $('calculator');
	
	SMC.people.init();
	SMC.costs.init();
};

SMC.people = {
	init: function(){
		var _this = SMC.people;
		_this.$form = SMC.$people.find('#frm_people');
		_this.$email = SMC.$people.find('#email');
		_this.$name = SMC.$people.find('#name');
		
		_this.bindEvents();
	},
	bindEvents: function(){
		var _this = SMC.people;
		_this.$form.find('button')
			.on('click', function(e){
				e.preventDefault();
				
				_this.addPeople();
			});
		SMC.$people_list
			.on('click', 'a.del', function(e){
				e.preventDefault();
				
				_this.deletePeople($(this).parent().index(), $(this).parent().attr('data-email'));
			});
	}, // bindEvents()
	deletePeople: function(index, id){
		var _this = SMC.people;
		
		// Delete person from People List
		SMC.$people_list.children().eq(index).remove();
		
		// Delete person from Costs List
		SMC.$costs_list.find('span[data-email="' + id.toLowerCase() + '"]').remove();
		
	}, // deletePeople()
	addPeople: function(){
		var _this = SMC.people;
		
		if(_this.$form.is('.working'))
		{
			return false;
		}
		_this.$form.addClass('working');
		SMC.form.clearErrors(_this.$form);
		
		$.ajax({
			data: _this.$form.serialize(),
			dataType: 'json',
			type: 'post',
			url: BASE_URL + 'ajax/process_people.php'
		}).done(function(_data){
			_this.$form.removeClass('working');
			if(_data.success == 0)
			{
				SMC.form.addErrors(_this.$form, _data.errors);
			}
			else
			{
				SMC.$people_list.append('<li data-email="' + _this.$email.val().toLowerCase() + '"><a href="#" class="del">x</a> <span>' + _this.$name.val() + '</span></li>');
				_this.$form.trigger('reset');
			}
		});
	} // addPeople()
}; // SMC.people

SMC.costs = {
	init: function(){
		var _this = SMC.costs;
		_this.$form = SMC.$costs.find('#frm_costs');
		_this.$expense = SMC.$costs.find('#expense');
		_this.$price = SMC.$costs.find('#price');
		
		_this.bindEvents();
	},
	bindEvents: function(){
		var _this = SMC.costs;
		_this.$form.find('button')
			.on('click', function(e){
				e.preventDefault();
				
				_this.addCost();
			});
		SMC.$costs_list.find('a.del')
			.on('click', function(e){
				e.preventDefault();
				
				_this.deleteCost($(this).parent().parent().attr('id'));
			});
		SMC.$costs_list.find('a.add')
			.on('click', function(e){
				e.preventDefault();
				
				_this.includePerson($(this).parent().parent().attr('id'));
			});
	}, // bindEvents()
	includePerson: function(id){
		var _this = SMC.costs;
		
		SMC.$choose_person.empty();
		
		if (SMC.$people_list.find('span').length > 0) {
			SMC.$people_list.find('span').each(function(){
				alert('hello');
				SMC.$choose_person.append('<p>' +  $(this).text() + '<input type="checkbox" id="choose_' + $(this).data('email') + '" /></p>').show(200);
			});
		} else {
			$('<div class="error">You must add someone first in the list below.</div>').insertAfter(SMC.$costs.find('h1'));
			setTimeout(function() {
		        SMC.$costs.find('div.error').hide(200)
		    }, 2500);

		}
		
	}, // includePerson()
	deleteCost: function(id){
		var _this = SMC.costs;
		
		$.ajax({
			data: id,
			dataType: 'json',
			type: 'post',
			url: BASE_URL + 'ajax/delete_costs.php'
		}).done(function(_data){
			if(_data.success == 0)
			{
				alert('Error: This expense cannot be deleted.');
			}
			else
			{
				SMC.$costs_list.find('#' + id).remove();
			}
		});
	}, // deleteCost()
	addCost: function(){
		var _this = SMC.costs;
		
		if(_this.$form.is('.working'))
		{
			return false;
		}
		_this.$form.addClass('working');
		SMC.form.clearErrors(_this.$form);
		
		$.ajax({
			data: _this.$form.serialize(),
			dataType: 'json',
			type: 'post',
			url: BASE_URL + 'ajax/process_costs.php'
		}).done(function(_data){
			_this.$form.removeClass('working');
			if(_data.success == 0)
			{
				SMC.form.addErrors(_this.$form, _data.errors);
			}
			else
			{
				SMC.$costs_list.append('<tr id="' + _data.id + '"><td data-price="' + _this.$price.val() + '"><a href="#" class="del">X</a></td><td>' + _this.$expense.val() + '</td><td>$' + _this.$price.val() + '</td><td>$' + _this.$price.val() + '</td><td><a href="#" class="add">Add someone</a></td></tr>');
				_this.$form.trigger('reset');
			}
		});
	} // addCost()
}; // SMC.costs

SMC.form = {
	clearErrors: function($form){
		$form.find('.error').remove();
	}, // clearErrors()
	addErrors: function($form, arrErrors){
		$.each(arrErrors, function(strKey, strMsg){
			if(strKey == 'global')
			{
				$form.append('<div class="error">' + strMsg + '</div>');
			}
			else
			{
				$form.find('#' + strKey).addClass('error');
				$form.append('<span class="error">' + strMsg + '</span>');
			}
		});
	}
}; // SMC.form

		
$(document).ready(function(){
	SMC.init();
});