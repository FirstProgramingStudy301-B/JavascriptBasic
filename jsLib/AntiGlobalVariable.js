/*
 * グローバル変数の汚染を防ぐテクニック
 * クラスが無いがためいろいろな方法が存在する。
 */

//名前空間をオブジェクトで作成する。
var FJC = {};
FJC.UTILITY = {
  ShowObject:function(obj){
    this.objName = obj || this;
  },
};

FJC.UTILITY.ShowObject.prototype.show = function(name){
    var t = eval(name);
    console.log( name + ': ' + t);
}
FJC.UTILITY.ShowObject.prototype.dir = function(name){
    var t = eval(name);
    console.dir(this);
}

FJC.tet = new FJC.UTILITY.ShowObject();

FJC.tet.show('this');
FJC.tet.dir('this');
