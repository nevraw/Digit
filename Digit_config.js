var settings;

// to get value of query string
function getURLVariable(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)",
        regex = new RegExp(regexS),
        results = regex.exec(window.location.href);
    if (results == null) return "";
    else return results[1];
}


$(document).ready(function () {

    $('#xbtnSave').click(function () {

        localStorage.setItem("DigitSettings", JSON.stringify(settings));
        
        var location = (decodeURIComponent(getURLVariable('return_to')) || "pebblejs://close#") + encodeURIComponent(JSON.stringify(settings));
        document.location = location;

    })


    $('#xbtnCancel').click(function () {

        var location = decodeURIComponent(getURLVariable('return_to')) || "pebblejs://close#";
        document.location = location;

    })


    try {
        settings = JSON.parse(localStorage.getItem("DigitSettings"));
    }
    catch(err) {
        settings = null;
    }
        

    if(settings==null) {
        settings = {};
      
    }
    $(":radio[value=" + settings.background + "]").attr('checked', true);
    settings.background = background === 'on';
    
    $('.number').css({
        top:'-290px',
        left: '77px'
    });

    $('#tblDir').css({
        left: "0",
        top: "-25px"
    });

    $("input[type='radio']").checkboxradio();
    $("input[type='button']").button({ inline: true, mini: true, theme: "b" });
    $('.sp-replacer').unwrap();
     
    $('#main').show();

});
