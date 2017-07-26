function hideAllOtherTabs() {

	function onTabs(tabs) {
  		browser.showonlythesetabs.showOnlyTheseTabs(tabs.map(tab => tab.id));
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}

	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(onTabs, onError);
}

browser.browserAction.onClicked.addListener(hideAllOtherTabs);
