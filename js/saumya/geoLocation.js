//Geolocation API
var gLoc = {
	scope:null,
	init: function(){
		console.log('GeoLocation:init:');
	},
	testBrowserSupport: function(){
		var result = false;
		if (navigator.geolocation) {    
	    	// Browser supports it, we're good to go!  
	    	console.log('GeoLocation:testBrowserSupport:Available');
	    	result = true;   
	    } else {    
	    	alert('Sorry your browser doesn\'t support the Geolocation API');    
	    }
	    return result;
	},
	getLocation: function(scopeRef){
		this.scope = scopeRef;
		var that = this;
		//navigator.geolocation.getCurrentPosition(that.exportPosition, that.errorPosition);
		
		navigator.geolocation.getCurrentPosition(function(position){
			// Get the geolocation properties and set them as variables
		    var latitude = position.coords.latitude;
		    var longitude  = position.coords.longitude;
		    //console.log(scopeRef);
		    var result = {'latitude':latitude,'longitude':longitude};
		    scopeRef.onGotLocation(result);
		}, that.errorPosition);
		
		return false;
	},
	/*
	exportPosition: function(position){
		console.log('GeoLocation:exportPosition:');
		console.log(this.scope);
		// Get the geolocation properties and set them as variables
	    var latitude = position.coords.latitude;
	    var longitude  = position.coords.longitude;
	    this.scope.onGotLocation({});
	},*/
	errorPosition: function () {                  
    	//alert('Sorry couldn\'t find your location');
    	console.log('GeoLocation:errorPosition:');    
    },
	destroy: function(){}
};