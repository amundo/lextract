$(function(){

  function chunk(){ 
    var text = $.trim($('textarea#source').val());
    var patternRE = new RegExp($('input#chunker').val());
    return text.split(patternRE); 
  }

  $('#source').load('entries.txt');
  //$('#outline').load('outline.txt');

  $('#chunk').click(function(){
    var chunks = chunk();
    $.each(chunks, function(i, chunk){ 
      $('#lexicon').append($('<li/>', { id: 'entry' + i, text: chunk, 'class': 'hidden'  } ))
    });
    $('ul#lexicon li:first').removeClass('hidden').addClass('current');
  });

  $('#match').click(function(){

    var pattern = $('#tomark').val();
    var re = new RegExp(pattern);
    $('.highlight').removeClass('highlight' );
    $('.current').highlightRegex( pattern );

  })
 
})
