var xhr = function (url, callback, format, errorCallback) {
	var http = new XMLHttpRequest();
	if (!http || !url) return false;
	if (http.overrideMimeType) http.overrideMimeType('text/xml');
	
	// avoid cache issues, append datetime at the end of URL
	url += (url.indexOf('?')+1 ? '&' : '?') + (+(new Date));
	
	http.onreadystatechange = function ()
	{
		if (http.readyState != 4) return;

		if ((s = http.status) == 200)
		{
			if (!callback) return true;

			var result = http.responseText;
			
			if (format == 'json')
			{
				result = ((j = window.JSON) && j.parse) ? j.parse(result) : eval('(' + result.replace(/[\n\r]/g, '') + ')');
			}

			callback(result);
		}
		else if (errorCallback)
		{
			errorCallback(s);
		}
	};

	http.open('GET', url, true);
	http.send(null);
};