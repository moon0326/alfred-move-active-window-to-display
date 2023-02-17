#!/usr/bin/env osascript -l JavaScript

function run(query) {
	const system = Application("System Events");
	const activeWindow = system.processes.whose({ frontmost: {'=': true } })[0];
	activeWindow.menuBars[0].menus.byName('Window').menuItems['Move to ' + query].click();
}
