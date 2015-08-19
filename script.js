$(document).ready(function(){


        // <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        var count = 0; 
       	var newDiv = '<div class="well" id="newDiv"><"Line#">';
        //var count = 0;
        var $buttonColor = $('<button>'); 
        var $buttonRemove = $('<button>');
    	//var $countLabel = '<Line#>';

    	//Change Color Button 
    	$buttonColor.text('Change Color'); 
    	$buttonColor.attr('class', 'js-delete btn btn-warning'); 
    	//Remove Button
    	$buttonRemove.text('Remove'); 
    	$buttonRemove.attr('class', 'js-delete btn btn-danger'); 
        //What happens when you click generate
        
        $("#generate").on("click", function(){
            //event.preventDefault();
            count++;
            $(newDiv).insertAfter('#generate');
            $buttonColor.insertAfter('#newDiv');
            $buttonRemove.insertAfter('#newDiv');
        	alert("You have clciked " + count + " time/times");
        
        })
    
		//Whtat happens when you click change color
			$('#buttonColor').on("click", function(){
			$(newDiv).style.background = red; 


    })

		//What happens when you click remove
			$buttonRemove.on('click', '.js-delete', function(){
   			 e.preventDefault();
    		$(newDiv).parent().remove();
})



 });
