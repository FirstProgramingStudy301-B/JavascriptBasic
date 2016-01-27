/*
 * ３項演算子
 */
var a = 100,
    b = 150,
    y = '',
    X; 
//比較して代入する
var Z = (a < b)? b : a;
console.log('aとbを比較して大きほうは' + Z + 'です。')

//空文字の場合
var xx = (X) ? '真': '偽';
console.log('xx' + xx);
var xxx = (X);
console.log(xxx);
//Script_Abort(); //存在しない関数を呼び出してプログラムを停止
//JavaScriptの値の評価
/*
 * {}   オブジェクト  true
 * "hoge"   文字列  true
 * "  文字  false
 * 1  数値  true
 * -1   数値  true
 *  0   数値  false
 *  []  配列  true
 *  true  真偽値  true
 *  false   真偽値  false
 *  undefined   undefined   false
 *  null  null  false"
 */
var valAry = [{},"hoge","",1,0,[],true,false,undefined,null];
for(var i=0; valAry.length > i ;i++){
  var val = JSON.stringify(valAry[i]);
  console.log("評価の対象" + val + ": " + (valAry[i] ? true : false));
}
//論理演算子を使用した代入
/*
 * 【expr1 && expr2】
 * ・expr1 を false と見ることができる場合は、expr1 を返します。
 * ・そうでない場合は、expr2 を返します。
 * ・したがって、真偽値と共に使われた場合、 演算対象の両方が true ならば、&& は、true を返し、
 * 　そうでなければ、false を返します。
 *
 * 【expr1 || expr2】
 * ・expr1 を true と見ることができる場合は、expr1 を返します。
 * ・そうでない場合は、expr2 を返します。
 * ・したがって、真偽値と共に使われた場合、 演算対象のどちらかが true ならば、|| は、true を返し、
 * 　両方とも false の場合は、false を返します。
 */

var unVriant;
var res = unVriant || "変数unVriableが未定義のため本文書が代入";
console.log(res);

var obj01 = {id:10,name:"hogera"};
var obj03 = {};
var obj02;
function getId(obj){
  return obj && obj.id;
}
console.log(getId(obj01));
console.log(getId(obj02));
console.log(getId(obj03));
