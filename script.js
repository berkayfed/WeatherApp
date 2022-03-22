const form = document.querySelector(".arama");
const city = document.querySelector(".cityval");
const cityName = document.querySelector("#cityName")

const url = (location)=> `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=46925c7b2f6f03f0c2c6e65ff7a4b138`;

async function getWeather(location){
    const resp = await fetch(url(location), {origin:"cors"});
    const respData = await resp.json()
    Page(respData)
    console.log(respData)
    
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    clear()
})


function Page (data){
    

    const weather = document.querySelector("#divsp");
    weather.innerHTML=`
     
    <span class="weatherinf" id="status">${KtoC(data.main.temp)}C° ${data.weather[0].description}</span>
    <img class="iimg" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    `
    cityName.innerHTML=`
    ${data.name}
    `
       
}
function clear(){
    city.value = "";
}

function KtoC(K){
     return (K-273.15).toFixed()
}


