
/*
 * 無名関数
 * var fnc = function (){.....処理.....};
 * 即時関数
 * (function (){.....処理....})();
 *
 */
console.log('-----  Start log   -----');
//事前知識として関数は変数に代入できる。
function MathSum(arg1,arg2){
  return arg1 + arg2;
}
var fnc01 = MathSum;
console.log('型は' + typeof(fnc01) + 'です。');
console.log(fnc01(10,9999));
//無名関数は式として代入する。注意：式なのでセミコロンで閉める。
var fnc02 = function (arg01,arg02){
  return arg01 + arg02;
};
console.log(fnc02(222,333));
//即時関数 これについても式であるのでセミコロンで閉める。再利用できない。
(function(num1,num2){
  console.log(num1 + num2);
})(100,888);
//クロージャを返す関数
function CreateCounter100(){
  var count = 100;
  return function(){
    console.log(count++ + 'Times!');
  };
}
var fncCounter = CreateCounter100();
fncCounter();
fncCounter();
fncCounter();
var fncCnt = CreateCounter100();
console.log('CreateCounterの再利用');
fncCnt();
fncCnt();
//２つを利用してクロージャClosure関数閉包
var Counter = (function(rate){
  var count = 0;
  var toatal = 0;
  return {
    increment: function(){
                 toatal = rate * ++count;
                 console.log("Add The Count");
               },
    show:     function(){
                console.log("Count is "+ toatal +" Times!");
              }
  };
})(40);
Counter.show();
Counter.increment();
Counter.show();
Counter.increment();
Counter.show();
