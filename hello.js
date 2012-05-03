
//	クラス
var TestClass = function()
{
	var Member = function(str){
		this.str = str;
	}
	Member.prototype = {
		GetStr : function(){ return this.str; }
	};

	var mem0 = new Member('xxxxx');
	mem0.str = 'yyy';
	mem0.GetStr2 = function(){ return this.GetStr(); }
	var mem1 = new Member('aaaa');
	mem1.str = 'bbb';
	document.writeln(mem0.GetStr2() + ',' + mem1.GetStr());

	Member.StaticParam = 1234;
	Member.StaticMethod = function(){ return Member.StaticParam; }
	document.writeln(Member.StaticParam + ',' + Member.StaticMethod());
}

//	例外
var TestException = function()
{
	try{
		var i = xx;
	}
	catch(e){
		document.writeln('Exception: ' + e.message);
	}
}

//	2重ループをラベル構文で脱出
var TestLoop = function()
{
	label_y:
	for(var y = 0; y < 20; y++){
		for(var x = 0; x < 20; x++){
			var xy = x * y;
			if(xy > 150){
				break label_y;
			}
			document.write(xy + ', ');
		}
		document.writeln('');
	}
	document.writeln('');
}

//	出力
var TestWrite = function()
{
	//	数値を出力
	document.writeln(100);

	//	undefinedな変数を出力
	var undef;
	document.writeln(undef);

	//	文字列を出力
	document.writeln('HelloWorld!');
}

TestClass();
TestException();
TestLoop();
TestWrite();
