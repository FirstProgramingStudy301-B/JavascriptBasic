/*
 * Boolean型と比較演算子
 */
var a = 100,
    b = 150,
    y = 200
    X = '';
var xx = (X) ? '真': '偽';
console.log('xx' + xx);
var xxx = (X);
console.log(xxx);
Script_Abort();
//左辺より右辺が大きい,言い替えると「左辺値より大きい」
var z = (100 < 150);
//alert(z);   //真(true) と表示されます。
console.log(z);
//alert(typeof(z)); //boolean型
console.log(typeof(z));
/*
言語で予約されている。false,trueを変数として使用することができない。
var false = 20;
 SyntaxError Cannot use the kyeword 'false' as a variable name.
*/
z = false;
z = true;
//数値に変換されるので注意する
var x = (z + y);
//数値型の１に変換される
//alert(x);
console.log(x);
x = false + y;
//数値型の０に変換される
//alert(x);
console.log(x);
x = z + "どのように変化するかな？";
//文字列型のBoolenに変換される
console.log(x);
//左辺より右辺と等しいか小さい場合
var z = (y >= b);
//200 >= 150の場合左辺値以下の場合と読めるので「はい」真(True)
console.log(z);
//左辺値と右辺値が等しい場合
var z = (y == b);
console.log(z);
