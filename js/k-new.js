ajax({
    type: 'get',
    url: 'http://192.168.0.137:3000/play/new',
    success: function (result) {
        let newaraay=result.slice(0,2)
        let array2=[...newaraay[0],...newaraay[1]]
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("list").innerHTML = tmpText(array2);
    }
});
