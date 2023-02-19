#!/usr/bin/env osascript -l JavaScript

function run(query) {
	const system = Application("System Events");
	const activeWindow = system.processes.whose({ frontmost: {'=': true } })[0];
	const menus = activeWindow.menuBars[0].menus
	menus[menus.length - 2].menuItems[query].click();
}
