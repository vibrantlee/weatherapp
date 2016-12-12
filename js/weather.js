loadWeather("23386");


$(document).ready(function() {
	setInterval(loadWeather, 10000);
});

function loadWeather(location) {
	$.simpleWeather({
		location: location,
		unit: 'f',
		success: function(weather) {
			city = weather.city;
			temp = weather.temp+'&deg;';
			wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
			humidity = weather.humidity + ' %';
			forecast = '<p class="fcasttitle">5 Day Forecast</p><table>';
			for(var i=0; i<5;i++) {forecast += '<tr><td>'+ weather.forecast[i].day +':</td><td>'+ weather.forecast[i].high +'&deg;</td><td>'+ weather.forecast[i].low +'&deg;</td><td class="righta">'+ weather.forecast[i].text + '</td></tr>';} '</table>';
			$(".location").text(city);
			$(".temperature").html(temp);
			$(".climate_bg").html(wcode);
			$(".windspeed").html(wind);
			$(".humidity").text(humidity);
			$(".forecast").html(forecast);
		},
		error: function(error) {
			$(".error").html('<p>' + error + '</p>');
		}
	});
	
}
