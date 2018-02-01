import Ember from 'ember';
import Route from '@ember/routing/route';
import AjaxUtil from '../helpers/ajax-util';

export default Ember.Route.extend({
	renderTemplate:function()
    {
        this.render();
        this.render('lhstree',{outlet:'lhstree',into:'home'});
    }
});
