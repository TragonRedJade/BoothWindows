var guid = (function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
							 .toString(16)
							 .substring(1);
	}
	return function() {
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
					 s4() + '-' + s4() + s4() + s4();
	};
})();

var updateIFrameSrc = function(key){
	document.getElementById("my_iframe").src = "http://surveys.redjade.net?appkey="+key+"";
}

var fs = require('fs');
fs.readFile('../appkey.txt', 'utf-8', function (error, contents) {
	if(!contents){
		alert("no contents");
		var new_guid = guid();
		fs.writeFile('../appkey.txt', new_guid, function(err) {
			if(err) {
					alert(err);
			} else {
					alert("success on write");
			}
		});
		updateIFrameSrc(new_guid);
	}else{
		alert(contents);
		updateIFrameSrc(contents);
	}
});