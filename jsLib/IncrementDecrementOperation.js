/*
 * インクリメント　デクリメント演算子   IncrementDecrementOperation.js
 * 前置インクリメント　デクリメント
 * 後置インクリメント　デクリメント
 */
//
//Increment 必ず数値が１個増える。数値型のみ
var x='100';
var f=++x; //文字列型にインクリメントすると、暗黙の変換
console.log('f: '+f);
var y='SunDay';
var f=++y; //これはどうなるのかな？
console.log('f: ' + f);
var i=100;
var a = i++;
var b = ++i;
console.log('a: '+a);
console.log('b: '+b);
//Decrement 必ず数値が１個減る。数値型のみ
var i=0;
var a = i--;
var b = --i;
console.log('a: '+a);
console.log('b: '+b);
//ステートメントが終了してからインクリメント・デクリメントするのが後置
//ステートメントを実行前にインクリメント・デクリメントするのが前置
