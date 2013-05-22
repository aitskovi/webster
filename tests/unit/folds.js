$(function () {

    module("foldl")

    test("foldl on empty list should return start", function() {
        var dict = {};
        var modified = false;
        var start = true;
        var result = webster.foldl(dict, start, function(key, value, accumulator) {
            modified = true;
        });

        equal(modified, false);
        equal(result, start);
    })

    test("foldl should fold from the left", function() {
        var dict = {'a': 1, 'b': 2, 'c': 3};
        var result = webster.foldl(dict, [], function(key, value, accumulator) {
            accumulator.push(key);
            accumulator.push(value);
            return accumulator;
        });

        deepEqual(result, ['a', 1, 'b', 2, 'c', 3]);
    })

    test("foldl should accept a context", function() {
        var context = {'value': 'success'};
        var dict = {'a': 1, 'b': 2};
        var result = webster.foldl(dict, null, function(key, value, accumulator) {
            return this.value;
        }, context);

        equal(result, "success");
    })
})
