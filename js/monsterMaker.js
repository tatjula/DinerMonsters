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

    $( init );
 
        function init() {
        $('.m-head').draggable({
            helper: 'clone',
            revert: 'invalid',
            appendTo: 'body'
        });
        $('.m-body').draggable({
            helper: 'clone',
            revert: 'invalid',
            appendTo: 'body'
        });
        $('.m-food').draggable({
            helper: 'clone',
            revert: 'invalid',
            appendTo: 'body'
        });
    
        $("#mHead").droppable({
            drop: function(event, ui) {
                //reuse jQuery object
                var $this = $(this);
                //get object type
                var droppedObject = ui.draggable.data('class');
                //css reset
                $this.attr('class', '');
                $this.addClass(droppedObject);
               },
              accept: ".m-head"
        });
        
        $("#mBody").droppable({
            drop: function(event, ui) {
                //reuse jQuery object
                var $this = $(this);
                //get object type
                var droppedObject = ui.draggable.data('class');
                //css reset
                $this.attr('class', '');
                $this.addClass(droppedObject);
               },
              accept: ".m-body"           
        });
        
        $("#mFood").droppable({
            drop: function(event, ui) {
                //reuse jQuery object
                var $this = $(this);
                //get object type
                var droppedObject = ui.draggable.data('class');
                //css reset
                $this.attr('class', '');
                $this.addClass(droppedObject);
               },
              accept: ".m-food"           
    });
    
    /*  THIS SHOULD HELP WITH CHANING THE HEIGHT OF THE IMAGE WHEN DROPPED
    var h = $(this).height();
    $(ui.draggable).height(h);*/
    
    }
});