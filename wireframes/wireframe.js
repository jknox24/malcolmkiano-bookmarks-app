/* global $ */

function init() {
  $('#showCode').on('click', function(){
    $('#codeSection').toggleClass('active');
  });

  $('#showLinks').on('click', function(){
    $('#wf-links').toggleClass('active');
  });
}

$(init);