/*
 * 連想配列   AssociativeArray.js
 * var obj = { hoge: 'Hoge', foo: 'Foo'};
 * var obj = {};
 * obj.hoge = 'Hoge';
 * obj['foo'] = "F00";
 * var obj = new Object();
 * obj.hoge = "Hoge";
 * javascriptの場合連想配列が言語構造の基本になっている。
 */
//配列同様色々な型を保持できる。
//配列との違いは波括弧で囲む
var AssoArray = {Sun:'教会に行く',Mon:1,Tud:2,Sata:false};
for(var obj in AssoArray){    //Browserによっては順番に出てこない場合がある。
  console.log(AssoArray[obj]);
}
console.log('添字を使用して個別に参照する。');
console.log( AssoArray['Sun']);
console.log('型は'+typeof(AssoArray)+'そのまま：'+AssoArray);
