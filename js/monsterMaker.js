// JavaScript Document


$(document).ready(function(){
    
// BEGIN ACCORDIAN 
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }
      
    return false;
  }); 
  
// BEGIN MONSTER SWITCHING

    /*$(".mBlank").click(function() {
		$(this).addClass("m1-head");
	});

	$('.m-head').on('click', function(){
		var className = $(this).data('class');
		$('#mHead').removeClass('mBlank m1-head m2-head m3-head m4-head m5-head m6-head');
		$('#mHead').addClass(className);
	});
	$('.m-body').on('click', function(){
		$('#mBody').removeClass('mBlank m1-body m2-body m3-body m4-body m5-body m6-body');
		var className = $(this).data('class');
		$('#mBody').addClass(className);
	});
	$('.m-food').on('click', function(){
		$('#mFood').removeClass('mBlank m1-food m2-food m3-food m4-food m5-food m6-food');
		var className = $(this).data('class');
		$('#mFood').addClass(className);
	});	*/
    
/*    $( init );
 
    function init() {
      $('.m-head').draggable( {
        cursor: 'move',
        snap: '#mHead'
      } ); */
    $( init );
 
    function init() {
      $('.m-head').draggable({
        helper: 'clone',
        revert: 'invalid',
        appendTo: 'body'
    });
    $("#mHead").droppable({
     drop: function(event, ui) {
               // do something with the dock
               $(this).removeClass('mBlank m1-head m2-head m3-head m4-head m5-head m6-head');
               // do something with the draggable item
               $(ui.draggable).addClass(className);
           }
    });
    }
});