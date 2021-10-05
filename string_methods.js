// 1 - length

// 2- find a string in a string:
// indexOf(), lastIndexOf(), search()


// indexing:

var x = "D I V Y A N S" // 7 

// last index  = length - 1;

// indexOf('parameter', position) => find the index of first occurance of given text.

// if given text in string is not found return -1.

var str = " return quick quick quick  the brown fox jumps over the lazy dog ";

console.log(str.indexOf('quick'))
console.log(str.indexOf('quick', 40))


// lastIndexOf('parameter') => find the index of last occurance of given text in a string.

console.log(str.lastIndexOf('quick'));
console.log(str.lastIndexOf('quick', 7))
console.log(str.lastIndexOf('quick', 3))
console.log(str.lastIndexOf('quick', 14))

// search(\pattern\) => same as indexOf() // recives either pattern or word

// differenc in search and indexof()

// indexOf() can't recv pattern 
// search() can't take second argument

// /^b(a-z)n$/
// [a-z]
console.log(str.search('brown'))
console.log(str.search(/(b?)[a-z]{1,}[n]/))


// 3 - extract string part from a string:

// slice(), substring(), substr()