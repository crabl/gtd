/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

// Controllers
import MainController from './main/main.controller';

// Third-Party Libraries
import List from '../app/components/list/list.service';

// Services
import InboxService from './inbox/inbox.service';
import CategoriesService from './categories/categories.service';
import FeedService from './feed/feed.service';

import NavbarDirective from '../app/components/navbar/navbar.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';

angular.module('gtd', ['ngTouch', 'ui.router', 'angular.filter'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .constant('List', List)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('InboxService', InboxService)
  .service('CategoriesService', CategoriesService)
  .service('FeedService', FeedService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
