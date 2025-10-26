const removeFromArray = function(arr, ...theArgs) {

    return arr.filter(item => !theArgs.includes(item));


    // my solution
    // for (const arg of theArgs) {
    //
    //     for (const item of arr) {
    //
    //         let i = arr.indexOf(arg);
    //         if (arr.includes(arg)) {
    //             arr.splice(i, 1);
    //         }
    //
    //     }
    //
    // }
    // return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
