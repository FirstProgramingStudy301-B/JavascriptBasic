/*
 宣言がなぜ必要なのか？ローカルスコープ、関数変数
 文字列の宣言
 文字列型と演算子
 演算子の例
 */
//divNodesはdivタグを配列化、Htmlで表示のために利用します。
// console.log(ffkb);   //宣言をしていない変数 ffkb
var a;       //変数 a を宣言
console.log('aの型は' + typeof(a));
console.log("aの値は" + a);
//alert(a);   //アラートで変数aの中身を表示してみる
a = 'Hellow World!';
console.log('aの型は' + typeof(a));
console.log("aの値は" + a);

var b = 200; //宣言と同時に数値200で初期化する
console.log('bの型は' + typeof(b));
console.log("bの値は" + b);
z = 567888; //問題なく使用できる
//divNodes[0].firstChild.nodeValue = z;
a = 3.14;
console.log('aの型は' + typeof(a));
console.log("aの値は" + a);
//配列
var array = [1,2,3,4,5]
//添字で配列内の複数ある数値から任意の数値を選択(参照)できる。
//添字は０からlength 未満の数値で参照できる。
//＊保持できる値は数値型以外も保持できます。
console.log(array[2]);
console.log('配列の要素は' + array.length + '個です。');
console.log(typeof(array));
console.log(array);
console.log(array.toString());
//連想配列
//添字は：コロンの左側を使用します。
var asso = {'A':'Africa','Fish':1200,12:'FishBone'};
console.log('連想します' + asso['Fish']);
console.log('連想します' + asso[12]);
//Object
var divNodes = document.getElementsByTagName('div');
console.log('divNodes: ' + typeof(divNodes));
console.log('divNodes: ' + divNodes.toString());
console.log('divNodes: ' + divNodes);
//console.logは各ブラウザの独自実装のためnodeの中身が表示されます。
console.log(divNodes);
//配列
//
divNodes[2].firstChild.nodeValue = "aの値は" + a;
//alert(b);
//Console.logでデバッグが終了したことを表示する。
console.log('----------  End of Script  ----------');
