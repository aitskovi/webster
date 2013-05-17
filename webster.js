(function() {

var root = this;

var webster = root.webster = {};

var each = webster.each = function(dict, fn, context) {
    if (dict == undefined) return;
    else if (fn == undefined) return;
    else if (context != undefined) return each(dict, fn.bind(context));

    for (key in dict) {
        if (dict.hasOwnProperty(key)) {
            fn(key, dict[key]);
        }
    }
}

var map = webster.map = function(dict, fn, context) {
    if (context != undefined) return map(dict, fn.bind(context));
    mapped = {};

    each(dict, function(key, value) {
        var result = fn(key, value)
        mapped[result.key] = result.value;
    });

    return mapped;
}

var foldl = webster.foldl = function(dict, start, fn, context) {
    if (context != undefined) return foldl(dict, start, fn.bind(context));
    var accumulator = start;

    each(dict, function(key, value) {
        accumulator = fn(key, value, accumulator)
    });

    return accumulator;
}

webster.keys = function(dict) {
    return foldl(dict, [], function(key, value, accumulator) {
        accumulator.push(key);
        return accumulator;
    });
}

webster.values = function(dict) {
    return foldl(dict, [], function(key, value, accumulator) {
        accumulator.push(value);
        return accumulator;
    });
}

}).call(this);
