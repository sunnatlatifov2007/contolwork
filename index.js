// // let str = prompt("a number");
// // let number = parseFloat(str)
// // if(isNaN(number)){
// //     alert('mistake')
// // }else{
// //     let square = number ** 2;
// //     console.log(square);
// // }

// //
// // let a = Number(prompt("first number"))
// // let b = Number(prompt("second number"))
// // console.log((a + b) * 2);

// // полиндром

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 1 max

// let max = Math.max(...num)
// let min = Math.min(...num)
// console.log(max, min);

// // 2 reverse
// let reversednum = num.reverse();
// console.log(reversednum);

// // 3 sort по порядку
// const numbers = [5, 2, 8, 1, 9];

// numbers.sort((a, b) => a - b)
// console.log(numbers);
// // 4 общая сумма
// const numberss = [1, 2, 3, 4];

// let sum = 0;

// for (let i = 0; i < numberss.length; i++) {
//     sum+= numberss[i]
// }
// console.log(sum);

// // 5 массив с квадратичными значениями
// const numbe = [1, 2, 3, 4];
// let squares =[];

// for (let i = 0; i < numbe.length; i++) {
//     squares.push(numbe[i] * numbe[i])
// }
// console.log(squares);
// // 6 самое длинное слово в массиве
// let words = ["amir", "anas","sunnat", "damir"]

// let longestword = "";

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestword.length) {
//         longestword = words[i]
//     }
// }
// console.log(longestword);
// // 7 добавление ключа и его значение в обьект

// let obj = {name: "sunnat", age: 30}

// obj.city = "samarkand"
// obj.country = "uzbekistan"
// console.log(obj);

const products = [
     { id: 1, name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
     { id: 2, name: "Phone", price: 800, category: "electronics", rating: 4.7 },
     { id: 3, name: "Chair", price: 150, category: "furniture", rating: 4.2 },
     { id: 4, name: "Watch", price: 250, category: "accessories", rating: 4.0 },
     { id: 5, name: "Headphones", price: 100, category: "electronics", rating: 3.9 },
     { id: 6, name: "Sofa", price: 700, category: "furniture", rating: 4.3 },
    ];
    
     let electro = products.filter(product => product.category === "electronics")
     console.log(electro);
     
      
     let prohigher200 = products.find(product => product.price < 200)
     console.log(prohigher200);
     
     let rate = products.find(product => product.rating > 4)
     console.log(rate);
     
     let sortedproducts = products.sort((a, b) => b.price - a.price).map(product => product.name)
     console.log(sortedproducts);
     
     function indfurnituref (products){
        return products.filter(company => company.category === "furniture");
    }
    const furniture = indfurnituref(products);
    console.log(furniture);

    const updatedProducts = products.map(product => {
        let discountPrice;
        if (product.category === "electronics") {
          discountPrice = product.price * 0.9
        } else {
          discountPrice = product.price
        }
      
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          rating: product.rating,
          discountPrice: discountPrice
        };
      })
      console.log(updatedProducts);
         


      const dividedcategory = products.reduce((acc, product) => {

        if (!acc[product.category]) {
          acc[product.category] = [];  
        }
        acc[product.category].push(product);
        return acc;  
      }, {});
      
      console.log(dividedcategory);
      
      

    
    














