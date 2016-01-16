/*
 * 戻り値のある関数 ReturnFunction.js
*/
console.log('----  start script  ----');

//関数の宣言
function func01(num01,num02){
  var sum = num01 + num02;
  return sum;
}
//関数を使う
var result = func01(100,55);
console.log(result);
//厳密な関数（引数チェック）
function func02(num01,num02){
  console.log('引数の数：'+arguments.length);
  //console.log(typeof(num01));
  if('number' !== typeof(num01)) return  null;
  if('number' !== typeof(num02)) return  null;

  return num01 + num02;
}
var res01 = func02(100,20,3,500);
console.log(res01);

//同じ構文は関数にまとめる。構造化プログラミングの基本
function isNumber(arg){
  return ('number' === typeof(arg))? true: false;
}
function func03(num01,num02){
  if(!isNumber(num01)) return null;
  if(!isNumber(num02)) return null;
  
  return num01 + num02;
}
console.log(func03(400,555));
