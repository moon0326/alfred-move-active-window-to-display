#!/usr/bin/env osascript -l JavaScript
function run(path) {
	ObjC.import('stdlib');
	const menuPatterns = [
		'로 이동',
		'Move to'
	];
	const activeWindow = Application('System Events').processes.whose({ frontmost: {'=': true } })[0];
	const menus = activeWindow.menuBars[0].menus
	const menuItems = menus[menus.length - 2].menuItems;
	const items = String(menuItems.name()).split(',').filter((item) => {
		for (let i in menuPatterns) {
			if (item.indexOf(menuPatterns[i]) !== -1) {
				return true;
			}
		}
	}).map((item) => {
		return {
			title: item,
			arg: item
		}
	})

	return JSON.stringify({items});
}
