/**
 * parser.js: Parses some text.
 *
 * @version 1.0.2
 * @author Callum Macrae <callum@lynxphp.com>
 */

/**
 * Parses some text.
 *
 * @constructor
 * @example
 *  var textParse = new Parser();
 *  textParse.parse(text);
 *  textParse.get('name');
 * @since 1.0.0
 */
function Parser() {
	this.data = {};
}

/**
 * Parses the text given to it.
 *
 * @param string text The string to parse.
 * @returns object The parser object you called.
 * @since 1.0.1
 */
Parser.prototype.parse = function (text) {
	// Parse text...
	return this;
};

/**
 * The old function to add text to parse.
 * Replaced with .parse: {@link Parser.prototype.parse}
 *
 * Will be removed completely in the near future.
 *
 * @deprecated
 * @see Parser.prototype.parse
 */
Parser.prototype.addText = function () {
	return this.parse.call(this, arguments);
};

/**
 * Gets some parsed data.
 *
 * @param string item The item to return.
 * @returns string The item specified by the item
 *  argument. If not found, will return null.
 * @since 1.0.0
 */
Parser.prototype.get = function (item) {
	return this.data[item];
};