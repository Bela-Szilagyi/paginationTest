$(document).ready(function(){
    var clicked;
    
    $("#clickable").click(function(){
        clicked = $(this).attr("name");
        $.ajax({
            type : 'POST',
            url : "/test/",
            contentType: 'application/json;charset=UTF-8',
            data : JSON.stringify({data:clicked})
        })
        .done(function( msg ) {
            alert( "Posted: " + msg );
        })
        .fail(function( msg ) {
            alert( "Failed: " + msg );
        });
    });
});
