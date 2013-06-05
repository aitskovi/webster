$(function () {

    module("each")

    test("each should iterate over all elements", function() {
        var dict = { 'a': 'b', 'c':'d' };
        var result = [];
        webster.each(dict, function(key, value) {
            result.push(key);
            result.push(value);
        });

        deepEqual(result, ["a", "b", "c", "d"]);
    })

    test("each should be a no-op for an empty dictionary", function() {
        var dict = {};
        var modified = false;
        webster.each(dict, function(key, value) {
            modified = true;
        });
        equal(modified, false);
    })

    test("each should accept and use a context", function() {
        var context = { 'item' : 'valid' };
        var dict = { 'a': 'b', 'c': 'd' };
        var result = [];
        webster.each(dict, function(key, value) {
            result.push(this.item)
        }, context);

        deepEqual(result, ['valid', 'valid']);
    });

    test("each shouldn't iterate prototype properties", function() {
        function Dictionary() { };
        Dictionary.prototype.value = 'value';
        var dict = new Dictionary();
        dict['child'] = 'child';

        var result = [];
        webster.each(dict, function(key, value) {
            result.push(key);
            result.push(value);
        });

        deepEqual(result, ["child", "child"]);
    })
})
