$('#search').on('keyup', function(e){

    var data = {};
    data.title = "title";
    data.message = "message";
    $.ajax({
      type: 'POST',
      url: "/search",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      success: function( result ) {
        debugger;
        $.each( result, function( index, value ) {
          $( "#searchprompts" ).append( "<strong>" + value.title + "</strong>" );
        });
      }
    });
});
