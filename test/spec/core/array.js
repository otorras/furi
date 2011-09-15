describe('Array.prototype', function(){
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