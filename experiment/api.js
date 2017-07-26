const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;


class API extends ExtensionAPI {
  getAPI(context) {
    return {
      // Insert Experiment API here.
      // Note: the namespace (boilerplate must match the id in the install.rdf)
      showonlythesetabs: {
        async showOnlyTheseTabs(tabIds) {

          // Convert WE tabs into XUL tabs
          var tabs = tabIds.map(function(tab) {
            return extension.tabManager.get(tab.id, null);
          });

          // Get current browser window
					var wm = Cc["@mozilla.org/appshell/window-mediator;1"]
                   .getService(Ci.nsIWindowMediator);
					var browserWindow = wm.getMostRecentWindow("navigator:browser");

          // Set visible tabs
          var tabbrowser = browserWindow.tabbrowser;
          tabbrowser.showOnlyTheseTabs(tabs);
        }
      }
    };
  }
}
