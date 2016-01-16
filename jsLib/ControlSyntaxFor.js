/*
 * 繰返し制御構文For  ControlSyntaxFor.js
 * For文　示された回数繰返し処理することができる。
 * for(var i=0; i < 10 ; i++){...処理...};
 */
//0から９まで10回繰り返す。
console.log('--- 10回繰り返す ---');
for(var i=0; i<10;i++){
  console.log(i + '回目'); //数字の０も１個と数える
}
console.log('--- 途中で止める ---');
//途中でやめるfor文
var i=0;
for( ; i<100 ; i++){
  console.log(i + '回目');
  document.write(i + '回目<br>');
  if(i === 8) break;
}
console.log(i + '回目で止めました');
//処理をスキップする
console.log('--- 処理をスキップ ---');
for(var j=1; j< 21;j++){
  if( j % 2 === 0) continue;
  console.log(j + '回目です。');
}
//構文の入れ子繰返し制御構文内に条件分岐構文を記載
//構文(Statementステートメント)は入子にできる。
for(var j=49;j<78;j++){
  if(j % 2 === 0){
    console.log(j + 'は偶数です。');
  }else{
    console.log(j + 'は奇数です。');
  }
}
