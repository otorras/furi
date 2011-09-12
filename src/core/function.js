if( !Function.prototype.bind )
  Function.prototype.bind = (function (slice) {
    function bind (context) {
      var that = this;
      if (arguments.length>1) {
        var params = slice.call(arguments, 1);
      
        return function () {
          return that.apply(context, arguments.length ? params.concat(slice.call(arguments)) : params);
        };
      }

      return function () {
        return arguments.length ? that.apply(context, slice.call(arguments)) : that.call(context);
      };
    }

    return bind;
  })(Array.prototype.slice);
