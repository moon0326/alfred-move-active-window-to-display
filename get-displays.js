#!/usr/bin/env osascript -l JavaScript

function getDisplays() {
	app = Application.currentApplication()
	app.includeStandardAdditions = true
	return app.doShellScript("system_profiler SPDisplaysDataType | grep -A99 '      Displays:'");
}

function run() {
	const displays = getDisplays().replace('Displays:', '');
	const items = displays.match(/^[ ]+(.+):$/gm).map((name) => {
		 name = name.trim().replace(':', '');
		 return {
		 	title: name,
		 	arg: name
		 }
	});

 	return JSON.stringify({items});
}

