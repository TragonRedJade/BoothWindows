var app_url = "http://surveys.redjade-stage.net";
var fs = require('fs');
var path = require('path');
var os = require("os");


var handleError = function (message) {
    var body = document.body || document.getElementsByTagName('body')[0],
    elem = document.createElement('h1');
    elem.innerHTML = message;
    body.insertBefore(elem, body.childNodes[0]);
}

var guid = (function () {
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

var updateIFrameSrc = function (settings) {
	document.getElementById("my_iframe").src = settings.app_url+"?appkey="+settings.app_key+"";
}



window.onload = function () {
    
    if (os.platform() == "win32") {
        var root_drive = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/";
        try {
            fs.statSync(root_drive + "ProgramData");
            try {
                fs.statSync(root_drive + "ProgramData/RedJade");
            } catch (err) {
                //handleError(err);
                fs.mkdirSync(root_drive + 'ProgramData/RedJade', 0755);
            }
            var key_file_path = root_drive + "ProgramData/RedJade/app.config";
        } catch(err) {
            
        }
    }
    
    if (!key_file_path) {
        var key_file_path = path.dirname(process.execPath).replace(/\\/g, "/") + "/app.config";
    }

    fs.readFile(key_file_path, 'utf-8', function (error, contents) {
	    if(!contents){
		    console.log("no contents");
	        var settings = {
	            app_url: app_url,
	            app_key: guid()
	        };
	        fs.writeFile(key_file_path, JSON.stringify(settings), function (err) {
			    if(err) {
			        console.log(err);
			        handleError(err);
			    } else {
					    console.log("success on write");
			    }
		    });
		    updateIFrameSrc(settings);
	    }else{
		    console.log(contents);
		    updateIFrameSrc(eval("(" + contents + ")"));
	    }
    });
}
