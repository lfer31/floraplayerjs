const NodeMediaServer = require('node-media-server');

const config = {
	rtmp: {
	  port: 1935,
	  chunk_size: 60000,
	  ping: 60,
	  ping_timeout: 30
	},
	http: {
	  port: 8800,
	  allow_origin: '*'
	}
};

var nms = new NodeMediaServer(config);
nms.run();
