function hideAllOtherTabs() {

	function onTabs(tabs) {
		for (let tab of tabs) {
			console.log('tab id', tab.id);
  		browser.showonlythesetabs.showOnlyTheseTabs([tab.id]);
		}
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}

	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(onTabs, onError);
}

browser.browserAction.onClicked.addListener(hideAllOtherTabs);
