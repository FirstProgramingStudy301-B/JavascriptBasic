/*
 * クラスの宣言と使いかた。   PrototypeClass.js
 * C++やJava,C#と比べて純粋なオブジェクト指向言語とは違いがある。
 * Javascriptはプロトタイプ言語
 * Private,Publicのアクセス制御が難しいが関数型のクロージャが使えるので
 * 現在正解はないがここでは基礎的なプロトタイプを使用したクラス宣言を学ぶ
 */
//クラスの宣言 その１
//クラスの宣言と言うよりコンストラクタを宣言する。
function Class001( age, name){
  this.age = age;
  this.name = name;
  this.getAge = function(){
    return this.age;
  }
}
var alian001 = new Class001(11,'alian');
// 1.  alian001 = {}
// 2.  コンストラクタを実行しそのthisのプロパティーをコピーする。
console.log(alian001.age);
console.log(alian001.name);
console.log(alian001.getAge());
console.log('---- Alian End ---');
//明示的にthisの代わりを返すコンストラクタ
function Class002( age, name){
  this.age = age;
  this.name = name;
  this.getAge = function(){
    return this.age;
  }
  var testThis = {};
  testThis.name = '明示的なThisの名前のObjct';
  return testThis;
}
var alian002 = new Class002(11,'alian');
console.log(alian002.name);   //何が表示されるかな？
console.log('---- 明示的Retern this!End ---');

//クラスの宣言 その２
function BasicClass01( age,name){
//  プライベートとパブリックの違いが重要
  this.age = age;
  //クロージャーを利用した。変数の隠蔽
  function createVriable(shimei){
    //var name = shimei;                //一時変数を使用する場合はnameを返す。
    return function(){ return shimei};
  }
  this.getName = createVriable(name); //課題1: 側時間数でコード量を減らしてください。
}

var basic001 = new BasicClass01(110,'hogere');
console.log(basic001.age);
console.log(basic001.name);
console.log(basic001.getName());     //変数の参照はできるが変更できない。
console.log('---  プライベート変数01 End  ---');


//クラスの宣言 その３
function BasicClass02( age,name){
// 促次関数でクロージャーを包み込みパブリックにする関数を返す。
  return (function(toshi,shimei){
    var name = shimei;
    var age = toshi;
    
    function _privateSetter(_name){
      name += ' +privateVariable: ' + _name;
    }
    return {
      getName: function(){return name},
      //setName: function(nm){name = nm}
      setName: function(nm){_privateSetter(nm)},
      getAge: function(){return age},
      addAge: function(num){return age += num}
    }
  })(age,name);
}

var basic002 = new BasicClass02(110,'hogere');
console.log(basic002.age);
console.log(basic002.name);
console.log(basic002.getAge());
console.log(basic002.addAge(10));
console.log(basic002.getAge());
console.log(basic002.getName());     //変数の参照はできるが変更できない。
basic002.setName('fooger');
console.log(basic002.getName());     //変数の参照はできるが変更できない。

console.log('---  プライベート変数02 End  ---');


//BasicPrototype

function BasicClass(name, age){
  this.name = name;
  this.age = age;
}
BasicClass.prototype.fnc01 = function(){ return this.name };
var tes01 = new BasicClass('testProto',210);  // new のもう一つの意味プロトタイプにはコンストラクタが存在する。
console.dir(tes01);
var tes02 = Object.create(tes01);
console.dir(tes02);
console.log('---  Object.create()  End---');

//ベストプラティックス
function BC001(name,age){
  var age = age;      //Private?
  this.name = name;   //Public?
}
BC001.prototype.setValue = function(name,age){
  this.age = age;
  this.name = name;
}
var tes01 = new BC001('Foo',12);
console.dir(tes01);
