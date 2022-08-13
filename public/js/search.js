$('#search').on('keyup', function(e){
    $.ajax({
      type: 'GET',
      url: "/search",
      data: {
        keyword: $(this).val()
      },
      success: function( result ) {
        $.each( result, function( index, value ) {
          $('#search')
          $( "#searchprompts" ).append( "<strong>" + value.title + "</strong>" );
        });
      }
    });
});
