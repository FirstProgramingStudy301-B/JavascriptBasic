/* Postの基本操作
 *
 * POSTとGETメソッドとの相違点は、
 *
 * open()メソッドで「POST」と指定する。
 * setRequestHeader()メソッドでContent-Typeを指定する。
 * (このsetRequestHeader()は、必ずopen()の後で呼ぶ必要があります)
 * send()メソッドの引数に送信するデータを含める。
 * iPOSTとGETメソッドとの相違点は、
 *
 *  ◎ urlencode形式による送信
 *  まず、req.setRequestHeader()でPOSTデータの形式を指定する(ここではurlencode)。その後、senddataにurlencode形式のデータを入れて、req.send()で送信する。以下の例ではdata配列にdata['request'] = "save",data['data'] = "hogehoge"というようにPOST用のデータが格納されているものとする。
 *  req.setRequestHeader("content-type",
 *                           "application/x-www-form-urlencoded;charset=UTF-8");
 *      var senddata = "";
 *      for (name in data) {
 *        if (senddata != "")
 *          senddata += "&";
 *        senddata += name+"="+escape(data[name]);
 *      }
 *      req.send(senddata);               // Sending Request
 *  ◎ multipart/form-data形式による送信
 *  req.setRequestHeader()で設定するcontent-typeやsenddataに設定する形式がmultipart/form-dataであることを除けばurlencodedと同じ。multipart/form-data形式のデータを作成するのが、多少面倒。
 *
 *      boundary = "-----hoge";
 *      req.setRequestHeader("content-type",
 *                           "multipart/form-data; boundary="+boundary);
 *
 *      var senddata = "";
 *      for (name in data) {
 *        senddata += "--"+boundary+"\r\n"+
 *          "Content-Disposition: form-data; name=\""+name+"\"\r\n\r\n"+
 *          data[name]+"\r\n";
 *      }
 *      senddata += "--"+boundary+"--\r\n";
 *      req.send(senddata);               // Sending Request
 *
 */
// HTMLフォームの形式にデータを変換する
function EncodeHTMLForm( data ){
    var params = [];
    for( var name in data ){
        var value = data[ name ];
        var param = encodeURIComponent( name ) + '=' + encodeURIComponent( value );
        params.push( param );
    }
    return params.join( '&' ).replace( /%20/g, '+' );
}
var btn2 = document.getElementById('xhr-btn2');
btn2.onclick = function(){
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
    var data = {name:"hoge" ,age:15,hoby:"tennise"};
    xhr.open('POST','http://localhost:8888/chronology',true);
    // サーバに対して解析方法を指定する
    xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        var result1 = document.getElementById('xhr-result2');
        result1.value = xhr.responseText;
      }

    };
    // データをリクエスト ボディに含めて送信する
    xhr.send( EncodeHTMLForm( data ) );
};
