// Home work 
// task-1
// tek ededler
// for(let i=0; i<100; i++){
//     if (i%2-1==0)console.log(i);
// }

// // cut ededler
// for(let i=0; i<100; i++){
//     if (i%2==0)console.log(i);
// }

//   cut ededler
// let a=8
// for(let i=0;i<a; i++){
// let result=2*i;
// console.log(result);
// }

// tek ededler
// let a=30
// for(let i=0; i<a;i++){
//     let result=2*i+1;
//     console.log(result);
// }


// task-2
// let word="salam"
// console.log(word.replace("l","t"));

//  task-3
// bunu internetdən tapdım oxşadıb yazdım
// let a = [1, 2, 3, 4];
// let b = [1, 2, 3, 4, 5];
// let deference=b.filter(x=>a.indexOf(x) ===-1);
// console.log(deference);

// task-4
// bunu videoya baxıb analiz edib yazdım
// let credit = Number(prompt("mebleg daxil edin"))
// let month = Number(prompt("nece ayliq olsun?"))
// let fullAmount=credit+(credit*15/100);
// if (!isNaN(fullAmount) && !isNaN(month)) {

//     let residualPart = 0;
//     for (let i = 0; i < month; i++) {
        
//         let monthlyPayment = parseInt(fullAmount/month);
//         if (i + 1 == month) {
//             console.log(i + 1 + "-" + "sonuncu ayin odenisi-" + (fullAmount - residualPart));
//         } else {
//             console.log(i + 1 + "-ci ayin odenisi" + " " + monthlyPayment);
//             residualPart += monthlyPayment;
//         }
//     }
// }else{
//     alert("reqem daxil edin");
// }
