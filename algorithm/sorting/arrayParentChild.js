// find array of object parent child

var data = [{ id: 8, name: 'Shirts', slug: 'shirts', parent_id: null },
{ id: 9, name: 'Pants', slug: 'pants', parent_id: null },
{ id: 10, name: 'Vintage Prints', slug: 'vintage-prints', parent_id: 8 },
{ id: 11, name: 'Cotton Tee', slug: 'cotton-tee', parent_id: 8 },
{ id: 12, name: 'Business Khakis', slug: 'business-khakis', parent_id: 9 }]
    .sort(function (a, b) {
        return a.name.localeCompare(b.name);
    }),
    tree = function (data, root) {
        var r = [], o = {};
        data.forEach(function (a) {
            o[a.id] = { data: a, children: o[a.id] && o[a.id].children };
            if (a.parent_id === root) {
                r.push(o[a.id]);
            } else {
                o[a.parent_id] = o[a.parent_id] || {};
                o[a.parent_id].children = o[a.parent_id].children || [];
                o[a.parent_id].children.push(o[a.id]);
            }
        });
        return r;
    }(data, null),
    sorted = tree.reduce(function traverse(r, a) {
        return r.concat(a.data, (a.children || []).reduce(traverse, []));
    }, [])

console.log(sorted);
console.log(tree);
let tempArray=[1, 2, 3, 4];
console.log(">>>>>>>>>>SUM IN REDUCE ARRAY>>>>>>>>",tempArray.reduce((a, b) => a + b, 0))

let numbers = [4, 13, 27, 0, -5]; // Get max value of an array in Javascript

var tempdata=Math.max.apply(null, numbers); 
console.log(">>>>>>>>>>MAX >>>>>>>>",tempdata)

let arr = [ 2, 3, 5, 8, 4 ];
let values = [ 2, 4 ];

arr = arr.filter(item => values.indexOf(item) === -1);
console.log(arr);

/*
	Output: [ 3, 5, 8 ]
*/

const arr1 = [obj1, obj1];
const arr2 = [obj1, obj2];
const arr3 = [obj1, obj3];

// const arraysEqual = (a1, a2) =>{
//     a1.length === a2.length && a1.every((o, idx) => ObjectsEqual(o, a2[idx]));
// } 

// console.log(arraysEqual(arr1, arr2)); // true
// console.log(arraysEqual(arr1, arr3)); // false
var assert = require('assert');
var hash = require('object-hash');

var obj1 = {a: 1, b: 2, c: 333},
    obj2 = {b: 2, a: 1, c: 444},
    obj3 = {b: "AAA", c: 555},
    obj4 = {c: 555, b: "AAA"};

var array1 = [obj1, obj2, obj3, obj4];
var array2 = [obj3, obj2, obj4, obj1]; // [obj3, obj3, obj2, obj1] should work as well

// calling assert.deepEquals(array1, array2) at this point FAILS (throws an AssertionError)
// even if array1 and array2 contain the same objects in different order,
// because array1[0].c !== array2[0].c

// sort objects in arrays by their hashes, so that if the arrays are identical,
// their objects can be compared in the same order, one by one
var array1 = sortArrayOnHash(array1);
var array2 = sortArrayOnHash(array2);

// then, this should output "PASS"
try {
    assert.deepEqual(array1, array2);
    console.log("PASS");
} catch (e) {
    console.log("FAIL");
    console.log(e);
}

// You could define as well something like Array.prototype.sortOnHash()...
function sortArrayOnHash(array) {
    return array.sort(function(a, b) {
        return hash(a) > hash(b);
    });
}

var data = [{ depth: 0, id: "f35vz2f" }, { depth: 0, id: "f359354" }, { depth: 1, id: "f35e0b0", parent_id: "f359354" }, { depth: 2, id: "f35ji24", parent_id: "f35e0b0" }, { depth: 2, id: "f35rnwb", parent_id: "" }, { depth: 2, id: "f35ojh4", parent_id: "f35e0b0" }, { depth: 3, id: "f35lmch", parent_id: "f35ji24" }, { depth: 3, id: "f35kl96", parent_id: "f35ji24" }],
    tree = function (data, root) {
        var t = {};
        data.forEach(o => {
            Object.assign(t[o.id] = t[o.id] || {}, o);
            t[o.parent_id] = t[o.parent_id] || {};
            t[o.parent_id].children = t[o.parent_id].children || [];
            t[o.parent_id].children.push(t[o.id]);
        });
        return t[root].children;
    }(data, undefined);

console.log(tree);