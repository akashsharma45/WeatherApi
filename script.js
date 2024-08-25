async function getWeather() {

    const city = document.getElementById('city-input').value||'kanpur';
    const apiKey = '835ec92492d0465ab55192523241008'; // Your API key
    console.log(city);

    try{
        const rawData= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=yes`);
        const weatherData= await rawData.json();
        console.log(weatherData);
        document.getElementById('city-name').textContent = weatherData?.location?.name;
        document.getElementById('location').textContent = ` ${weatherData?.location?.region}, ${weatherData?.location?.country}`;

        document.getElementById('temperature').textContent = `${weatherData?.current?.temp_c} °C`;
        document.getElementById('condition').textContent=` ${weatherData?.current?.condition?.text}`;
        document.getElementById('wind_speed').textContent = `${weatherData?.current?.wind_kph} km/h`;
        document.getElementById('wind_dir').textContent = `${weatherData?.current?.wind_dir}`;
        document.getElementById('pressure').textContent = `${weatherData?.current?.pressure_mb} mb`;
        document.getElementById('humidity').textContent = `${weatherData?.current?.humidity} %`;
        document.getElementById('visibility').textContent = `${weatherData?.current?.vis_km} km`;

        

        // accessing hourly data
        document.getElementById('00').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[0]?.condition?.icon}`;
        document.getElementById('12am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[0]?.temp_c} °C`;

        document.getElementById('1').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[1]?.condition?.icon}`;
        document.getElementById('1am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[1]?.temp_c} °C`;

        
        document.getElementById('2').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[2]?.condition?.icon}`;
        document.getElementById('2am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[2]?.temp_c} °C`;

        
        document.getElementById('3').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[3]?.condition?.icon}`;
        document.getElementById('3am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[3]?.temp_c} °C`;

        
        document.getElementById('4').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[4]?.condition?.icon}`;
        document.getElementById('4am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[4]?.temp_c} °C`;

        
        document.getElementById('5').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[5]?.condition?.icon}`;
        document.getElementById('5am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[5]?.temp_c} °C`;

        
        document.getElementById('6').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[6]?.condition?.icon}`;
        document.getElementById('6am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[6]?.temp_c} °C`;

        
        document.getElementById('7').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[7]?.condition?.icon}`;
        document.getElementById('7am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[7]?.temp_c} °C`;

        
        document.getElementById('8').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[8]?.condition?.icon}`;
        document.getElementById('8am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[8]?.temp_c} °C`;

        
        document.getElementById('9').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[9]?.condition?.icon}`;
        document.getElementById('9am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[9]?.temp_c} °C`;

        
        document.getElementById('10').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[10]?.condition?.icon}`;
        document.getElementById('10am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[10]?.temp_c} °C`;

        
        document.getElementById('11').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[11]?.condition?.icon}`;
        document.getElementById('11am').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[11]?.temp_c} °C`;

        
        document.getElementById('12').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[12]?.condition?.icon}`;
        document.getElementById('12pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[12]?.temp_c} °C`;

         
        document.getElementById('13').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[13]?.condition?.icon}`;
        document.getElementById('13pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[13]?.temp_c} °C`;

         
        document.getElementById('14').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[14]?.condition?.icon}`;
        document.getElementById('14pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[14]?.temp_c} °C`;

         
        document.getElementById('15').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[15]?.condition?.icon}`;
        document.getElementById('15pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[15]?.temp_c} °C`;

         
        document.getElementById('16').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[16]?.condition?.icon}`;
        document.getElementById('16pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[16]?.temp_c} °C`;

         
        document.getElementById('17').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[17]?.condition?.icon}`;
        document.getElementById('17pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[17]?.temp_c} °C`;

         
        document.getElementById('18').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[18]?.condition?.icon}`;
        document.getElementById('18pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[18]?.temp_c} °C`;

         
        document.getElementById('19').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[19]?.condition?.icon}`;
        document.getElementById('19pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[19]?.temp_c} °C`;

         
        document.getElementById('20').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[20]?.condition?.icon}`;
        document.getElementById('20pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[20]?.temp_c} °C`;

         
        document.getElementById('21').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[21]?.condition?.icon}`;
        document.getElementById('21pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[21]?.temp_c} °C`;

         
        document.getElementById('22').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[22]?.condition?.icon}`;
        document.getElementById('22pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[22]?.temp_c} °C`;

         
        document.getElementById('23').src = `https:${weatherData?.forecast?.forecastday?.[0]?.hour?.[23]?.condition?.icon}`;
        document.getElementById('23pm').textContent = `${weatherData?.forecast?.forecastday?.[0]?.hour?.[23]?.temp_c} °C`;

        

        // info div starts-->

        
        document.getElementById('aqi').textContent = `${weatherData?.current?.air_quality?.['us-epa-index']}`;
        document.getElementById('co').textContent=` ${weatherData?.current?.air_quality?.co}`;
        document.getElementById('no2').textContent = `${weatherData?.current?.air_quality?.no2}`;
        document.getElementById('o3').textContent = `${weatherData?.current?.air_quality?.o3}`;
        document.getElementById('so2').textContent = `${weatherData?.current?.air_quality?.so2}`;
        document.getElementById('pm10').textContent = `${weatherData?.current?.air_quality?.pm10}`;
        

        document.getElementById('max_temp').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.maxtemp_c} °C`;
        document.getElementById('min_temp').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c} °C`;
        document.getElementById('avg_temp').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.avgtemp_c} °C`;
        document.getElementById('max_wind').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.maxwind_kph} Kph`;
        document.getElementById('precipitation').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.totalprecip_mm} Mm`;
        document.getElementById('rain_probability').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain} %`;
        
        document.getElementById('sunrise').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.sunrise}`;
        document.getElementById('moonrise').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moonrise}`;
        document.getElementById('moon_phase').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moon_phase}`;
        document.getElementById('moonrise').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moonrise}`;
        document.getElementById('sunset').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.sunset}`;
        document.getElementById('moonset').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moonset}`;
        document.getElementById('moon_illumination').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moon_illumination}`;
        // document.getElementById('description').textContent = `Description: ${weatherData?.current?.condition?.text}`;
        // document.getElementById('humidity').textContent = `Humidity: ${weatherData?.current?.humidity}%`;


        // 7 day forecast

        document.getElementById('date1').textContent = `${weatherData?.forecast?.forecastday[1]?.date}`;
        document.getElementById('day1').src=`https:${weatherData?.forecast?.forecastday[1]?.day?.condition?.icon}`
        document.getElementById('day1_temp').textContent = `${weatherData?.forecast?.forecastday[1]?.day?.avgtemp_c}°C`;
        
        document.getElementById('date2').textContent = `${weatherData?.forecast?.forecastday[2]?.date}`;
        document.getElementById('day2').src=`https:${weatherData?.forecast?.forecastday[2]?.day?.condition?.icon}`
        document.getElementById('day2_temp').textContent = `${weatherData?.forecast?.forecastday[2]?.day?.avgtemp_c}°C`;
        
        document.getElementById('date3').textContent = `${weatherData?.forecast?.forecastday[3]?.date}`;
        document.getElementById('day3').src=`https:${weatherData?.forecast?.forecastday[3]?.day?.condition?.icon}`
        document.getElementById('day3_temp').textContent = `${weatherData?.forecast?.forecastday[3]?.day?.avgtemp_c}°C`;
        
        document.getElementById('date4').textContent = `${weatherData?.forecast?.forecastday[4]?.date}`;
        document.getElementById('day4').src=`https:${weatherData?.forecast?.forecastday[4]?.day?.condition?.icon}`
        document.getElementById('day4_temp').textContent = `${weatherData?.forecast?.forecastday[4]?.day?.avgtemp_c}°C`;
        
        document.getElementById('date5').textContent = `${weatherData?.forecast?.forecastday[5]?.date}`;
        document.getElementById('day5').src=`https:${weatherData?.forecast?.forecastday[5]?.day?.condition?.icon}`
        document.getElementById('day5_temp').textContent = `${weatherData?.forecast?.forecastday[5]?.day?.avgtemp_c}°C`;
        
        document.getElementById('date6').textContent = `${weatherData?.forecast?.forecastday[6]?.date}`;
        document.getElementById('day6').src=`https:${weatherData?.forecast?.forecastday[6]?.day?.condition?.icon}`
        document.getElementById('day6_temp').textContent = `${weatherData?.forecast?.forecastday[6]?.day?.avgtemp_c}°C`;

        


    }catch(error){
        console.log("Api is not able to fetch data 🥹🥹");
        console.log(error);
    }
    
}

getWeather();

let x=true;

function dayNight(){
    if(x){
        document.body.style.backgroundImage = "url('')";
        document.getElementById('night-day').textContent = `Dark`;
        x=!x;
    }
    else{
        document.body.style.backgroundImage = "url('587601.jpg')";
        document.getElementById('night-day').textContent = `Light`;
        x=!x;
    }
}

x=false;
function iphone13(){
    if(x){
        document.body.style.backgroundImage = "url('')";
        document.getElementById('btn').textContent = `🌙`;
        x=!x;
    }
    else{
        document.body.style.backgroundImage = "url('587601.jpg')";
        document.getElementById('btn').textContent = `🌞`;
        x=!x;
    }
}

