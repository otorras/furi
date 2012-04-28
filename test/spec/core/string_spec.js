describe('String', function() {
  describe('trim method', function() {
    it('should be implemented in the prototype object', function() {
      var trim = String.prototype.trim;
      expect(typeof trim).toEqual('function');
    });

    it('should remove begining and end spaces of the string', function() {
      var testString = "         I must be trimmed      ";
      expect(testString.trim()).toEqual("I must be trimmed");
    });
  });
});