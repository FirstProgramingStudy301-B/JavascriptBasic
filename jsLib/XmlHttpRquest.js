/*
 * 他のぺージを読み込みます。
 * 基本的操作
 */

var btn2 = document.getElementById('xhr-btn2');
btn2.onclick = function(){
    //RadioButton作成クロージャー
    function createToHtml(){//{{{
      var count=0;
      return function(dataObject){
        var radioTag = document.createElement('input');
        radioTag.type = 'radio';
        radioTag.name = 'radioButton' + count++;
        
        if(dataObject){
          radioTag.value = "true";
          radioTag.checked = true;
          radioTag.disabled = true;
        }else{
          radioTag.value = "false";
        }
        return radioTag;
      };
    }//}}}
    var xhr = new XMLHttpRequest();
    //xhr.open('GET', location.href, true);
    xhr.open('GET', "http://localhost:8888/index", true);
    //OnReadyStateChangeは非同期コールババック処理
    xhr.onreadystatechange = function(){
      //HttpServerから取得した場合の処理
      if (xhr.readyState === 4 && xhr.status === 200){//{{{
        var result2 = document.getElementById('xhr-result2');
        //取得した生のデータを<textarea>で表示
        result2.value = xhr.responseText;
        var data = new Array();
        var jsonData = JSON.parse(xhr.responseText);
        //配列に入れ直す
        for(var item in jsonData ){
          data.push(jsonData[item]);
        }
        //console.log(data);
        var objectToHtml = createToHtml(); 

        var divNodes = document.getElementsByTagName('div');
        for(var i=0; i<divNodes.length; i++){

          divNodes[i].firstChild.nodeValue = data[i].name + "Count: " + data[i].count;
          divNodes[i].appendChild(objectToHtml(data[i].result));
        }
      }//}}}
      //testようにローカルからJSONデータを取得した場合はxhr.statusは0になります。
      if (xhr.readyState === 4 && xhr.status === 0){//{{{
        var result2 = document.getElementById('xhr-result2');
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        result2.value = xhr.responseText;
      }//}}}
    };
    //GETの場合はnullでServerの接続
    xhr.send(null);
};
