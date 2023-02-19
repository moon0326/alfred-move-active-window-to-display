#!/usr/bin/env osascript -l JavaScript

/**
 * Move currently active window to given {query} display.
 */
function run(query) {
	const activeWindow = Application('System Events').processes.whose({ frontmost: {'=': true } })[0];
	const menus = activeWindow.menuBars[0].menus
	const menuItems = menus[menus.length - 2].menuItems;
	const items = [];
	const titles = String(menuItems.name()).split(',');
	let separatorCounter = 0;
	/**
	 * Menu items under `Windows` are separated by a separator.
	 * We're only interested in the 2nd group.
	 */
	for (let i in titles) {
		const title = titles[i];
		if (title === '') {
			separatorCounter++;
			if (separatorCounter === 2) {
				break;
			}
		}

		if (separatorCounter === 1) {
			items.push({
				title: title,
				arg: title
			})
		};
	}

	return JSON.stringify({items});
}
