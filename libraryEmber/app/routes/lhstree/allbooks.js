import Ember from 'ember';
import Route from '@ember/routing/route';
import Book from '../../models/book';
import Bookobject from '../../controllers/lhstree';
import AjaxUtil from '../../helpers/ajax-util';

var bookPromise = function(){
	var url='/getbookarray';
    		var dataObject='test';
	return AjaxUtil.ajaxAsyncNoStringify(url,dataObject).then(function(data) {
		return data;
	});
}

export default Route.extend({
	model()
	{
		//alert('Creating object...');
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
