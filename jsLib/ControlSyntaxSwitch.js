/*
 * 条件分岐 Switch    ControlSyntaxSwitch.js
 *
 */
//

var value=[1,3,'test',false];
var value={a:1,b:12};
var value = function(){return null;};
console.log(typeof(value));
switch(typeof(value)){
  case 'string':
    alert('文字列型');
    break;
  case 'number':
    alert('数値型');
    break;
  case 'undefined':
    alert('未定義');
    break;
  case 'boolean':
    alert('ブーリアン型');
    break;
  case 'NaN':
    alert('Not a Number');
    break;
  case 'null':
    alert('何も無いよ');
    break;
  case 'object':
    alert('配列型,もしくは連想配列');
    break;
  case 'function':
    alert('関数です');
    break;
  default:
    alert('うーん分からない型');
    break;
}
