$(document).ready(function () {
    var text = $('#toParse').text();
    text = text.split('');
    decodeBits2Morse(text);
});

function decodeBits2Morse(text) {
    var space = 0;
    var cont = 0;
    var arrMsg = new Array();
    for (let i = 1; i <= text.length; i++) {
        if (text[i] == 1) {
            while (text[i] == 1) {
                i++;
                cont++
            }
        }
        else {
            var j = i;
            while(text[j] == 0){
                space++;
                j++;
            }
        }
        if (cont != 0) {
            if (cont < 4) {
                arrMsg.push('.');
            } else {
                arrMsg.push('-');
            }
        }
        if(space > 2)
            arrMsg.push(' ');
        cont = 0;
        space = 0;
    }
    translate2Human(arrMsg)
}

function translate2Human(arrMsg) {
    console.log(arrMsg.join(''));
}