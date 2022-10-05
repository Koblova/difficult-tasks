const text = ' Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице  ';

function show(text) {
    if (typeof text !== 'string') {
        return "Это не строка!";
    } else {
        return "";
    } 
}

function string(text) {
    text.replaceAll(' ');
    if (text.trim().length <= 30) return text.trim();
    return text.trim().substr(0, 30).trim()+"...";
}

console.log(show(text));
console.log(string(text));
