//ref
/*
{
"coord":{"lon":73.86,"lat":18.52},
"sys":{"message":0.0502,"country":"IN","sunrise":1402964896,"sunset":1403012567},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
"base":"cmc stations",
"main":{"temp":26.879,"temp_min":26.879,"temp_max":26.879,"pressure":945.39,"sea_level":1014.96,"grnd_level":945.39,"humidity":69},
"wind":{"speed":6.51,"deg":243.004},
"rain":{"3h":0},
"clouds":{"all":56},
"dt":1403001161,
"id":7357900,
"name":"Viman Nagar",
"cod":200
}
*/

//foundation
$(document).foundation();
//jQuery
$( document ).ready( function(){
	console.log('Doc Ready!');
	$('#btnSend').on('click',function(event){
		event.preventDefault();
		mailgun.sendMail();
		return false;
	});
	/*
	//geolocation
	gLoc.init();
	var r = gLoc.testBrowserSupport();
	var that = this;
	if(r){
		$('#btnGetLoc').on('click',function(event){
			event.preventDefault();
			//navigator.geolocation.getCurrentPosition(exportPosition, errorPosition);
			gLoc.getLocation(that);
			return false;
		});
	}
	var onGotLocation = function(locObj){
		console.log('AppJs:onGotLocation:');
		console.log(locObj);
	};
	*/
	AppController.init();
} );

var AppController = {
	//geoLocationUtil:null,
	init: function(){
		console.log('AppController:init:');
		//console.log(this.geoLocationUtil); 
		//this.geoLocationUtil = gLoc;
		gLoc.init();
		WeatherUtil.init();
		//
		var r = gLoc.testBrowserSupport();
		var that = this;
		if(r){
			
			$('#btnGetLoc').on('click',function(event){
				event.preventDefault();
				//navigator.geolocation.getCurrentPosition(exportPosition, errorPosition);
				//that.checkGeoLocationAndProceed();
				gLoc.getLocation(that);
				return false;
			});

			//automatic call
			//gLoc.getLocation(that);
		}
	},
	onGotLocation: function(LocationObject){
		console.log('AppController:onGotLocation:');
		//console.log(LocationObject);
		var that = this;
		WeatherUtil.getWeatherForLocation(LocationObject,that);
	},
	onGotWeather: function(weatherResult){
		console.log('AppController:onGotWeather:');
		console.log(weatherResult);
		var w = weatherResult.weather[0];
		var imgName = w.icon;
		var imgURL = 'http://openweathermap.org/img/w/'+imgName+'.png';
		//set the image
		$("#idImgWeather").attr({
		  src: imgURL,
		  title: "Weather",
		  alt: "Wetaher Now"
		});
		//set Data
		var weatherData = w.description;
		$('#w1Desc').html(weatherData);
		//set Temperature
		var uString = 'Celcius';
		var tMain = weatherResult.main;
		var t1 = tMain.temp + uString;//current temperature
		$('#w2').html(t1);
		var humid = tMain.humidity + 'Humidity';//humidity
		$('#w3').html(humid);
	},
	destroy: function(){}
};

