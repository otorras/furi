(function(ArrayProto) {
	if (!ArrayProto.indexOf) {
		ArrayProto.indexOf = function(searchElement /*, fromIndex */ ) {
			var len = this.length;
			if (len === 0) {
				return -1;
			}
			var n = len;
			if (arguments.length > 0) {
				n = Number(arguments[1]);
				if (n != n) { // short for isNan
					n = 0;
				}
			}
			if (n >= len) {
				return -1;
			}
			var k = n < 0 ? len - Math.abs(n) : n;
			for (; k < len; k++) {
				if (k in this && this[k] === searchElement) {
					return k;
				}
			}

			return -1;
		};
	}

	if (!ArrayProto.lastIndexOf) {
		ArrayProto.lastIndexOf = function(searchElement /*, fromIndex */ ) {
			var len = this.length;

			if (len === 0) {
				return -1;
			}
			var n = len;
			if (arguments.length > 0) {
				n = Number(arguments[1]);
				if (n != n) { // short for isNan
					n = 0;
				}
			}
			var k = n > 0 ? Math.min(n, len - 1) : len - Math.abs(n);
			for (; k >= 0; k--) {
				if (k in this && this[k] === searchElement) {
					return k;
				}
			}

			return -1;
		}
	}

	if (!ArrayProto.every) {
		ArrayProto.every = function(callbackfn /*, thisArg */ ) {
			var len = this.length;

			if ("function" !== typeof callbackfn) {
				throw new TypeError(callbackfn + " is not a function");
			}

			var thisArg = arguments[1];
			for (var i = 0; i < len; i++) {
				if (i in this && !callbackfn.call(thisArg, this[i], i, this)) {
					return false;
				}
			}

			return true;
		};
	}

	if (!ArrayProto.some) {
		ArrayProto.some = function(callbackfn /*, thisArg*/ ) {
			var len = this.length;

			if ("function" !== typeof callbackfn) {
				throw new TypeError(callbackfn + " is not a function");
			}

			var thisArg = arguments[1];
			for (var i = 0; i < len; i++) {
				if (i in this && callbackfn.call(thisArg, this[i], i, this)) {
					return true;
				}
			}

			return false;
		};
	}

	if (!ArrayProto.forEach) {
		ArrayProto.forEach = function(callbackfn /*, thisArg*/ ) {
			var len = this.length;

			if ("function" !== typeof callbackfn) {
				throw new TypeError(callbackfn + " is not a function");
			}

			var thisArg = arguments[1];
			for (var i = 0; i < len; i++) {
				if (i in this) callbackfn.call(thisArg, this[i], i, this);
			}
		};
	}
})(Array.prototype);

if (typeof Array.isArray !== 'function') {
	Array.isArray = function(val) {
		return Object.prototype.toString.apply(val) === '[object Array]';
	};
}
