(function (ArrayProto) {
	if (!ArrayProto.indexOf) {
		ArrayProto.indexOf = function (searchElement/*, fromIndex */) {
			"use strict";
			
			var len = this.length;					
			if (len === 0) {
				return -1;
			}
			var n = len;
			if (arguments.length > 0) {
				n = Number(arguments[1]);
				if (n != n) {// short for isNan
					n = 0;
				}
			}
			if (n >= len) {
				return -1;
			}
			var k = n < 0 ? len - Math.abs(n) : n;			
			for(; k < len; k++) {
				if (k in this && this[k] === searchElement) {
					return k;
				}
			}
			
			return -1;
		};
	}
	
	if (!ArrayProto.lastIndexOf) {
		ArrayProto.lastIndexOf = function (searchElement/*, fromIndex */) {
			"use strict";
			
			var len = this.length;
			
			if (len === 0) {
				return -1;
			}
			var n = len;
			if (arguments.length > 0) {
				n = Number(arguments[1]);
				if (n != n) {// short for isNan
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
		ArrayProto.every = function (callbackfn/*, thisArg */) {
		
		};
	}
})(Array.prototype);