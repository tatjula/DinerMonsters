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
  
// BEGIN URL SHARING 
 
   $.urlParam = function(name){
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }

$.urlParam("#mHead");
$.urlParam("#mBody");
$.urlParam("#mFood");

  
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
    
    }
    
});