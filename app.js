var search=document.querySelector('.search')
var city=document.querySelector('.city')
var country=document.querySelector('.country')
var value=document.querySelector('.value')

var shortDesc=document.querySelector('.short-desc')
var visibility=document.querySelector('.visibility span')
var wind=document.querySelector('.wind span')
var temp=document.querySelector('.temp span')
var value=document.querySelector('.value')
var time=document.querySelector('.time')
var content=document.querySelector('.content')
var body=document.querySelector('body')




async function changWeatherUI(capitalSearch){
	
	let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=8c2d15b3443845fe1c6299eddc68754c`


	let data =await fetch(apiURL).then(res=> res.json())
	if(data.cod == 200){
		content.classList.remove('hide')
		city.innerHTML=data.name;
		country.innerHTML=data.sys.country
		visibility.innerHTML=data.visibility
		wind.innerHTML=data.wind.speed + "m/s"
		temp.innerHTML=data.main.humidity +"%"
		//value.innerHTML=Math.round(data.main.temp -273.15)
		let tempp=Math.round(data.main.temp -273.15)
		value.innerHTML=tempp
		
		shortDesc.innerHTML= data.weather[0] ? data.weather[0].main :""
		time.innerHTML=new Date().toLocaleString('vi')


		body.setAttribute('class','hot')
		if(27<tempp<40){
			body.setAttribute('class', 'hot')
		}
		if(20 <=tempp<25){
			body.setAttribute('class', 'clouds')
		}
	
		if(tempp <=19){
			body.setAttribute('class', 'cold')
		}
		

	}
	else{
		content.classList.add('hide')

	}

	
}


search.addEventListener('keypress',function(e){
	if(e.code === 'Enter'){
		let capitalSearch = search.value.trim()
		changWeatherUI(capitalSearch)
	}
})


changWeatherUI('Vung Tau')

