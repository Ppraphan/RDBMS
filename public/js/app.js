$(document).foundation();

$(document).ready(function() {
  $('#catSelection').change(function() {
    var catdata = $('#catSelection').val();
    //   Note the url below. It adds catid=(#categoryBox value from above).
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:8080/signup/getDpment/' + catdata,
      dataType: 'json',
      success: function(rows) {
        $('#games').empty();
        for (var i = 0; i < rows.length; i++) {
          $('#games').append('<option>' + rows[i].Sub_Dpment_name + '</option>')
        }
      }
    });
  });
});



/*ฟังก์ชันเก็บค่าเก่า-ค่าใหม่ไปแสดงตอนอัปเดท-ประเภทงานวิจัย*/
function myFunction(data) {
  var x = document.getElementById("555");
  var y = document.getElementById("666");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  }
  var x2 = document.getElementById("researchtype-Table").value = data;
  document.getElementById("12").innerHTML = x2;
  document.getElementById("13").value = x2;
};

function myFunction2() {
  var x = document.getElementById("555");
  var y = document.getElementById("666");
  if (x.style.display === "block") {
    y.style.display = "block";
    x.style.display = "none";
  }
};

/*ฟังก์ชันเก็บค่าเก่า-ค่าใหม่ไปแสดงตอนอัปเดท-หน่วยงาน*/
function myFunctiondpment(data, data2, data3) {
  var x = document.getElementById("555");
  var y = document.getElementById("666");
  var z = document.getElementById("777");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  }
  var x2 = document.getElementById("Department-table").value = data;
  var x3 = document.getElementById("Department-table").value = data2;
  var x4 = document.getElementById("Department-table").value = data3;
  document.getElementById("12").innerHTML = x2;
  document.getElementById("13").value = x2;
  document.getElementById("14").innerHTML = x3;
  document.getElementById("15").value = x4;
};

function myFunction2() {
  var x = document.getElementById("555");
  var y = document.getElementById("666");

  if (x.style.display === "block") {
    y.style.display = "block";
    x.style.display = "none";
  }
};

$(document).ready(function() {
  $('#data').after('<ul id="nav" class="pagination text-center"></ul>');
  var rowsShown = 10;
  var rowsTotal = $('#data tbody tr').length;
  var numPages = rowsTotal / rowsShown;
  for (i = 0; i < numPages; i++) {
    var pageNum = i + 1;
    if (pageNum == 3) {
      $('#nav').append('<li><a' + i + '" class="ellipsis" aria-hidden="true"></a></li> ');
    } else {
      $('#nav').append('<li><a href="#" rel="' + i + '">' + pageNum + '</a></li> ');
    }
  }
  $('#data tbody tr ').hide();
  $('#data tbody tr ').slice(0, rowsShown).show();

  $('#nav a:first').addClass('active');
  $('#nav a').bind('click', function() {
    $('#nav a').removeClass('active');
    $(this).addClass('active');
    var currPage = $(this).attr('rel');
    var startItem = currPage * rowsShown;
    var endItem = startItem + rowsShown;
    $('#data tbody tr ').css('opacity', '0.0').hide().slice(startItem, endItem).
    css('display', 'table-row').animate({
      opacity: 1
    }, 300);
  });
});




/*
$(document).ready(function(){
  $('#delb').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/forms/'+id,
      success: function(response){
        alert('Deleting Article');
        window.location.href='/';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
*/

$(function() {
  var showClass = 'show';
  $('input').on('checkval', function() {
    var label = $(this).prev('label');
    if (this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function() {
    $(this).trigger('checkval');
  });
});


// $(document).ready(function() {
//      $(':input[type="submit"]').prop('disabled', true);
//      $('input[type="text"]').keyup(function() {
//         if($(this).val() != '') {
//            $(':input[type="submit"]').prop('disabled', false);
//         }
//      });
//  });

$('input[type=file]').change(function() {
  var hasNoFiles = this.files.length == 0;
  $(this).closest('form') /* Select the form element */
    .find('input[type=submit]') /* Get the submit button */
    .prop('disabled', hasNoFiles); /* Disable the button. */
});


$('#myform > input').on('input', function() {
  var empty = false;
  $('form > input, form > select').each(function() {
    if ($(this).val() == '') {
      empty = true;
    }
  });

  if (empty) {
    $('#register').attr('disabled', 'disabled');
  } else {
    $('#register').removeAttr('disabled');
  }
});

$(document).ready(function() {
  $('.sendButton').attr('disabled', true);

  $('#message').keyup(function() {
    if ($(this).val().length != 0) {
      $('.sendButton').attr('disabled', false);
    } else {
      $('.sendButton').attr('disabled', true);
    }
  })
});

$(document).ready(function() {
  $('.sendButton2').attr('disabled', true);

  $('#message2').keyup(function() {
    if ($(this).val().length != 0) {
      $('.sendButton2').attr('disabled', false);
    } else {
      $('.sendButton2').attr('disabled', true);
    }
  })
});


$(document).ready(function() {
  $('.field input').keyup(function() {

    var empty = false;
    $('.field input').each(function() {
      if ($(this).val().length == 0) {
        empty = true;
      }
    });

    if (empty) {
      $('.actions input').attr('disabled', 'disabled');
    } else {
      $('.actions input').removeAttr('disabled');
    }
  });
});
