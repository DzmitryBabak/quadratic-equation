module.exports = function solveEquation(equation) {


  var txt = equation;
  // var txt='-294 * x^2 - 141195558 * x -1600964090384736';
  var re1 = '(\\d+|[-+]\\d+)';	// Integer Number 1
  var re2 = '(\\s+)';	// White Space 1
  var re3 = '(\\*)';	// Any Single Character 1
  var re4 = '(\\s+)';	// White Space 2
  var re5 = '((?:[a-z][a-z0-9_]*))';	// Variable Name 1
  var re6 = '(\\^)';	// Any Single Character 2
  var re7 = '(\\d+)';	// Integer Number 1
  var re8 = '(\\s+)';	// White Space 3
  var re9 = '(.)';	// Any Single Character 3
  var re10 = '(\\s+)';	// White Space 4
  var re11 = '(\\d+|[-+]\\d+)';	// Integer Number 2
  var re12 = '(\\s+)';	// White Space 5
  var re13 = '(\\*)';	// Any Single Character 4
  var re14 = '(\\s+)';	// White Space 6
  var re15 = '((?:[a-z][a-z0-9_]*))';	// Variable Name 2
  var re16 = '(\\s+)';	// White Space 7
  var re17 = '(.)';	// Any Single Character 5
  var re18 = '(\\s+)';	// White Space 8
  var re19 = '(\\d+|[-+]\\d+)';	// Integer Number 3

  var p = new RegExp(re1 + re2 + re3 + re4 + re5 + re6 + re7 + re8 + re9 + re10 + re11 + re12 + re13 + re14 + re15 + re16 + re17 + re18 + re19, ["i"]);
  var m = p.exec(txt);
  if (m != null) {
    var signed_int1 = m[1]; //+/-xbckj
    var ws1 = m[2]; //sp
    var c1 = m[3];
    var ws2 = m[4];
    var var1 = m[5];
    var c2 = m[6];
    var int1 = m[7];
    var ws3 = m[8];
    var c3 = m[9]; //-+
    var ws4 = m[10];
    var int2 = m[11];
    var ws5 = m[12];
    var c4 = m[13];
    var ws6 = m[14];
    var var2 = m[15];
    var ws7 = m[16];
    var c5 = m[17]; //-*
    var ws8 = m[18];
    var int3 = m[19];


    var para=parseInt(signed_int1);
    var parb=parseInt(int2);
    var parc=parseInt(int3);

    if (c3 == '-') {

      parb = -parb;

    }

    if (c5 == '-') {

      parc = -parc;

    }

    var diz = Math.pow(parb, 2) - 4 * para * parc//расчёт дискреминанта

    var e = eval(-parb + Math.sqrt(diz)) / (2 * para)// расчёт если дискр. > 0 для х1
    var e1 = eval(-parb - Math.sqrt(diz)) / (2 * para)//расчёт если дискр. > 0 для х2
  console.log(Math.round(e),Math.round(e1));
if(para<1)   
return [Math.round(e),Math.round(e1)]
else
return [Math.round(e1),Math.round(e)]
  }
}
