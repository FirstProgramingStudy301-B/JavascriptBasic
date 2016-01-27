/*
 文字列をブラウザの機能を利用して表示する。
 
 */
  //現在の表示している。HTMLに表示する
    //<body>末尾に書き込む
    //alert("HTMLの末尾に要素を追加します。");
    document.write('<p style="Color:Blue">Hello World!</p><div id="p-last"></div>');
  //DOMツリーを利用した表示div配列を利用
    //alert("最初のDiv要素を変更します。");
    //getElementsByTagNameでDOMを取得
    var divNodes = document.getElementsByTagName("div");//{{{
      //div配列の最初のノードに対してHello World!!を表示させる。
    divNodes[0].firstChild.nodeValue = "Hello World!!";//}}}
    //alert("２番目の要素を変更します。");
    //getElementsByClassNameでDOMを取得し表示する。
    var divNodes = document.getElementsByClassName("df-value");//{{{
      //class="df-value"配列の2番目のノードに対してGet DOM by Classを表示させる。
    divNodes[1].firstChild.nodeValue = "Get by ClassName!";//}}}
    //alert("３番目の要素を変更します。");
    //getElementsByIdでDOMを取得
    var divNode = document.getElementById("df-N02");//{{{
      //class="df-value"配列の2番目のノードに対してGet DOM by Classを表示させる。
    divNode.firstChild.nodeValue = "Div Number 03!!";//}}}
    //innerhtmlの使用例
    alert("３番目の要素を変更します。");
    var lstElm = document.getElementById("p-last");
    lstElm.innerHTML = "<p>bodyタグの末尾に追加されます。</p>";


  //複数のElementを追加するテクニック

    //document.createDocumentFragment();
    // サンプル1: ul要素にli要素をまとめて追加（高速）
    //var ul = document.querySelector(‘#output’),
    //    fragment = document.createDocumentFragment();
    //
    //for ( var i = 0; i < data.length; i++ ) {
    //  var li = document.createElement(‘li’);
    //  li.textContent = data[i];
    //
    //  // いったんDocumentFragmentに追加する
    //  fragment.appendChild(li);
    //}
    //
    //// 最後にDocumentFragmentをul要素に追加する
    //ul.appendChild(fragment);
    //template document.createElemnt() を保存しておく

    //n = document.querySelector(‘.results’),
    //    clone = origin.cloneNode(true);
    //
    //// コピーした要素を更新する
    //var elements = clone.querySelectorAll(‘p’);
    //elements[0].textContent = ‘結果a’;
    //elements[1].textContent = ‘結果b’;
    //elements[2].textContent = ‘結果c’;

    //// 元の要素とコピーした要素を入れ替える
    //origin.parentNode.replaceChild(clone, origin);ii

    //複数スタイルの変更
    // 複数のスタイルの書き換え（高速）
    // style属性で一度にすべて指定する
    //element.setAttribute(‘style’, ‘background: gray; border: 1px solid gray;’);
