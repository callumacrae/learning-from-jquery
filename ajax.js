function request(method, url, data, callback) {
	if (window.XMLHttpRequest) {
		var req = new XMLHttpRequest();
	} else {
		// Internet Explorer
		var req = new ActiveXObject('Microsoft.XMLHTTP');
	}

	if (method === 'GET' && typeof data === 'string') {
		url += '?' + data;
	}

	req.open(method, url, true);

	if (method === 'POST' && typeof data === 'string') {
		req.setRequestHeader('Content-type',
			'application/x-www-form-urlencoded');
	}

	req.onreadystatechange = function () {
		if (req.readyState === 4 && req.status === 200) {
			var contentType = req.getResponseHeader('Content-type');
			if (contentType === 'application/json') {
				callback(JSON.parse(req.responseText));
			} else {
				callback(req.responseText);
			}
		} else if (req.readyState === 4) {
			throw new Error('XHR Request failed: ' + req.status);
		}
	};
	req.send((typeof data === 'string' && method === 'POST') ? data : null);
	return req;
}

function get(url, data, callback) {
	return request('GET', url, data, callback);
}

function post(url, data, callback) {
	return request('POST', url, data, callback);
}