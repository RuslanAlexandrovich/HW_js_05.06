// let num = +prompt("Первое число");
// let num2 = +prompt("второе число");
// let num3 = num2-num;
// for(num3; num3>0; num3--){
//     num=num+num2--;

//     console.log(num);
// }


// function NOD (x, y) {
// 	if (y > x) return NOD(y, x);
//     console.log(x,y);
// 	if (!y) return x;
//     console.log(x,y);
// 	return NOD(y, x % y);
// }
// console.log(NOD(+prompt("numb1"), +prompt("numb2")));



// let numb = +prompt("Введите число");
// let number = 0;
// for(number; number<numb; number++){
//     if (numb%number==0)
//     console.log(number)
//     }


// let i = 1;
// let num = prompt("Число");
// // console.log(num.length);
// for(i; i<=num.length; i++){
//     if(i==num.length)
//     console.log(i);
// }



// do{
//         var a = confirm("Посчитаем?");
//         if (a == true){

//                 var num1 = +prompt("Первое число");
//                 var sym = prompt("+  -  *  /");
//                 var num2 = +prompt("Второе число");
//                         switch (sym) {
//                                 case "+": alert(num1+num2)
//                                         break;
//                                 case "-": alert(num1-num2)
//                                         break;
//                                 case "*": alert(num1*num2)
//                                         break;
//                                 case "/": alert(num1/num2)
//                                         break;
//                         }      
//                 }else{
//                         alert ("Пока!")
//                 }
//         }
//         while (a == true)



// var num1 = prompt("Введите число");
// var num2 = +prompt("На сколько сместить?");
// console.log(num1.substring(num2)+(num1.substring(0,num2)));




// do{
//         var a = confirm("Понеділок");
//         if (a == true){a=confirm("Вівторок")};
//         if (a == true){a=confirm("Середа")};
//         if (a == true){a=confirm("Четвер")};
//         if (a == true){a=confirm("П'ятниця")};
//         if (a == true){a=confirm("Субота")};
//         if (a == true){a=confirm("Неділя")
//         } else {
//                 alert("Допобачення!")
//         }
// }while(a==true)


// var i =1;
// var j =2;
// for(i; i<=10; i++){
//         console.log(`${j} x ${i} = ${j*i}`)
//         }
//         for(j; j<=10; j++){
//                 console.log(`${j} x ${i} = ${j*i}`)
//         }



// var j =2;
//                 for(j; j<=9; j++){
// var i =1;                        
//                 for(i; i<=10; i++){
//                         console.log(`${j} x ${i} = ${j*i}`) 
//                         }
                       
//                 }  



// let min = 0;
// let max = 100;
// let yesOrNo = false;
// alert("Загадайте число от 0 до 100")

// while (!yesOrNo) {
//   let maby = Math.floor((min + max) / 2);

//   let answer = prompt("Это число " + maby + "? (Да/Нет)").toLowerCase();

//   if (answer === "да") {
//     alert("Ура! Я угадал число.");
//     yesOrNo = true;
//   } else if (answer === "нет") {
//     let question = prompt("Это число больше или меньше, чем " + maby + "? (Больше/Меньше)").toLowerCase();

//     if (question === "больше") {
//       min = maby + 1; 
//     } else if (question === "меньше") {
//       max = maby - 1;
//     }
//   } else {
//     alert("Пожалуйста, ответьте 'Да' или 'Нет'.");
//   }
// }