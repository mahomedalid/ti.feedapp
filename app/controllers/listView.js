var log = require('log');

var args = arguments[0] || {};

var api = {
    data : {},

    initialize: function() {
        if (args.pulltorefresh) {
            args.pulltorefresh.setCallback(api.doRefresh);
        }

		Ti.API.info('updateListView called from initialize');
        api.updateListView(api.data);
    },

    doRefresh: function(e) {
        // Call your updateListView function
		Ti.API.info('updateListView called');
        api.updateListView(data);
    },

    updateListView: function() {
		Ti.API.info('updateListView entered');
		
        if (args.pulltorefresh && api.data) {
            args.pulltorefresh.stop(api.data.length * 240, 20);
        }
	
        // The update of your listView
        // ...
    }
};

api.initialize();