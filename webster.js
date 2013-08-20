(function() {

var root = this;

var webster = root.webster = {};

var each = webster.each = function(dict, fn, context) {
    if (dict === undefined) return;
    else if (fn === undefined) return;
    else if (context !== undefined) return each(dict, fn.bind(context));

    for (var key in dict) {
        if (dict.hasOwnProperty(key)) {
            fn(key, dict[key]);
        }
    }
}

var map = webster.map = function(dict, fn, context) {
    if (context !== undefined) return map(dict, fn.bind(context));
    var mapped = {};

    each(dict, function(key, value) {
        var result = fn(key, value)
        mapped[result[0]] = result[1];
    });

    return mapped;
}

var filter = webster.filter = function(dict, fn, context) {
    if (context !== undefined) return filter(dict, fn.bind(context));
    var filtered = {};

    each(dict, function(key, value) {
        if (fn(key, value)) {
            filtered[key] = value;
        }
    });

    return filtered;
}

var foldl = webster.foldl = function(dict, start, fn, context) {
    if (context !== undefined) return foldl(dict, start, fn.bind(context));
    var accumulator = start;

    each(dict, function(key, value) {
        accumulator = fn(key, value, accumulator)
    });

    return accumulator;
}

var foldr = webster.foldr = function(dict, start, fn, context) {
    if (context !== undefined) return foldl(dict, start, fn.bind(context));
    var rest = start;

    var keys = webster.keys(dict);

    for (var i = keys.length  - 1; i >= 0; --i) {
        var key = keys[i];
        rest = fn(key, dict[key], rest);
    }

    return rest;
}

var keys = webster.keys = function(dict) {
    return foldl(dict, [], function(key, value, accumulator) {
        accumulator.push(key);
        return accumulator;
    });
}

var values = webster.values = function(dict) {
    return foldl(dict, [], function(key, value, accumulator) {
        accumulator.push(value);
        return accumulator;
    });
}

}).call(this);
