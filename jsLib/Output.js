/*
 文字列をブラウザの機能を利用して表示する。
 
 */
  //現在の表示している。HTMLに表示する
    //<body>末尾に書き込む
    document.write('<p style="Color:Blue">Hello World!</p><div id="p-last"></div>');
  //DOMツリーを利用した表示div配列を利用
    //getElementsByTagNameでDOMを取得
    var divNodes = document.getElementsByTagName("div");//{{{
      //div配列の最初のノードに対してHello World!!を表示させる。
    divNodes[0].firstChild.nodeValue = "Hello World!!";//}}}
    //getElementsByClassNameでDOMを取得し表示する。
    var divNodes = document.getElementsByClassName("df-value");//{{{
      //class="df-value"配列の2番目のノードに対してGet DOM by Classを表示させる。
    divNodes[1].firstChild.nodeValue = "Get by ClassName!";//}}}
    //getElementsByIdでDOMを取得
    var divNode = document.getElementById("df-N02");//{{{
      //class="df-value"配列の2番目のノードに対してGet DOM by Classを表示させる。
    divNode.firstChild.nodeValue = "Div Number 03!!";//}}}
    var lstElm = document.getElementById("p-last");
    lstElm.innerHTML = "<p>bodyタグの末尾に追加されます。</p>";


