$(".buildtable").click(loaddata);
function loaddata() {
    var select = document.getElementById('valute');
    var value = select.options[select.selectedIndex].value;
    var result = document.querySelector('input').value;
    $.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function (data) {
        $('#output').html(result + " " + data.Valute[value].Name + "  -> " + data.Valute[value].Value.toFixed(1) * result + " Рублей");
    })
};