const search_btn=document.querySelector("#city_btn");
const city_name=document.querySelector("#info_name");
const city_temp=document.querySelector("#info_temp");
const city_humid=document.querySelector("#info_humid");
const city_temp_max=document.querySelector("#info_temp_max");
const city_temp_min=document.querySelector("#info_temp_min");
const city_cloud_speed=document.querySelector("#info_wind_speed");
const city_err=document.querySelector("#city_err");
search_btn.addEventListener("click",()=>{
    const APIKey='bc3042661d37e280469b1b7f31787a0f';
    const city=document.querySelector('#city_search').value;

    if (city==""){
        city_err.innerHTML="請輸入城市名稱";
        city_err.style.display='block';
        
    }else if(city!=""){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json()).then(json => {

        if(json.cod=='404'){
            const section_info=document.querySelector("#search_info");
            
            search_info.style.display="none";
            city_err.style.display="block";
        }else if(json.cod!='404'){
            search_info.style.display="block";
            city_err.style.display="none";

       
        console.log(json);
        console.log(json.weather[0].main);
        city_name.innerHTML=`${json.name}`;
        city_temp.innerHTML=`${json.main.temp}<span>℃</spa>`;
        city_humid.innerHTML=`${json.main.humidity}<span>%</spa>`;
        city_temp_max.innerHTML=`${json.main.temp_max}<span>℃</spa>`;
        city_temp_min.innerHTML=`${json.main.temp_min}<span>℃</spa>`;
        city_cloud_speed.innerHTML=`${json.wind.speed}`;
    }
    });
};
})