import Controller from '@ember/controller';
import AjaxUtil from '../../helpers/ajax-util';

export default Controller.extend({
	actions:
	{
		addNewBook: function()
		{
			//var bookname = this.get('bookname');
			//var author = this.get('author');
			var Dobject = {
				bookName: this.get('bookname'),
				author: this.get('author')
			};
			
			var url='/addNewBook';
    		AjaxUtil.ajaxAsync(url,Dobject).then(function(data) {
    			

    			/*Book.create({
                    name: data[0]['name'],
                    author: data[0]['author']});*/
                    //return data;
                    //alert(data);
                   return data;
                


    		});


		}
	}
});
