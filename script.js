var modal_template = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"></h4></div><div class="modal-body"></div><div class="modal-footer"></div></div></div>';
$(function() {
	//init default modal
	$('#init_modal').modal({
		keyboard:true,
		show:false
	})
});
var initModal = function (objId){
	var Obj = $('#'+objId);
	var html = Obj.html();
	Obj.addClass('modal fade').html(modal_template);
	//
	Obj.find('.modal-title').html(Obj.attr('title'));
	Obj.find('.modal-body').html(html);
	//Opener
	$(Obj.data('open')).click(function(){
		$(Obj).modal('show');
	})
}

var initModalDelete = function (objId){
	initModalCloneHtml('dialog-form-delete');
}