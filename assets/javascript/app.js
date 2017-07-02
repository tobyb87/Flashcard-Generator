$(document).ready( function() {
    var rightQuestions = 0, wrongQuestions = 0, unasweredQuestions = 0, time; 

    $('.start').on('click', function() {

    $('.startDiv').attr('style', 'display: none');
   	$('.questionsDiv').attr('style', 'display: normal');
   	$('.resultsDiv').attr('style', 'display: none');

        twoMinutes();
   	    triviaFunction();
   })


   function twoMinutes(){
        t=120;

        timer = setInterval(function(){
        t--;
        console.log('t' + t);
        
        if(t>=0){
            $('.timerBottom').text(t);
        }
        if(t==0){
            displayResults();
            clearInterval(timer);
        }
    },1000);
}


// Start


    function triviaFunction() {
    	console.log('triviaFunction is working');
      //diplay the questions in the play area
      $('.startDiv').attr('display', 'none');
      $('.resultsDiv').attr('display', 'none');	



	   	$('.done').on('click', function() {
	   		console.log('done button is working');
	   		clearInterval(timer);
	   		displayResults();
	   	 //done click end	
	   	})

   	//triviaFunction end
   }

   function displayResults() {
   	console.log('displayResults is working');

    $('.startDiv').attr('style', 'display: none');
  	$('.questionsDiv').attr('style', 'display: none');
   	$('.resultsDiv').attr('style', 'display: normal');
if($('#1a').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#1b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#1c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#1d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

          	//question 2, d
   	if($('#2a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#2b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#2c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#2d').is(':checked')){
        rightQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

          	//question 3, b
   	if($('#3a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#3b').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#3c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#3d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

          	//question 4, a
   	if($('#4a').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#4b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#4c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#4d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

   	          	//question 5, c
   	if($('#5a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#5b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#5c').is(':checked')){
        rightQuestions += 1;
   	}
  	else if($('#5d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

   	          	//question 6, b
   	if($('#6a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#6b').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#6c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#6d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}

   	          	//question 7, d
   	if($('#7a').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#7b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#7c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#7d').is(':checked')){
        rightQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}
          	//question 8, a
   	if($('#8a').is(':checked')){
   		rightQuestions += 1;
   	}
   	else if($('#8b').is(':checked')){
   		wrongQuestions += 1;
   	}
   	else if($('#8c').is(':checked')){
        wrongQuestions += 1;
   	}
  	else if($('#8d').is(':checked')){
        wrongQuestions += 1;
   	}
   	else {
   		unasweredQuestions += 1;
   	}
    
   	$('#rightQuestions').html(rightQuestions);
   	$('#wrongQuestions').html(wrongQuestions);
   	$('#unasweredQuestions').html(unasweredQuestions);
   	console.log('unanswered questions' + unasweredQuestions);

   	//displayResults end
   }
 //document ready end
})