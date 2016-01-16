/*
 * 繰返し構文While do-while ControlSyntaxWhile.js
 *
 */
//while Statement ある条件の間処理を繰り返す。
//最初に条件判定
var i=0;    //スコープに注意しよう。
while(i < 5){
  console.log(i++ + '回目です。');
}
//do-while Statment ある条件に成るまで繰り返す。
//一回は繰返し処理を実行そのご条件判定
do{
  console.log(i + 'かいめです。');
}while(i++ < 10); //注意：セミコロンが必要になります。
//1〜22迄表示し3の倍数の場合数字の頭に「*」を付けなさい
