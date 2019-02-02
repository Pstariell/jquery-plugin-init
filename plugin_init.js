+ function ($) {
    'use strict'

    var Selector = {
        d: document,
        w: window
    }

    var NomePlugin = function (element, options) {
        this.$elem = element;
        this._settings = options;
        this.Default = {
            
        }

        this.settings = $.extend(true, this.Default, options);
        this.initialize();


        
    }


    NomePlugin.prototype = {
        initialize: function() {
            //Init
           var x =  JSON.stringify(this.settings);
           alert(x);
        }, 
        test : function(opt) {
            alert("params:" + JSON.stringify(opt));
        }
        
    }

    $.fn.NomePlugin = function (settings) { // The Plugin call
        var instance = this.data('plugin_NomePlugin'); // Get instance

        if (instance === undefined) { // Do instantiate if undefined
            settings = settings || {};
            this.data('plugin_NomePlugin', new NomePlugin(this, settings));
            return this;
        }
        
        // console.log(settings);
        // console.log(arguments);
        // console.log(NomePlugin.prototype[settings]);
        // console.log($.isFunction(NomePlugin.prototype[settings]));

        if ($.isFunction(NomePlugin.prototype[settings])) { // Call method if argument is name of method
            var args = Array.prototype.slice.call(arguments); // Get the arguments as Array
            console.log("richiamato metodo" + args[0]);
            args.shift(); // Remove first argument (name of method)
            return NomePlugin.prototype[settings].apply(instance, args); // Call the method
        }

        // Do error handling

        return this;
    }

}(jQuery);