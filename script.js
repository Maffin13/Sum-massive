let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function sum(x){
   let a = 0;
   for(let i = 0; i < x.length; i++)
      {a = a + x[i]}
      console.log(a);
      return a;
   }
   
console.log(sum(num));
