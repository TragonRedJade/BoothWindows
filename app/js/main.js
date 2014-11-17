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
	document.getElementById("my_iframe").src = "http://surveys.redjade-stage.net?appkey="+key+"";
}

var fs = require('fs');
fs.readFile('../appkey.txt', 'utf-8', function (error, contents) {
	if(!contents){
		console.log("no contents");
		var new_guid = guid();
		fs.writeFile('../appkey.txt', new_guid, function(err) {
			if(err) {
					console.log(err);
			} else {
					console.log("success on write");
			}
		});
		updateIFrameSrc(new_guid);
	}else{
		console.log(contents);
		updateIFrameSrc(contents);
	}
});