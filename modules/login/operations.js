exports.login = function (link) {
	var username = link.data.username;
	var password = link.data.password;
	
	if (username === "lboieru" && password === "1234") {
		link.data.token = Math.random().toString(36).substring(7);
		link.res.writeHead(200);
		link.res.end(JSON.stringify(link.data));
    } else {
		link.res.writeHead(400);
    	link.res.end('wrong credentials');
    }
};
