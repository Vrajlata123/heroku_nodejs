const submitbtn=document.getElementById('submitbtn');
const cityname=document.getElementById('cityname');
const city_output=document.getElementById('city_name_output');
var temp=document.getElementById('temp');
var temp_status=document.getElementById('temp_status');
const data_hide=document.querySelector('.middle_layer');
const day=document.getElementById('day');
const today=document.getElementById('today_data');
const getinfo = async(e) =>{
e.preventDefault();
let city_val=cityname.value;

if(cityname.value === '')
{

    city_output.innerText="first enter your city";
    console.log(city_val);
    data_hide.classList.add('data_hide');
}
else
{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_val}&APPID=c1ddb7575df9428ceaba05339f201afc`;
    const response=await fetch(url); 
    const data=await response.json();
    const arr_data=[data];
    city_name_output.innerText=`${arr_data[0].name},${arr_data[0].sys.country}`;
        temp.innerText=arr_data[0].main.temp;
        temp_status.innerText=arr_data[0].weather[0].main;

        const temp_s=arr_data[0].weather[0].main;
        if(temp_s=="Clear")
        {
            temp_status.innerHTML="<i class='fa fa-sun' style='color:#eccc68'></i>";
        }
        else if(temp_s=="Clouds")
        {
            temp_status.innerHTML="<i class='fa fa-cloud' style='color:#f1f2f6'></i>";
        }
        else if(temp_s=="Clouds")
            {
                temp_status.innerHTML="<i class='fa fa-cloud-rain' style='color:#a4b0be'></i>";
            }
            else
            {
                 temp_status.innerHTML="<i class='fa fa-cloud' style='color:#f1f2f6'></i>";
            }
            data_hide.classList.remove('data_hide');
            
    }
    catch{
        city_output.innerText="please enter your city name properly";
        data_hide.classList.add('data_hide');
    }
    
}
}

submitbtn.addEventListener('click',getinfo);