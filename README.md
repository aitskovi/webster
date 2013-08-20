A functional utility belt for dictionaries. This set of utilities allows you to operate on dictionaries with the same ease you operated on lists with underscore.js

# Quick Example

Want to map a dictionary of objects into another dictionary? It's as easy as:

    webster.map({'a': 0, 'b': 1},  function(key, value) {
        return [key, value + 1];
    });

# Usage

    <script type="text/javascript" src="webster.js"></script>

# Why?

Although libraries like underscore.js supports some of these primitives, they're mostly focused on lists. There is no way to map a dictionary to a dictionary in underscore, instead a dictionary becomes an array. Webster gives you an easy way to manage dictionaries when you need to.

# Documentation

## Iteration

__each__ _webster.each(dict, iterator, [context])_

Iterates over a list of (key, value) pairs contained in the dictionary. Each key, value pair is submitted to the iterator function. Each invocation of iterator has two arguments key and value. A context may also be passed in to bind to the iterator function.

## Transformations

__map__ _webster.map(dict, iterator, [context])_

Produces a new dictionary of values by mapping each (key, value) pair in the dictionary through the iterator function. The iterator function recieves key and value arguments and must return a two element [key, value] list.

__keys__ _webster.keys(dict)_

Prodcues the keys associated with the dictionary.

__values__ _webster.values(dict)_

Produces the values associated with the dictionary.

## Folds 

__foldl__ _webster.foldl(dict, accumulator, iterator, [context])_

Foldl converts a list of values into a single value by folding over the dictionary from left to right. Accumulator is the initial state of the result, and each succesive step of the fold modifies it. Its final value is returned by foldl. Each iteration is given a key, a value and the accumulator so far.

__foldr__ _webster.foldr(dict, rest, iterator, [context])_

Foldr converts a list of values in a single value by folding over the dictionary from right to left. Rest is the initial state of the result, and each succesive step of the fold modifies it. Its final value is returned by foldr. Each iteration is given a key, a value and the value of rest so far.
