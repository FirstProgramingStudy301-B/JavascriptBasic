/*
  暗黙の型変換  ImplisitTypeConversion.js
  暗黙の評価もあるが、比較演算子も暗黙の比較演算子
  と厳密な型を比較する演算子がある。
  ＜厳密＞==,!==

*/
var val01 = 1,
    val02 = '1';
if(val01 == val02){
  console.log('同じ');
}else{
  console.log('違う');
}

console.log( (val01 == val02) ? "式で同じ" : "式で違う"  );
if(val01 === val02){
  console.log('厳密に同じ');
}else{
  console.log('厳密に違う');
}
console.log( (val01 === val02) ? "式で厳密に同じ" : "式で厳密に違う"  );
