module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	? '/whatLink/'
	: '/',
	pwa: {
		name: "WhatLink",
		themeColor: "#4DBA87",
		msTileColor: "#000000",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",
		// configure the workbox plugin
		workboxPluginMode: "GenerateSW",
	},
};
