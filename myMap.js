// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
	var arrNew = [];
    for (var i = 0; i < arr.length; i++)
        arrNew.push(callback(arr[i], i, arr));
    return arrNew;
};
//  CODE INSIDE HERE   //


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
