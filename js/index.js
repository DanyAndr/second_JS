//for (let i=101; i >=1; i--) {
//    if (i%2==1){
  //      console.log(i);
    //}
    
//}

//let i=0
//while (i<=100) {
  //  console.log(i);
    //i++
//}

//let i = 0
//do{
  //  console.log(i);
    //i++;
//}while(i<=100)

// let num = parseFloat(prompt('Enter a number'));
// while( Number.isNaN(num) ) {
//     alert('Please enter a number');
//     num = parseFloat(prompt('Enter a number'));
// }


let productsNames=[];
productsNames.push('Tesla X');
productsNames.push('Chevy Corvette');
productsNames.push('LC Prado');
console.log(productsNames[1]);

productsNames[0]= 'Tesla Roadster';
console.log(productsNames[0]);
productsNames[3]='LADA 2101';
console.log('length: '+ productsNames.length);

// for(let i=0; i<productsNames.length; i++){
//     console.log(productsNames[i]);
// }


productsNames[10] = 'Hummer';
console.log('length: ' + productsNames.length);


// productsNames.forEach(function (element, idx) {
//     if (idx%2===0) {
//     console.log(idx, element);
//     }
// });

// productsNames.forEach((element, idx) => {
//     if (idx % 2 === 0) {
//          console.log(idx, element);
//      }
// })


let arr = [100, 42, 37, 98, 56, 99];

function sumOddEls(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            total += arr[i];
        }
    }
    return total;   
}


function modernSumOddEls(arr) {
    return arr.filter( (el, idx ) => idx % 2 )
       .reduce(  (acc, el) => acc + el, 0);
}

console.log(sumOddEls(arr));
console.log(modernSumOddEls(arr));












