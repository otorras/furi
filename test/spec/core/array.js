describe('Array', function(){
  describe('prototype', function(){
    var methodPrototypeMessage = 'should be implemented';
	  var methodPrototypeFunction = function(nativeObject, methodName){
      expect(typeof nativeObject.prototype[methodName]).toEqual('function');
    };

    describe('indexOf', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'indexOf');
      });
		
			it("should return -1 when the array is empty", function () {
				var emptyArray = [];
				var searchElement = "one";
				expect(emptyArray.indexOf(searchElement)).toEqual(-1);
			});
			
			it("should return -1 when the second argument is greater or equal than the array length", function () {
				var anArray = ["one", "two", "three"];
				var searchElement = "three";
				expect(anArray.indexOf(searchElement, anArray.length)).toEqual(-1);
				expect(anArray.indexOf(searchElement, anArray.length+1)).toEqual(-1);
			});
			
			it("should return -1 if no ocurrences are found", function () {
				var anArray = ["one", "two", "three"];
				var searchElement = "four";
				expect(anArray.indexOf(searchElement)).toEqual(-1);
			});
			
			it("should return the index of the first matched element in the array", function () {
				var anArray = ["one", "two", "three", "two"];
				var searchElement = "two";
				expect(anArray.indexOf(searchElement)).toEqual(1);
			});
			
			it("should return the index of the first matched element in the array starting from an index passed as second argument", function (){
				var anArray = ["one", "two", "three", "two"];
				var searchElement = "two";
				expect(anArray.indexOf(searchElement, 2)).toEqual(3);
				expect(anArray.indexOf(searchElement, -1)).toEqual(3);
				expect(anArray.indexOf(searchElement, -4)).toEqual(1);
				expect(anArray.indexOf(searchElement, -5)).toEqual(1);
			});
		});
	
		describe('lastIndexOf', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'lastIndexOf');
      });
		
			it("should return -1 when the array is empty", function () {
				var emptyArray = [];
				var searchElement = "one";
				expect(emptyArray.lastIndexOf(searchElement)).toEqual(-1);
			});
			
			it("should return the index of the last such position of the matched element", function () {
				var anArray = ["one", "two", "three", "two"];
				var searchElement = "two";
				expect(anArray.lastIndexOf(searchElement)).toEqual(3);
			});
			
			it("should return -1 if no ocurrences are found", function () {
				var anArray = ["one", "two", "three"];
				var searchElement = "four";
				expect(anArray.lastIndexOf(searchElement)).toEqual(-1);
			});
			
			it("should return the index of the last such position of the matched element starting by the minimum value of the array length and the second argument when it is positive", function (){
				var anArray = ["one", "two", "three", "two"];
				var searchElement = "two";
				expect(anArray.lastIndexOf(searchElement, 1)).toEqual(1);
				expect(anArray.lastIndexOf(searchElement, 10)).toEqual(3);
			});
			
			it("should return the index of the last such position of the matched element starting by the array length minus the absolute value of the second argument when it is negative", function (){
				var anArray = ["one", "two", "three", "two"];
				var searchElement = "two";
				expect(anArray.lastIndexOf(searchElement, -1)).toEqual(3);
				expect(anArray.lastIndexOf(searchElement, -2)).toEqual(1);
			});
			
			it("should return -1 when the second argument is less than 0 and the absolute value is greater than the array length", function () {
				var anArray = ["one", "two", "three"];
				var searchElement = "one";
				expect(anArray.lastIndexOf(searchElement, -4)).toEqual(-1);
			});
		});
		
    describe('every', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'every');
      });
		
			it("should check that the first parameter is a function", function () {
				expect(function() {[].every(1);}).toThrow();
			});
			
			it("", function () {
			
			});
		});

    describe('some', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'some');
      });
    });
  
    describe('forEach', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'forEach');
      });
    });
  
    describe('map', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'map');
      });
    });
  
    describe('filter', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'filter');
      });
    });
  
    describe('reduce', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'reduce');
      });
    });
  
    describe('reduceRight', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'reduceRight');
      });
    });
  });

  describe('isArray', function(){
    it('should be implemented', function(){
      expect(typeof Array.isArray).toEqual('function');
    });
    it('should return true when an Array object is passed as argument', function(){
      expect(Array.isArray([])).toBeTruthy();
      expect(Array.isArray(new Array)).toBeTruthy();
      expect(Array.isArray(Array())).toBeTruthy();
    });
    it('should return false otherwise', function(){
      expect(Array.isArray()).toBeFalsy();
      expect(Array.isArray({})).toBeFalsy();
      expect(Array.isArray('')).toBeFalsy();
      expect(Array.isArray(0)).toBeFalsy();
      expect(Array.isArray(function(){})).toBeFalsy();
    });
  });

});
