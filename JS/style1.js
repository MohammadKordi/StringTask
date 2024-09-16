// Code 1 
let str1 = "Mohammad";
let str2 = "Kordi";
let result = str1 + " " + str2;
console.log(result); 

// Code 2
let str = "JavaScript";
let length = str.length;
console.log(length); 

// Code 3
let st3 = "Programming";
let firstCharacter = st3.charAt(0);
console.log(firstCharacter); 

// Code 4
let str4 = "coding is fun";
let substring = str4.substring(0, 4); 
console.log(substring); 

// Code 5
let str5 = "cat";
let newStr = str5.replace(/a/g, "e"); 
console.log(newStr); 

// Code 6
let str6 = "javascript";
let uppercaseStr = str6.toUpperCase(); 
console.log(uppercaseStr); 

// Code 7
let str7 = "Apple,Banana,Orange";
let wordsArray = str7.split(","); 
console.log(wordsArray); 

// Code 8
let array = ["Hello", "World"];
let joinedString = array.join(" "); 
console.log(joinedString); 

// Code 9
let str9 = " Hello Horld ";
let trimmedStr = str9.trim(); 
console.log(trimmedStr); 

// Code 10
let str10 = "hello world";
let searchTerm = "world";
let exists = str10.includes(searchTerm); 
console.log(exists); 

// Code 11
function reversed(str11){
    return str11.split('').reverse().join('');
}
console.log(reversed("Mohammad"));

// Code 12  m عدد مرات تكرار حرف 
let string = "mohammad";
let charToCount = "m";
let count = string.split(charToCount).length - 1;
console.log(count); 

// Code 13 
let str13 = "racecar";
let isPalindrome = str13 === str13.split('').reverse().join('');
console.log(isPalindrome); 

// Code 14 بدل اول حرفين من كل كلمة بحرفين اكبر 
let str14 = "mohammad kordi";
let captel = str14.replace(/\b\w/g, char => char.toUpperCase());
console.log(captel); 

// Code 15  نوخذ اول رقمين بعد الفاصلة
let number = 1234.5678;
console.log(number.toFixed(2));

// Code 16  بطلع الارقام الموجودة في الجملة
let str16 = "There are 3 apples and 2 oranges";
let numbers = str16.match(/\d+/g); 
console.log(numbers); 

// Code 17 يتحقق من أن البريد الإلكتروني يحتوي على جزء قبل @، جزء بعد @، ونقطة 
function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email); 
}
let email = "example@email.com";
let isValid = isValidEmail(email);
console.log(isValid);

// Code 18   عشلن ابدل كلمتين ببعض
let str18 = "This is a bad word";
let censoredStr = str18.replace(/bad/g, "good"); 
console.log(censoredStr); 

// Code 19   Set نستخدم لإزالة الأحرف المكررة
let str19 = "aabbc";
let uniqueChars = [...new Set(str19)].join('');
console.log(uniqueChars); // Output: "abc"

// Code 20 
let str20 = "hello";
let sortedStr = str20.split('').sort().join(''); 
console.log(sortedStr); 

// Code 21   و العكس true عشان اقارن عدد احرف كل كلمة ,, اذا متساويات بعطيني 
function areAnagrams(str21, str22) {
    let normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(str21) === normalize(str22);
}
let result21 = areAnagrams("listen", "silent");
console.log(result21); 

// Code 22  لعكس ترتيب الكلمات
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' '); 
}
let sentence22 = "The quick brown fox";
let reversedSentence = reverseWords(sentence22);
console.log(reversedSentence); // Output: "fox brown quick The"

// Code 23  للبحث عن الكلمة الأطول بين الكلمات
let sentence23 = "Web development is fascinating";
let longestWord = sentence23.split(' ').reduce((a, b) => a.length >= b.length ? a : b);
console.log(longestWord);

// Code 24
function isPalindrome24(str24) {
    const cleanedStr = str24.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome24("A man, a plan, a canal, Panama")); 

// Code 25 لحساب عدد مرات تكرار كل حرف
function charat(str25) {
    return Array.from(str25).reduce((freq, char) => 
        (freq[char] = (freq[char] || 0) + 1, freq), {});
}
let input25 = "mohammad al kordi";
console.log(charat(input25));

// Code 26
function replaceVowels(str) {
    let vowelMap = { a: 1, e: 2, i: 3, o: 4, u: 5 };   
    return str.replace(/[aeiou]/gi, function(match) {
    return vowelMap[match.toLowerCase()];
    });
}
console.log(replaceVowels("Hello World")); 
