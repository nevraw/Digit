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

        localStorage.setItem("DigitSettings", JSON.stringify(saveOptions()));
        
        var location = (decodeURIComponent(getURLVariable('return_to')) || "pebblejs://close#") + encodeURIComponent(JSON.stringify(saveOptions()));
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

    function saveOptions() {
		var params = {};
		$('#config').serializeArray().forEach(function(pair) {
			params[pair.name] = pair.value;
		});
		var options = {
			background:	params.background === 'on'
		}
		return options;
	}

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








	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script>
		var LATEST = "1.0";
		function saveOptions() {
			var params = {};
			$('#config').serializeArray().forEach(function(pair) {
				params[pair.name] = pair.value;
			});
			var options = {
				invert:		params.invert === 'on',
				background:	params.background === 'on',
				hour_24:	params.hour_24 === 'on'
			}
			return options;
		}
		function applyOptions() {
			var $form	= $('#config');
			var opts	= JSON.parse(getParam('options'));
			if (opts && opts.invert) {
				$form.find('[name="invert"]').prop('checked', true);
			}
			if (opts && opts.background) {
				$form.find('[name="background"]').prop('checked', true);
			}
			if (opts && opts.hour_24) {
				$form.find('[name="hour_24"]').prop('checked', true);
			}
		}
		function getParam(key) {
			var params = window.location.hash;
			var val;
			params.replace(/(?:^|[#&])([a-z]+)=([^&]+)/ig, function(_, k, v) {
				if (key === k) {
					val = decodeURIComponent(v);
				}
			});
			return val;
		}
		function parseVersion(verStr) {
			var parts = verStr.split('.');
			return parts.reduce(function(sum, part) {
				return (sum * 1000) + parseInt(part, 10);
			}, 0);
		}
		$("#b-submit").click(function() {
			var location = "pebblejs://close#" + encodeURIComponent(JSON.stringify(saveOptions()));
			document.location = location;
		});
		var version = getParam('v');
		if (!version || (parseVersion(version) < parseVersion(LATEST))) {
			$('#update-available').removeClass('hidden');
		}
		else {
			$('#up-to-date').removeClass('hidden');
		}
		applyOptions();
   </script>
