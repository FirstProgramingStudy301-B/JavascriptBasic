/*
 数値型と演算子
 演算子の例
 */

var a=100;       //変数 a を宣言
var b = 3;       //変数 b を宣言

//計算するための演算子
//加算
var z = a + b;
alert(z);
//減算
var z= a - 3;
alert(z);
//乗算
z = a * b;
alert(z);
//除算
z = a / b;
alert(z);
//剰余算
z = a % b;
alert(z);
//typeof標準関数
alert(typeof(z));   //number と表示されます。
//加算代入演算子
a = a + 5;
alert(a);
//先ほど+5したので-5し元の数値100に戻す。
a = a - 5;
a += 5;
alert(a);
//減算代入演算子
a -= 5;
alert(a);
//乗算代入演算子
b *= 10;
//除算代入演算子
b /= 10;
alert(b);
//剰余算代入演算子
a %= 6;
alert(a);
