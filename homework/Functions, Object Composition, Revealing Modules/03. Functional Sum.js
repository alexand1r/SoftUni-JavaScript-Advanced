// function functionalSum(num) {
//     let f = (function() {
//         let total = 0;
//         return function sum(a) {
//             total += a;
//             sum.toString = () => total;
//             return sum;
//         }
//     })();
// }

function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = function() { return sum };
    return calc;
}