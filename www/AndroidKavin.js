var exec = cordova.require('cordova/exec');

var AndroidKavin = function() {
    console.log('AndroidKavin Started');
};

AndroidKavin.show = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'AndroidKavin', 'show', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = AndroidKavin;
}