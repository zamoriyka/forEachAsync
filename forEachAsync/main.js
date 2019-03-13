var arr = [],
    firstArr = [],
    secondArr = [],
    thirdArr = [],
    sum = 0;

for (var i = 1; i <= 10000; i++) {
    arr.push(i);
    sum += i;
}

console.log(arr)

function forEachAsyncy(array, callback) {
    return new Promise(resolve => {
        array.forEach(() => {
            setTimeout((callback) => {
                resolve(array);
            }, callback)
        })
        for (var i = 1; i <= 1000; i++) {
            firstArr.push(i);
            sum += i;
        }
        for (var i = 1000; i <= 1999; i++) {
            secondArr.push(i);
            sum += i;
        }
        for (var i = 2000; i <= 2999; i++) {
            thirdArr.push(i);
            sum += i;
        }
    })
}

forEachAsyncy(arr, 4000)
    .then(() => { console.log(firstArr) })
    .then(() => { console.log(secondArr) })
    .then(() => { console.log(thirdArr) })

forEachAsync(array, function() {
    return firstArr;
}).then(function() {
    console.log(arr)
})