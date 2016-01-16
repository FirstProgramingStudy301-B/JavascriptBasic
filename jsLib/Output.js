/*
 文字列をブラウザの機能を利用して表示する。
 
 */
//現在の表示している。HTMLに表示する
  //末尾に書き込む
  document.write('<p style="Color:Blue">Hello World!</p>');
  //DOMツリーを利用した表示div配列を利用
  var divNodes = document.getElementsByTagName("div");
  //console.log(divNodes);
  //div配列の最初のノードに対してHello World!!を表示させる。
  divNodes[0].firstChild.nodeValue = "Hello World!!";
//アラートダイアログを表示する。
  alert("Hello Dialog!!"); //シングル・ダブルコーテーションで囲む
//ブラウザのデバッグコンソールを利用する。
  console.log('Hello Console.log!');

//Console.logでデバッグが終了したことを表示する。
console.log('----------  End of Script  ----------');
