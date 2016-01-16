/*
 * JavaScriptのオブジェクトの作成方法
 * 1. リテラル(直接)記述方法
 * 2. コンストラクタを使用した方法
 * 3. 文字列を変換しする方法
 *  (1) 暗黒魔術eval()関数
 *  (2) JSONから作成する方法
 */

//その前にリテラルとはソースコードに直接記述された変数や定数以外の値のこと。例：文字列、数値
var I = 1;
var I = "こんにちはWorld!";
//１．　これがオブジェクトです。
var objct = {myString:"I am Hoge",//{{{
              102: false,
              myFunc: function(){return this.myString;},
}
//オブジェクトのプロパティー、メッソッドのアクセス
//配列の添字参照でアクセス
console.log("------  配列、添字参照アクセス   -------");
console.log(objct["myString"]);
console.log(objct[102]);
console.log(objct["myFunc"]());
//ドット表記でアクセス
console.log("------  ドット表記でアクセス -------");
console.log(objct.myString);
//console.log(objct.102); //NG
console.log(objct.myFunc());
//
//全てのプロパティーの添字を配列にする。
function listAllProperties(o){
    var objectToInspect;
    var result = [];
    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }
    return result;
}
//Objectのプロパティーを表示する。
function showProperty(obj){
  //for .. in ..で全てのプロパティーにアクセス
  console.log("------  全てのプロパティー添字表示 -------");
  for(var prop in objct){
    console.log(prop + 'の値は' + objct[prop]);
  }
  console.log("------  prototype以外のプロパティー添字表示 -------");

  var notPrototype = Object.keys(obj);
  console.log(notPrototype);
  console.log("------  全てのプロパティー添字表示 -------");
  var allProperty = Object.getOwnPropertyNames(obj);
  console.log(allProperty);
  //
  console.log(listAllProperties(obj));
}
showProperty(objct);
//リテラルオブジェクトの中身
console.log('---   リテラルオブジェクトの中身   ---');
console.dir(objct);//}}}
//２．　プロトタイブトは同じ関数をオブジェクトとして保持したくない。メモリーは有限
// NG //objct.prototype.med = function(){return "共通の振舞";};
function MyFunction(){//{{{
  this.myString = "I am Foo!";
//NG  this.102 = false;
  this.OneHndledTow = false;
  this.myFunc = function(){return this.myString;};
}
//プロトタイプを追加
MyFunction.prototype.pName='Prototype';
MyFunction.prototype.pFunc= function(){return this.pName;};
//new 演算子でオブジェクトを作成
var objct = new MyFunction();
var objProto = objct.__proto__;
//  showProperty(objProto);
console.dir(objProto);
console.log(objct);//}}}
//３.　文字列からオブジェクトを作成する。
//      外側の波カッコをシングルコーテーションで囲みプロパティー名はダブルクォーテーションで囲む
var strs = '{"name":"my string Obj","number01":501,"myFunc":"function(){return this.number01;}"}';
function funcReviver(key,value){
  if(typeof value === 'string'){
    var re = new RegExp("function");
    if(value.match(re)){
      eval("var tmp = " +  value);
      return tmp;
    }      
  }
  return value;
}
var myObj = JSON.parse(strs,funcReviver);
showProperty(myObj);
console.log(myObj);
console.log(myObj.myFunc());

console.log(JSON.stringify(myObj));

console.dir(this);

//JavaScriptのオブジェクトの作成方法
//４．Object.create()関数で作成する。
//５．逐次代入する方法
var myObj = {};
myObj.myName = "Direct Insert";
myObj.Say = function(){return this.myName;};
console.log(myObj.Say());

