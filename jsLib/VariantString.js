/*
 文字列の宣言
 文字列型と演算子
 文字列型と文字列整形関数
 */
//divNodesはdivタグを配列化、Htmlで表示のために利用します。
// console.log(ffkb);
var a = '文字列Hallo';       //変数 a を宣言を代入します。
var b = "Hallow01 Hoge02";  //ダブル、シングルquatesionで

//連結
var c = a + b;
console.log(c);

var c = a -b;
console.log(c);       //NaN と表示される。Not a Numberの意味

//文字の部分取り出し
var c = a.charAt(0);
console.log(c);
var c = a.charAt(5);   //添字は0から始めているので1番目の添字は０になります。
console.log('6番目の文字：' + c);

//文字列の部分取り出し
var c = b.substring(0,1);
console.log(c);
var d = b.substring(1,4);     //2文字目から４文字目の範囲の文字列,第２引数を省略すると残り全部
console.log(d);
var c = b.substring(-1,3);    //第一引数は開始位置   マイナスは添字０と同等
console.log(c);
var c = b.slice(2,4);         //３文字目から４文字目の範囲の文字列,第２引数を省略すると残り全部
console.log(c);
var d = b.slice(-4);          //マイナスは文字列の末尾からの文字数
console.log(d);
var e = "23:33:15";
var array = e.split(':');
console.log(array[0] + '時' + array[1] + '分'+array[2]+'秒');

//文字列の連結
var f = array.join("：連結しました。");
console.log(array);
console.log(f);
//文字列のMatch
var g = "This is the pen".match(/PEN/i);     //該当しない場合はnull,正規表現を使用できる。
console.log(g);
//文字列の置換
var g = "This is the pen".replace('pen','PEN');
console.log(g);
//文字列の変換
var g = "this Is the pen.".toUpperCase();
console.log(g);
console.log(g.toLowerCase());   

//特殊文字
/*
  \n - ニューライン(改行文字)
  \f - フォームフィード
  \b - バックスペース
  \r - キャリッジリターン(復帰文字) \t - タブ文字
  \' - シングルクォート(')
  \" - ダブルクォート(")
  \\ - バックスラッシュ(\)
  \nnn - 8進数による文字コード指定(例えば "A" は "\101")
  \xnn - 16進数による文字コード指定(例えば "A" は "\x41")
  \unnnn - Unicode文字(例えば "あ" は "\u3042")
*/




//HtmlにJavaScriptで表示させます。
var divNodes = document.getElementsByTagName('div');
divNodes[2].firstChild.nodeValue = "ここはプログラムで表示しています。";
//alert(b);
//Console.logでデバッグが終了したことを表示する。
console.log('----------  End of Script  ----------');
