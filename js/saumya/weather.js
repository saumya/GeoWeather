//ref : http://openweathermap.org/my
var WeatherUtil = {
	'appId': 'd7294bb0cf2c11c186be40c7d0963947',
	init: function(){
		console.log('WeatherUtil:init:');
		console.log(this.appId);
	},
	getWeatherForLocation: function(locObj,scope){
		console.log('WeatherUtil:getWeatherForLocation:');
		console.log(locObj);
		var lat = locObj.latitude;
		var lon = locObj.longitude;
		var u = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon;
		var un = '&units=metric';//celcius
		//var un = '&units=imperial';//farenheit
		var lang = '&lang=zh_cn';
		var a = '&APPID='+this.appId;

		//var uri = u+units+lang+a;//with API key
		//var uri = u+units+lang;//with language setting
		
		var uri = u+un+a;
		

		//console.log(u);
		data = {};//empty data
		$.ajax({
		  dataType: "json",
		  url: uri,
		  data: data,
		  success: function(data){
		  	console.log('WeatherUtil:getWeatherForLocation:Success');
		  	//console.log(data);
		  	//console.log(data.name);
		  	scope.onGotWeather(data);
		  },
		  fail: function(error){
		  	console.log('WeatherUtil:getWeatherForLocation:Fail');
		  	console.log(error);
		  }
		});
	},
	destroy: function(){
		console.log('WeatherUtil:destroy:');
	}
};