export default Ember.Object.create({
ajaxSync:function(url,data,success){
    return this.ajax(url,data,success,true,false);
},
ajaxAsync:function(url,data,success){
    return this.ajax(url,data,success,true,true);
},
ajaxAsyncNoStringify:function(url,data,success){
    return this.ajax(url,data,success,false,true);
},
ajax:function(url, data, success, stringify,isAsync)
{
	return new Ember.RSVP.Promise(function (resolve) 
    {
	$.ajax({
		type: "GET",
        async: isAsync,
        contentType: "text/json; charset=utf-8",
        //dataType: "text/html",
        url: url,
        data: stringify ? "req=" + JSON.stringify(data) : data
	})
	
	    .done(function(json, textStatus, jqXHR){
	    	 //alert('Done'); 
		    resolve(json);
	    })
	    .fail(function(jqXHR, textStatus, errorThrown){
			//alert('fail');
		});
	});
}
});
