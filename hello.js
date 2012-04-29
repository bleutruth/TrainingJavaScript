
//	2重ループをラベル構文で脱出
label_y:
for(var y = 0; y < 20; y++){
	for(var x = 0; x < 20; x++){
		var xy = x * y;
		if(xy > 150){
			break label_y;
		}
		document.write(xy + ", ");
	}
	document.writeln("");
}
document.writeln("");

//	数値を出力
document.writeln(100);

//	undefinedな変数を出力
var undef;
document.writeln(undef);

//	文字列を出力
document.writeln("HelloWorld!");
