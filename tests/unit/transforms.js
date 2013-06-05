$(function () {
    module("map")

    test("map should create dictionary", function() {
        var dict = { 'a':'b', 'c':'d' };
        var result = webster.map(dict, function(key, value) {
            return [key, value];
        });
        
        deepEqual(result, dict);
    })

    test("map should return empty for empty dictionary", function() {
        var dict = {};
        var result = webster.map(dict, function(key, value) {
            return [key, value];
        });

        deepEqual(result, dict);
    })

    test("map should accept and use context", function() {
        var context = { 'append' : 'a' };
        var dict = { 'a': 'b', 'c': 'd' };
        var result = webster.map(dict, function(key, value) {
            return [key, value + this.append];
        }, context);

        var expectedResult = { 'a': 'ba', 'c': 'da' };
        deepEqual(result, expectedResult);
    })

    module("keys")

    test("keys should return an empty list for an empty dictionary", function() {
        var dict = {};
        var keys = webster.keys(dict);
        deepEqual(keys, []);
    })

    test("keys should return all the keys", function() {
        var dict = { 'a': 'b', 'c': 'd' };
        var keys = webster.keys(dict);
        deepEqual(keys, ['a', 'c']);
    })

    module("values")

    test("values should return an empty list for an empty dictionary", function() {
        var dict = {};
        var values = webster.values(dict);
        deepEqual(values, []);
    })

    test("values should return all the values", function() {
        var dict = { 'a': 'b', 'c': 'd' };
        var values = webster.values(dict);
        deepEqual(values, ['b', 'd']);
    })
})
