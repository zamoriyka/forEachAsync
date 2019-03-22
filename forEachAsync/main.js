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

var arr = [],
    firstArr = [],
    secondArr = [],
    thirdArr = [],
    sum = 0;
var i = 0;

// function forEachAsync() {
//     setTimeout((f) => {
//         function f(a, b) {
//             // for (var i = a; i <= b; i++) {
//             //     firstArr.push(i);
//             //     sum += i;
//             // }
//             if (a <= b) {
//                 firstArr.push(i);
//                 sum += i;
//                 f(1, 12);
//                 f(12, 20);
//             }
//             // f();
//             console.log(firstArr);
//         }
//     }, 2000)
// }
// forEachAsync()

// function forEachAsync(array, cb) {

//     function s(a, b) {
//         for (var i = a; i <= b; i++) {
//             secondArr.push(i);
//             sum += i;
//         }
//         console.log(secondArr);
//     }
//     setTimeout(s(0, 2999), 3000)
//     setTimeout(s(3000, 6000), 6000)
//     setTimeout(s(6001, 9000), 9000)
// }
// forEachAsync(arr, function(i) {})


// function test(a) {
//     const arr = [];
//     setTimeout(h, 2000)

//     function h() {
//         if (i <= a) {
//             arr.push(i++);
//             sum += i;
//             console.log(arr)
//             h()
//         }
//     }
//     h();
// }
// test(9);
// test(20);


// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 2000);
// }

var arr = [];
for (i; i <= 2999; i++) {
    arr.push(i)
}
console.log(arr)


function test(a) {
    // console.log(i++);

    if (arr.length <= i) return;
    setTimeout(() => {
        for (i; i <= a + 3000; i++) {
            arr.push(i)
        }
        console.log(arr)
    }, 3000)

    test();
}
test(0)

// var emojy = "😁";
// console.log(emojy);

// console.log("💩");



// function f() {
//     for (var i = 1; i <= 1000; i++) {
//         firstArr.push(i);
//         sum += i;
//     }
//     console.log(firstArr);
// }

// function s() {
//     for (var i = 1000; i <= 1999; i++) {
//         secondArr.push(i);
//         sum += i;
//     }
//     console.log(secondArr);
// }

// function t() {
//         for (var i = 2000; i <= 2999; i++) {
//             thirdArr.push(i);
//             sum += i;
//         }
//         console.log(thirdArr);
// }

// function y() {
//     setTimeout(() => {
//         for (var i = 3000; i <= 3999; i++) {
//             thirdArr.push(i);
//             sum += i;
//         }
//         console.log(thirdArr);
//     }, 8000)
// }
// f();
// s();
// t();
// y();
