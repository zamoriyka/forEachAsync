const counter = 0;
for (var i = a; i <= 9000; i++) {
    secondArr.push(i);
    sum += i;
}

function forEachAsync(array) {
    if (array.lenght <= counter) return;
    // function s(a, b) {
    //     for (var i = a; i <= counter+3000; i++) {
    //         secondArr.push(i);
    //         sum += i;
    //     }
    //     console.log(secondArr);
    // }
    // setTimeout(s(0, 2999), 3000)

    counter += 3000;
    console.log(counter)
    return forEachAsync;
}
forEachAsync(arr)
    ///

function forEachAsync(array, cb) {

    function s(a, b) {
        for (var i = a; i <= b; i++) {
            secondArr.push(i);
            sum += i;
        }
        console.log(secondArr);
    }
    setTimeout(s(0, 2999), 3000)
    setTimeout(s(3000, 6000), 6000)
    setTimeout(s(6001, 9000), 9000)
}
forEachAsync(arr, function(i) {})

///
function forEachAsync(array, cb) {
    setTimeout(f, 2000)

    function f() {
        for (var i = 1; i <= 3000; i++) {
            firstArr.push(i);
            sum += i;
        }
        console.log(firstArr);
    }
    setTimeout(s, 4000)

    function s() {
        for (var i = 3000; i <= 6999; i++) {
            secondArr.push(i);
            sum += i;
        }
        console.log(secondArr);
    }

    setTimeout(() => {
        for (var i = 6000; i <= 10000; i++) {
            thirdArr.push(i);
            sum += i;
        }
        console.log(thirdArr);
    }, 6000);

}
forEachAsync(arr, function(i) {})