$(function(){

  function chunk(pattern){ 
    var text = $.trim($('textarea#source').val());
    if (pattern.length>0){
      var re = new RegExp(pattern);
    } else {
      var re = new RegExp('\n\n');
    }
    return text.split(re); 
  }

  $('#source').load('entries.txt');
  //$('#outline').load('outline.txt');

  $('#chunk').click(function(){
    var chunks = chunk($('#chunker').val());
    localStorage['original'] = JSON.stringify(chunks);
    $.each(chunks, function(i, chunk){ 
      $('#lexicon').append($('<li/>', { id: 'entry' + i, text: chunk, 'class': 'hidden'  } ))
    });
    $('ul#lexicon li:first').removeClass('hidden').addClass('current');
  });

  $('#match').click(function(){

    var pattern = $('#tomark').val();
    $('.highlight').removeClass('highlight' );
    $('.current').highlightRegex( pattern );

  })
 
})
