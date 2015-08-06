angular.module('ngIntlTelInput', [])
  .provider('ngIntlTelInput', function () {
    var props = {};

    this.set = function (obj) {
      if (typeof obj === 'object') {
        for (var key in obj) {
          props[key] = obj[key];
        }
      }
    };

    this.$get = ['$log', function ($log) {
      return Object.create({}, {
        init: {
          value: function (elm, attr) {
            // add massaging of properties from attributes here;
            if (typeof props.utilsScript !== 'string') {
              $log.warn('missing stuff');
            }
            elm.intlTelInput(props);
          }
        },
      });
    }];
  });
