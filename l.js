/**
 * Javascript Logger, An Extension for browser build in console.log
 * Show call stack for log, including file, line and function name
 * Use Example:
 *      L.d(msg);
 * @type {{d}}
 */
var L = (function() {
    var L = {
        getInfo: function() {
            var stack = (new Error()).stack.split('\n'),
                info = stack[3].split(':');
            return [info[2].substr(info[2].lastIndexOf('/') + 1), info[info.length - 2], info[0].trim().split(' ')[1]];
        },
        d: function(msg) {
            var stackInfo = L.getInfo();
            console.log('-----> ['+stackInfo[0]+']->['+stackInfo[1]+']->['+stackInfo[2]+']:' + msg);
        }
    };
    return {
        d: L.d
    }
})();
