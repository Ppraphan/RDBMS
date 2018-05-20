$(document).foundation();

$(document).ready(function(){
  $('#data').after('<ul id="nav" class="pagination text-center"></ul>');
    var rowsShown = 10;
    var rowsTotal = $('#data tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        if(pageNum==3){
          $('#nav').append('<li><a'+i+'" class="ellipsis" aria-hidden="true"></a></li> ');
        }
        else{
          $('#nav').append('<li><a href="#" rel="'+i+'">'+pageNum+'</a></li> ');
        }
    }
    $('#data tbody tr ').hide();
    $('#data tbody tr ').slice(0, rowsShown).show();

    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function(){
        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data tbody tr ').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
    });
});


$(document).ready(function() {
  $.extend( $.fn.dataTable.defaults, {
    searching: false,
lengthChange: false,
} );

    var table = $('#example').DataTable();
    $('#example tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );



});
