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
    });
  
    describe('lastIndexOf', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'lastIndexOf');
      });
    });
  
    describe('every', function(){
      it(methodPrototypeMessage, function () {
        methodPrototypeFunction(Array, 'every');
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
