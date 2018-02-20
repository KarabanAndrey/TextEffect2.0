var arrText=[];
//Текст в блоках в массив
function returnArr(div) {
    for (var i = 0; i<div.length; i++) {
        arrText.push(div[i].innerHTML);
    }
}
returnArr($("div.block").toArray());
//загрузка
$(document).ready(function(){
	//кол-во слов
	var maxLength=arrText.length-1;

   for (var i = 0; i <= maxLength; i++) {
    $('#box').append('<p class="part" id="textBox'+i+'"></p>');
        //кол-во символов в определеном слове;
        var max = arrText[i].length - 1;
        for (var j = 0; j <= max; j++) {
        	//установка задержки появления
            $('#textBox'+i).append('<span style="transition: ' + Math.random()*3 + 's; transition-delay: ' + Math.random() + 's;">' + arrText[i].charAt(j) + '</span>'); 
        };
    };

    //
    var number = 0;
    $('#textBox' + number).addClass('active');
    
    //total boxs
    var maxBox = $('#box > p').length;

    setInterval(function(){ 
    	if (number == maxBox) {
            number = 0;
        }
        $('#textBox' + number).removeClass('active');
        number++;
        setTimeout(function(){ 
            $('#textBox' + number).addClass('active');
        }, 2000);
    }, 5000);
});