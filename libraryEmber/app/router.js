import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('lhstree', function() {
    this.route('allbooks');
    this.route('addbook');
  });
});

export default Router;
