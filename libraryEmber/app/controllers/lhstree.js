import Controller from '@ember/controller';
import AjaxUtil from '../helpers/ajax-util';
import Book from '../models/book';

export default Controller.extend({

	actions: 
	{
		showhideBooks() 
		{
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
