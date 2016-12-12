# weatherapp
simpleWeatherjs.com based weather app that utilizes 5 digit ZIP code entry. original code is from Cloudstudio (Upamanyu Das) at www.upamanyu.in. original video tutorial and code download link: https://www.youtube.com/watch?v=lpLUx-0t7aE.

##Instructions

download and upload to server if necessary

pull up the weatherapp folder (unless you decided to rename it) in the browser of choice. index.html should pull up automatically on a webserver, otherwise add the filename to the url.

##Usage
in the js/weather.js file, you have a prepopulated ZIP code in the first line that can be configured as the initial location for the simpleweather.js script. once the code is changed and saved, the index.html file can be loaded with current weather and a 5-day forecast overview for the chosen location. the ZIP code location can be changed on the index page and is validated with JavaScript to check for 5 characters so Miami, Boise and other cities will validate as well as the actual ZIP code. 
