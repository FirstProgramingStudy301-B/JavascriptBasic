/*
 * 配列　色々な型を保持できる
 * var arry = [1,"20",false];
 * var arry = new Arry(1,'MonDay',true);
 */
var a = [1,2,3,4,5];
for(var i=0 ; i < a.length;i++){
  console.log(a[i]);
}
//色々な型を混ぜて保持できる。
var fnc = function(){return 'OK';};
var a = [1,'ThuseDay',3,false,fnc];
//配列の大きさによる要素の参照
for(var i=0 ; i < a.length;i++){
  console.log((typeof(a[i])==='function')? a[i]():a[i]);
}
//添字による列挙　ブラウザによっては意図しない順番になるので注意する。
for(var i in a){
  console.log('添字['+i+']の要素は '+ a[i] + ' です。');
}
console.log('型は'+typeof(a)+" そのまま" + a);
