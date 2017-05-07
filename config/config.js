module.exports = {
	"name": "nodulus",
	"url": "",
	"port": "3000",
	"appRoot": "/",
	"enableSockets": true,
	"framework": "express",
	"database": {
		"diskdb": {
			"host": "data"
		}
	},
	"defaultPage": "./public/default.html",
	"websocket": {
		"enable": true
	}
}