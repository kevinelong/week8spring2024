
// in1020(12, 99) → true
// in1020(21, 12) → true
// in1020(8, 99) → false
// Given 2 int values, 
// return true if either of them is in the range 10..20 
// inclusive.

// function in1020(a, b){
//     function inRange(n){
//         return n >= 10 && n <= 20;
//     }
//     return inRange(a) || inRange(b);
// }

// function in1020(a, b){
//     return a >= 10 && a <= 20 || b >= 10 && b <= 20;
// }

in1020 = (a, b) => (a >= 10 && a <= 20) || (b >= 10 && b <= 20)

// function in1020(a, b){

//     aResult = true;
//     if( a < 10){
//         aResult = false;
//     }else if( a > 20){
//         aResult = false;
//     }

//     bResult = true;
//     if( b < 10){
//         bResult = false;
//     }else if( b > 20){
//         bResult = false;
//     }
    
//     if(aResult){
//         return true;
//     }
    
//     if (bResult){
//         return true;
//     }

//     return false;

// }

