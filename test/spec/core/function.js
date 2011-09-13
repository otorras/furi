describe('Function', function () {
  describe('bind method', function () {
    it('can bind `this` function context to an object', function () {
      var objectToInject = {
        aProperty : 1
      };      
      var fun = function () {
        return this.aProperty;
      }.bind(objectToInject);

      expect(fun()).toEqual(objectToInject.aProperty);
    });
  });
});
