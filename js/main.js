// var $mainheader= $('#main-header');
// // console.log($mainheader);
// $mainheader.html('Hello');

$('#random-gif-btn').click(function(){
	$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho&rating=pg", function( data ) {
		var img='<img src="' + data.data.image_url + '">'
		$('#random-gif-container').html(img);

  		console.log(data);
});
});




