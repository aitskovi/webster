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
        // TODO(Avi Itskovich): Fix this later
        /*
        function Parent() { this.parent = 'parent' };
        var dict = new Parent();
        dict['child'] = 'child';

        var result = [];
        webster.each(dict, function(key, value) {
            result.push(key);
            result.push(value);
        });

        deepEqual(result, ["child", "child"]);
        */
    })

    module("map")

    test("map should create dictionary", function() {
        var dict = { 'a':'b', 'c':'d' };
        var result = webster.map(dict, function(key, value) {
            return {'key': key, 'value': value};
        });
        
        deepEqual(result, dict);
    })

    test("map should return empty for empty dictionary", function() {
        var dict = {};
        var result = webster.map(dict, function(key, value) {
            return { 'key': key, 'value': value };
        });

        deepEqual(result, dict);
    })

    test("map should accept and use context", function() {
        var context = { 'append' : 'a' };
        var dict = { 'a': 'b', 'c': 'd' };
        var result = webster.map(dict, function(key, value) {
            return { key: key, value: value + this.append };
        }, context);

        var expectedResult = { 'a': 'ba', 'c': 'da' };
        deepEqual(result, expectedResult);
    }) 
})
