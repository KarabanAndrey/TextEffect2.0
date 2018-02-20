var text = $('.text').text(),
    textArr = text.split('');
console.log(text);
$('.text').html('');
$.each(textArr, function(i,v){
  if(v == ' '){
    $('.text').append('<span class="space"></span>');}
  $('.text').append('<span>'+v+'</span>');
})