"use strict";



define('library-ember/app', ['exports', 'library-ember/resolver', 'ember-load-initializers', 'library-ember/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('library-ember/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('library-ember/controllers/lhstree', ['exports', 'library-ember/helpers/ajax-util', 'library-ember/models/book'], function (exports, _ajaxUtil, _book) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({

    actions: {
      showhideBooks: function showhideBooks() {
        //this.toggleProperty('isShowBooks');
        /*var url='/getlistofbooks';
        var dataObject='test';
        AjaxUtil.ajaxAsyncNoStringify(url,dataObject).then(function(data) {
        	
        		Book.create({
                      name: data[0]['name'],
                      author: data[0]['author']});
                  
        		});*/

      }
    }
  });
});
define("library-ember/helpers/ajax-util", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Object.create({
		ajaxSync: function ajaxSync(url, data, success) {
			return this.ajax(url, data, success, true, false);
		},
		ajaxAsync: function ajaxAsync(url, data, success) {
			return this.ajax(url, data, success, true, true);
		},
		ajaxAsyncNoStringify: function ajaxAsyncNoStringify(url, data, success) {
			return this.ajax(url, data, success, false, true);
		},
		ajax: function ajax(url, data, success, stringify, isAsync) {
			return new Ember.RSVP.Promise(function (resolve) {
				$.ajax({
					type: "GET",
					//async: isAsync,
					contentType: "text/json; charset=utf-8",
					//dataType: "text/html",
					url: url
					//data: stringify ? "req=" + JSON.stringify(data) : data
				}).done(function (json, textStatus, jqXHR) {
					//alert('Done'); 
					resolve(json);
				}).fail(function (jqXHR, textStatus, errorThrown) {
					//alert('fail');
				});
			});
		}
	});
});
define('library-ember/helpers/app-version', ['exports', 'library-ember/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('library-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('library-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('library-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'library-ember/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('library-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('library-ember/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('library-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('library-ember/initializers/export-application-global', ['exports', 'library-ember/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('library-ember/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('library-ember/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('library-ember/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("library-ember/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define("library-ember/models/book", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Object.extend({
		name: null,
		author: null });
});
define('library-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('library-ember/router', ['exports', 'library-ember/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home');
    this.route('lhstree', function () {
      this.route('allbooks');
    });
  });

  exports.default = Router;
});
define('library-ember/routes/home', ['exports', 'library-ember/helpers/ajax-util'], function (exports, _ajaxUtil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Ember.Route.extend({
    model: function model() {
      var url = '/getlistofbooks';
      var dataObject = 'test';
      _ajaxUtil.default.ajaxAsyncNoStringify(url, dataObject).then(function (data) {

        /*Book.create({
                     name: data[0]['name'],
                     author: data[0]['author']});*/
        //return data;
        return data;
      });
    },

    renderTemplate: function renderTemplate() {
      this.render();
      this.render('lhstree', { outlet: 'lhstree', into: 'home' });
    }
  });
});
define('library-ember/routes/lhstree', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('library-ember/routes/lhstree/allbooks', ['exports', 'library-ember/models/book', 'library-ember/controllers/lhstree', 'library-ember/helpers/ajax-util'], function (exports, _book, _lhstree, _ajaxUtil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;


  var bookPromise = function bookPromise() {
    var url = '/getbookarray';
    var dataObject = 'test';
    return _ajaxUtil.default.ajaxAsyncNoStringify(url, dataObject).then(function (data) {
      return data;
    });
  };

  exports.default = Route.extend({
    model: function model() {
      alert('Creating object...');
      /*	let hibook = Book.create({
                     name: 'Life of Pi',
                     author: 'Yann Martel'
                 })
      	alert(hibook.name);
      	return hibook;*/
      //return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

      /*AjaxUtil.ajaxAsyncNoStringify(url,dataObject).then(function(data) {
      	
      		//Book.create({
                    //name: data[0]['name'],
                   // author: data[0]['author']});
                    //return data;
                   return data;
                
      		});*/

      return Ember.RSVP.hash({
        bookData: bookPromise()
      });
    }
  });
});
define('library-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("library-ember/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ycx4UOej", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[7],[0,\"Library Management System\"],[8],[0,\"\\n\\n\"],[4,\"link-to\",[\"home\"],null,{\"statements\":[[0,\"go to home\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "library-ember/templates/application.hbs" } });
});
define("library-ember/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BGzOhkTX", "block": "{\"symbols\":[],\"statements\":[[6,\"html\"],[7],[0,\"\\n\"],[6,\"head\"],[7],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"body\"],[7],[0,\"    \\n    \"],[6,\"div\"],[9,\"align\",\"left\"],[7],[0,\"\\n    \\t\"],[1,[25,\"outlet\",[\"lhstree\"],null],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"align\",\"right\"],[7],[0,\"\\n    \\t\"],[1,[25,\"outlet\",[\"rhsdata\"],null],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"ul\"],[7],[0,\"\\n    \"],[1,[18,\"data\"],false],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "library-ember/templates/home.hbs" } });
});
define("library-ember/templates/lhstree", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YOtYgZdF", "block": "{\"symbols\":[],\"statements\":[[6,\"ul\"],[7],[0,\"\\n  \"],[6,\"li\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"showhideBooks\"]],[7],[6,\"u\"],[7],[0,\"Load Books\"],[8],[8],[8],[0,\"\\n  \"],[6,\"li\"],[7],[4,\"link-to\",[\"lhstree.allbooks\"],null,{\"statements\":[[6,\"u\"],[7],[0,\"View Books\"],[8]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\nBook List\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "library-ember/templates/lhstree.hbs" } });
});
define("library-ember/templates/lhstree/allbooks", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "f29YLskR", "block": "{\"symbols\":[\"book\"],\"statements\":[[0,\"Please work\\nTesting\\n\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\",\"bookData\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[7],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "library-ember/templates/lhstree/allbooks.hbs" } });
});


define('library-ember/config/environment', [], function() {
  var prefix = 'library-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("library-ember/app")["default"].create({"name":"library-ember","version":"0.0.0+"});
}
//# sourceMappingURL=library-ember.map
