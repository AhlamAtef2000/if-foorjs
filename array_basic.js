// 1-Write a function to find the largest element in an array.


function findlargest(arr) {
    let largest=arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];  
            }
}return largest;

}console.log(findlargest([4, 2, 8, 6])); 
console.log(findlargest([90,12,3]))



// 2-Write a function to find the smallest element in an array.
function FindSmallestElement(arr) {
    let smallest = arr[0];  

    for (let x = 1; x < arr.length; x++) {  
        if (arr[x] < smallest) {
            smallest = arr[x];  
        }
    }

    return smallest; 
}

console.log(FindSmallestElement([2, 4, 1, 9]));  



// 3-Write a function to find the sum of all elements in an array.
        
        function sum(arr) {
            let sum=0;
            for(let i=0;i<arr.length;i++){
            sum +=arr[i];
            }
            return sum;
        }
        console.log(sum([1,4,5,7]) )



// 4-Write a function to find the average of all elements in an array.

function averageArray(arr) {
    let sum = 0;  
    let count = arr.length;  

    for (let i = 0; i < count; i++) {
        sum += arr[i];  
    }


    let average = sum / count;
    return average;  
}

console.log(averageArray([2, 4, 1, 9]));  
console.log(averageArray([5, 5, 5, 5]));  
// 5-Write a function to find the median of all elements in an array. floor اقرب عددصحيح

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    return arr.length % 2 === 0 ? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2 : arr[Math.floor(arr.length / 2)];
}

console.log(findMedian([2, 4, 1, 9]));  // 3
console.log(findMedian([10, 20, 30]));  // 2


// 6-Write a function to remove all duplicates from an array.
//trouble ...بتجيب كل العناصر الي بالarray
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// اختبار الدالة
console.log(removeDuplicates([2, 4, 1, 9, 2, 4]));  // [2, 4, 1, 9]
console.log(removeDuplicates([10, 20, 30, 30, 20]));  // [10, 20, 30]
console.log(removeDuplicates([1, 1, 1, 1]));  // [1]



// 7-Write a function to sort an array in ascending order.
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);  //  a b دالة  لترتيب الأرقام بشكل تصاعدي
}

// اختبار الدالة
console.log(sortArrayAscending([5, 3, 8, 1, 4]));  // [1, 3, 4, 5, 8]
console.log(sortArrayAscending([10, 20, 5, 15]));  // [5, 10, 15, 20]
console.log(sortArrayAscending([2, 7, 3, 9, 1]));  // [1, 2, 3, 7, 9]

// 8-Write a function to sort an array in descending order.
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);  // دالة المقارنة لترتيب الأرقام بشكل تنازلي
}

// اختبار الدالة
console.log(sortArrayDescending([5, 3, 8, 1, 4]));  // [8, 5, 4, 3, 1]
console.log(sortArrayDescending([10, 20, 5, 15]));  // [20, 15, 10, 5]
console.log(sortArrayDescending([2, 7, 3, 9, 1]));  // [9, 7, 3, 2, 1]


// // 9-Write a function to shuffle the elements of an array randomly.
// دالة shuffle تُستخدم لخلط (ترتيب عشوائي) عناصر المصفوفة، مما يعني تغيير ترتيب العناصر بشكل عشوائي في المصفوفة
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;  
}


console.log(shuffleArray([1, 2, 3, 4, 5])); 
console.log(shuffleArray([10, 20, 30, 40]));  
console.log(shuffleArray([2, 7, 3, 9]));  // مثلاً [9, 2, 7, 3] (النتيجة عشوائية)

// let mfrinends=["Ali","Alma","layana"];
// console.log(`Hello ${mfrinends[0]}`)
// console.log(mfrinends[2][2])
//trouble.تأخد كل العناصر فيarray