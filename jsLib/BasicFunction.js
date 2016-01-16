/*
 * 関数の宣言
 * 関数の戻り値
 */

console.log('------ scripting   -------');
//宣言より前に呼び出してみる
//func01();
//関数の宣言
function func01(){
  alert('func01');
}
//宣言より後に呼び出してみる
//func01();

//引数のある関数。
function func02(arg1,arg2){
  var value = arg1 + arg2;
  console.log(value);
}
//足し算をする関数func02を使う。
func02(100, 99);
//引数の数が多い場合
func02(1,2,3,4,5);
//引数の数が少ない場合
func02(100);
//意図しない引数を使用した場合 NaN(Not a Number)
func02(1000,'文字列');
//関数内の変数は外側のスコープから読むことはできない。
console.log(value);
