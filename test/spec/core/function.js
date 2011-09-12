describe('Function', function () {

  it('can bind objects to functions', function () {
    var objectToInject = {
      aProperty : 1
    };
    
    var fun = function () {
      return this.aProperty;
    }.bind(objectToInject);

    expect(fun()).toEqual(objectToInject.aProperty);
  });

});
