//===================Array Methods============
const _ =require('lodash');
const numbers = [1, 2, 3, 4, 5];
console.log(_.shuffle(numbers)); // Shuffles the arrayn
console.log(_.first(numbers));
console.log(_.last(numbers))

const arr1=[1,2,false,3,'',5];
console.log(_.compact(arr1))// remove the false and empty element from array
console.log(_.difference([1,2,3,4,5],[5,6,4,8]));// 
var characters=[
    {'name':'ankush','age':20,'blocked':'false'},
    {'name':'john','age':15,'blocked':'true'},
    {'name':'pebbles','age':50,'blocked':'false'}
];
console.log(_.findIndex(characters,function(chr){
    return chr.age<20;
}));
console.log(_.findIndex(characters,{'age':50}));
console.log(_.findIndex(characters,{'blocked':'true'}))
console.log(_.findLastIndex(characters,{'age':50}));

//      _.first();

//const arr2=[11,2,5,6,8,9];
console.log(_.first([11,2,5,6,8,9],function(num){
    return num<5;

}));
console.log(_.flattenDeep([1,[2],[3,[4]]]));
console.log(_.flatten([1,[2],[3,[4]]]));

// zip object

console.log(_.zipObject(['fred','barney','banana'],[30,40,50]));
console.log(_.intersection([1,2,3,4,5],[5,2,1,3,7,9],[3,5,7,8]));
console.log(_.last([5,2,10,20]));
console.log(_.lastIndexOf([5,8,7,8,60],8));
const arr3=[1,2,3,1,2,3];
console.log(_.pull(arr3,2,3));
console.log(_.range(4));
console.log(_.range(1,10));
console.log(_.range(0,20,7))
var arr4=[1,2,3,4,5,6];
var evens=_.remove(arr4,function(num){
    return num%2===0;
});
console.log(arr4);
console.log(evens);