var listeners = [];
function addEventListener(element, event, handler) {
	if (element.addEventListener) {
		element.addEventListener(event, handler);
	} else if (element.attachEvent) {
		var newHandler = function (e) {
			e.preventDefault = function () {
				e.returnValue = false;
			};
			e.stopPropagation = function () {
				e.cancelBubble = true;
			};

			handler.call(element, e);
		};
		element.attachEvent('on' + event, newHandler);
		listeners.push([handler, newHandler]);
	}
}

function triggerEvent(element, event) {
	if (element.dispatchEvent) {
		var evt = document.createEvent('UIEvents');
		evt.initUIEvent(event, true, true, window, 1);
		element.dispatchEvent(evt);
	} else if (element.fireEvent) {
		// Internet Explorer support
		var evt = document.createEventObject();
		evt.button = 1;
		element.fireEvent('on' + event, evt);
	} else if (element['on' + event]) {
		element['on' + event].call();
	}
}

function removeEventListener(element, event, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(event, handler);
	} else if (element.detachEvent) {
		for (var i = 0; i < listeners.length; i++) {
			if (listeners[i][0] === handler) {
				element.detachEvent('on' + event, listeners[i][1]);
				break;
			}
		}
	}
}