/*インデントと改行の整理
スペースの統一(カンマ後、演算子周りなど)
命名規則(camelCase)
不要なVar→let/const
ブロックの家族性向上
alert関数は使用禁止
変数名は12文字以内に収める*/
function plus(n1, n2) {
  return n1 + n2;
}

function f3(a, b) {
  if (a === "test" && b !== "temp") {
    return b;
  } else {
    return " " + b + "random text";
  }
}

/*let totalNumberOfCatInTokyoAtLastYear = 0;


function plus(n1,n2){return n1+n2;}

function f3(a, b){if(a==="test"&&b!=="temp")
{return b} else{return " " + b + "random text"}}

var totalnumberOf_catIn_tokyo_atLastYear = 0;*/
