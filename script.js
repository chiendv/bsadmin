var Configs = {
	'datePicker' : {
		'dateRange':{
            showDropdowns: true,
			locale: {
				  format: 'YYYY-MM-DD'
			},
            minDate: '2010-01-01'
		},
		'singleDate':{
			singleDatePicker: true,
			showDropdowns: true,
			locale: {
				  format: 'YYYY-MM-DD'
			},
            minDate: '2010-01-01'
		},
		'singleDateTime':{
	    	singleDatePicker: true,
	    	timePicker: true,
	    	locale: {
				  format: 'YYYY-MM-DD H:mm:ss'
			} ,
	    	timePickerIncrement: 5,
	    	 minDate: '2010-01-01',
	        showDropdowns: true
	    }
	}
};
var modal_template = '<div class="modal-dialog"><div class="modal-content"><form method="post" action="" class="modal-form"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"></h4></div><div class="modal-body"></div><div class="modal-footer hidden"><button type="submit" class="btn btn-success modal-confirm">Confirm</button><button type="button" class="btn btn-default modal-close" data-dismiss="modal">Close</button></div></form></div></div>';
$(function () {
	//init default modal
	$('#init_modal').modal({
		keyboard : true,
		show : false
	})
	initModal();
});
var initModal = function (objId) {
	$('[role="modal"]').each(function () {
		console.info('initial modal on #' + $(this).attr('id'));
		if ($(this).data('remote')) {
			$(this).load($(this).data('remote'));
		}
		var html = $(this).html();
		$(this).addClass('modal fade').html(modal_template);
		if($(this).data('button')==true){
			$(this).find('.modal-footer').removeClass('hidden');
			$(this).find('.modal-confirm').text($(this).data('modal-confirm'));
			$(this).find('.modal-close').text($(this).data('modal-close'));
		}
		if($(this).data('action')){
			$(this).find('.modal-form').attr('action',$(this).data('action'));
		}
		//
		$(this).find('.modal-title').html($(this).data('title'));
		if ($(this).data('table') != true) {
			$(this).find('.modal-body').html(html);
		} else {
			$(this).find('.modal-body').replaceWith(html);
		}

	});
}
