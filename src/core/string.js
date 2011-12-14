(function(StringProto) {
	if (!StringProto.trim) {
		StringProto.trim = function () {
			return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		};
	}
})(String.prototype);