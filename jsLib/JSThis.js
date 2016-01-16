/*
 * this が示すもの
 * C＃と違い状況に応じてthisが示すオブジェクトが変化します。
 * この言語のウィークポイントでもあります。
 * １状況：オブジェクト内関数（メソッド)呼出
 * ２状況：グローバル関数呼出
 * ３状況：コンストラクタ呼出
 * ４状況：apply,call呼出
 */
//本教育ではコンストラクタ(new)を使用したオブジェクトの作成を使用する。
//コンストラクタは通常先頭文字を大文字で始める。
function MyObject01(){
  this.value = 10;
  this.showValue = function(){  //オブジェクト内メソッド
    console.log("---   コンストラクタ内   ---");
    console.log(this.value);
    console.log(this);
  }
}
var mObj = new MyObject01();
mObj.showValue();

function myMethod(){
    this.myValue = "グローバル関数";
    console.log("---   グローバル関数内---");
    console.log(this.myValue);
    console.log(this);
    console.log(window.myValue);

}
myMethod();
//関数内のネスト
function MyObject02(){
  this.value = 10;
  this.showValue = function(){  //オブジェクト内メソッド
    console.log("---   コンストラクタ内   ---");
    console.log(this.value);
    console.log(this);
    var _this = this;           //スコープチェーンで保持
    function innerShow(){
      console.log("---   コンストラクタ内関数の中関数   ---");
      console.log("this.value: "+this.value);   //Gloable?
      console.log(_this.value);
      console.log("this.myValue: " + this.myValue);  //先のmyMethod();が実行されている。
      console.log("window.innerShow: " + window.innerShow);
      console.log("this: " + this);        //window
    }
    console.log("---   1Times   ---");
    innerShow()                 //通常呼出Thisがwindowになる
    console.log("---   2Times   ---");
    innerShow.apply(this);      //関数内のThisで束縛する。
    
  }
}
var mObj = new MyObject02();
mObj.showValue();
